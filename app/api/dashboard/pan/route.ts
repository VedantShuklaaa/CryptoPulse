import { NextRequest, NextResponse } from "next/server";
import { z } from 'zod';
import { cookies } from "next/headers";
import { getUserFromToken } from "@/lib/auth";
import dotenv from 'dotenv';
import db from "@/lib/db";
dotenv.config();

const inputDetails = z.object({
    PAN_number: z.string().regex(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,'Invalid PAN number format')
});

type inputParams = z.infer<typeof inputDetails>;

export async function POST(req: NextRequest) {
    try {
        const { PAN_number }: inputParams = inputDetails.parse(await req.json());

        const cookieStore = await cookies();
        const token = cookieStore.get('token')?.value;
        const userData = getUserFromToken(token || '');

        if (!userData) {
            console.log('invalid or expired token');
            return NextResponse.json(
                { message: 'Unauthorized' },
                { status: 401 }
            );
        }

        const result = await db.$transaction(async (tx) => {
            const existingUser = tx.bankAccount.findUnique({
                where: {
                    user_id: userData?.id
                }
            })

            if (!existingUser) {
                return NextResponse.json({
                    message: `User doesn't exist`
                })
            }

            const res = await tx.bankAccount.update({
                where: {
                    user_id: userData.id
                },
                data: {
                    PAN_number,
                    KYC_Status: true,
                }
            })
        })

        return NextResponse.json({
            message: `Credentials successfully sent, we will notify you once the process is done`,
        });

    } catch (err) {
        console.error(err);
        return NextResponse.json({
            message: `Something's up with the server!`,
        }, { status: 500 });
    }
}
