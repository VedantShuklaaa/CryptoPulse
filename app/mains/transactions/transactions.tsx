"use client";
import React, { useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area"
import axios from "axios";

const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
)


export default function transaction() {

    const [user, setUser] = useState('')

    const [transaction, setTransaction] = useState([
        {
            id: '',
            amount: '',
            createdAt: '',
            type: '',
            otherParty: {
                name: '',
                email: '',
                accountId: '',
            }
        },
    ])

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const res = await axios.get('/api/transactions')
                setTransaction(res.data.data.transactions)

            } catch (err: any) {
                alert(err.res.data.message || `can't fetch data`)
            }
        }

        fetchTransactions();

        const fetchUser = async () => {
            const res = await axios.get('/api/user')
            setUser(res.data.user.bankAccount[0].id)
        }
        fetchUser();
    }, [])



    return (
        <div className="border-1 border-zinc-600 bg-linear-to-bl from-blue-600 to-pink-500 p-1 rounded-[1rem] mt-40 z-1 h-[70vh] 2xl:h-[76vh] w-[90vw] lg:w-[80.5vw] flex justify-between items-center">
            <div className="absolute z-1 h-[70vh] lg:h-[70vh] 2xl:h-[75vh] w-[90vw] lg:w-[80vw] flex flex-col justify-between items-center rounded-[1rem]  bg-black backdrop-blur-sm">
                <ScrollArea className="h-[70vh] lg:h-[70vh] 2xl:h-[75vh] w-[90vw] lg:w-[80vw] rounded-[1rem] p-4 overflow-hidden flex flex-col">
                    {transaction.map((transactions, index) => (
                        <div className="h-[30vh] md:h-[27vh] w-full p-2 md:p-0 border border-white/40 rounded-[1rem] flex flex-col sm:flex-row justify-between mt-2" key={index}>
                            <div className="flex flex-row md:flex-col h-[full] gap-5 md:gap-0">
                                <span className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text font-bold text-transparent w-[full] flex justify-center items-center md:gap-0 text-center 2xl:p-2 2xl:text-xl">Transaction ID - </span>
                                <span className="text-[0.8rem] md:text-[1rem] 2xl:text-[1.2rem] flex justify-center h-full items-center text-center bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text font-bold text-transparent 2xl:p-2">{transactions.id}</span>
                            </div>
                            <div className="flex flex-row md:flex-col h-[full] gap-10 md:gap-0">
                                <span className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text font-bold text-transparent w-[full] flex justify-center items-center text-center 2xl:p-2 2xl:text-xl">Sender's ID - </span>
                                <span className="text-[0.8rem] md:text-[1rem] 2xl:text-[1.2rem] flex justify-center h-full items-center text-center bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text font-bold text-transparent 2xl:p-2">{(transactions.type != 'sent') ? (
                                    <>
                                        {transactions.otherParty.accountId}
                                    </>
                                ) : (user)}</span>
                            </div>
                            <div className="flex flex-row md:flex-col h-[full] gap-8 md:gap-0">
                                <span className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text font-bold text-transparent w-[full] flex justify-center items-center  md:gap-0 text-center 2xl:p-2 2xl:text-xl">Reciever's ID - </span>
                                <span className="text-[0.8rem] md:text-[1rem] 2xl:text-[1.2rem] flex justify-center h-full items-center text-center bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text font-bold text-transparent 2xl:p-2">{(transactions.type != 'sent') ? (
                                    <>
                                        {user}
                                    </>
                                ) : (transactions.otherParty.accountId)}</span>
                            </div>
                            <div className="flex flex-row md:flex-col h-[full] gap-10 md:gap-0">
                                <span className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text font-bold text-transparent w-[full] flex justify-center items-center  md:gap-0 text-center 2xl:p-2 2xl:text-xl">Amount -</span>
                                <span className="text-[0.8rem] md:text-[1rem] 2xl:text-[1.2rem] w-full  flex justify-center h-full items-center text-center bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text font-bold text-transparent 2xl:p-2">{(transactions.type != 'sent') ? (
                                    <>
                                        +{transactions.amount}$
                                    </>
                                ) : <>-{transactions.amount}$</>}
                                </span>
                            </div>
                            <div className="flex flex-row md:flex-col h-[full] gap-16 md:gap-0">
                                <span className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text font-bold text-transparent w-[full] flex justify-center items-center  text-center 2xl:p-2 2xl:text-xl">Time - </span>
                                <span className="text-[0.8rem] md:text-[1rem] 2xl:text-[1.2rem] flex justify-center h-full items-center text-center bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text font-bold text-transparent 2xl:p-2">
                                    {transactions.createdAt}
                                </span>
                            </div>
                        </div>
                    ))}
                </ScrollArea>
            </div>
        </div>
    )
}