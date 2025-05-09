import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import db from "@/lib/db";
import { getUserFromToken } from "@/lib/auth";
import { cookies } from "next/headers";


const userInput = z.object({
    recieverId: z.string(),
    amount: z.number().positive(),
})

type userInputParse = z.infer<typeof userInput>

export async function POST(req: NextRequest) {
    try {
        const { recieverId, amount }: userInputParse = userInput.parse(await req.json());

        const transactions = await db.$transaction(async (tx) => {

            const cookieStore = await cookies();
            const token = cookieStore.get('token')?.value;
            const userData = getUserFromToken(token || '')

            if (!userData) {
                return NextResponse.json({
                    message: `can't fetch user data`
                })
            }

            const sender = await tx.user.findUnique({
                where: {
                    email: userData?.email
                },
                include: {
                    bankAccount: true,
                }
            })

            if (!sender) throw new Error(`Cannot find sender's account`);

            const reciever = await tx.bankAccount.findUnique({
                where: {
                    id: recieverId
                },
                include: {
                    user: true,
                }
            })

            if (!reciever) throw new Error(`Can't find reciever's account`);

            if (amount < 0) {
                return NextResponse.json({
                    message: `please enter a valid amount`
                })
            }

            if (sender.bankAccount[0].balance < amount) throw new Error(`Insufficient balance in sender's account`);

            if(!sender.bankAccount[0].KYC_Status || !reciever.KYC_Status) throw new Error('KYC of either sender or reciever is pending');

            const updateSenderBalance = await tx.bankAccount.update({
                where: {
                    user_id: userData?.id
                },
                data: {
                    balance: {
                        decrement: amount
                    }
                }
            })

            const updateRecieverBalance = await tx.bankAccount.update({
                where: {
                    id: recieverId
                },
                data: {
                    balance: {
                        increment: amount
                    }
                }
            })

            const recordTransaction = await tx.transaction.create({
                data: {
                    senderId: sender.bankAccount[0].id,
                    recieverId,
                    amount,
                }
            })
        })

        return NextResponse.json({
            message: "Transaction successfull",
          });

    } catch (err: any) {
        return NextResponse.json({
            message: err.message || `Something went wrong!`
        })
    }
}