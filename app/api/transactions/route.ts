import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getUserFromToken } from "@/lib/auth";
import db from "@/lib/db";

export async function GET(res: NextResponse) {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get('token')?.value;
        const userData = getUserFromToken(token || '');

        if (!userData) throw new Error(`can't fetch user data`);

            const User = await db.user.findUnique({
                where: {
                    email: userData?.email
                },
                include: {
                    bankAccount: true
                }
            })

            const bankAccountId = User?.bankAccount[0].id

            const transactions = await db.transaction.findMany({
                where: {
                  OR: [
                    { senderId: bankAccountId },
                    { recieverId: bankAccountId }
                  ]
                },
                include: {
                  sender: {
                    include: {
                      user: {
                        select: {
                          firstName: true,
                          lastName: true,
                          email: true
                        }
                      }
                    }
                  },
                  reciever: {
                    include: {
                      user: {
                        select: {
                          firstName: true,
                          lastName: true,
                          email: true
                        }
                      }
                    }
                  }
                },
                orderBy: {
                  createdAt: 'desc'  // Most recent transactions first
                }
              });

              const formattedTransactions = transactions.map(transaction => {
                const isOutgoing = transaction.senderId === bankAccountId;
                const otherParty = isOutgoing ? transaction.reciever : transaction.sender;
                const otherPartyUser = isOutgoing ? transaction.reciever.user : transaction.sender.user;
                
                return {
                  id: transaction.id,
                  amount: transaction.amount,
                  createdAt: transaction.createdAt,
                  type: isOutgoing ? 'sent' : 'received',
                  otherParty: {
                    name: `${otherPartyUser.firstName} ${otherPartyUser.lastName}`,
                    email: otherPartyUser.email,
                    accountId: otherParty.id
                  }
                };
              });
        
        return NextResponse.json({
            success: true,
            data: {
              transactions: formattedTransactions
            }
        })


    } catch (err) {
        return NextResponse.json({
            message: `something's up with the server`
        })
    }
}