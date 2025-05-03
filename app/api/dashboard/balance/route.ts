import { NextRequest, NextResponse } from "next/server";
import { z } from 'zod';
import { cookies } from "next/headers";
import { getUserFromToken } from "@/lib/auth";
import dotenv from 'dotenv';
import db from "@/lib/db";
dotenv.config();

const inputDetails = z.object({
    balance: z.number(),
});

type inputParams = z.infer<typeof inputDetails>;

export async function POST(req: NextRequest) {
    try {
        const { balance }: inputParams = inputDetails.parse(await req.json());

        if (balance < 0) {
            return NextResponse.json({ message: `please enter a valid number!` }, { status: 400 });
        }

        const cookieStore = await cookies();
        const token = cookieStore.get('token')?.value;
        const userData = getUserFromToken(token || '');

        if (!userData) {
            console.log('invalid or expired token');
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        }

        const result = await db.$transaction(async (tx) => {
            const userExist = await tx.bankAccount.findUnique({
                where: {
                    user_id: userData?.id
                }
            })

            if(!userExist){
                return NextResponse.json({
                    message: `User doesn't exists!`
                })
            }

            const res = await tx.bankAccount.update({
                where: {
                    user_id: userData?.id
                },
                data:{
                    balance: {
                        increment: balance
                    }
                }
            })
        })

        return NextResponse.json({
            message: `amount added successfully`,
        });

    } catch (err) {
        console.error(err);  // ✅ Log error to debug it
        return NextResponse.json({
            message: `Something's up with the server!`,
        }, { status: 500 });
    }
}
