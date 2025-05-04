'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { InfoMarker } from '@/app/mains/infoMarker/info';
import axios from 'axios';
import { AlertDialogDemo } from '@/app/mains/alertDIalog/alertDialog'

export default function Dashboard() {

    const [PAN_number, setPan_number] = useState('')

    const handleSubmit = async () => {
        try {
            const res = await axios.post('/api/dashboard/pan', {
                PAN_number
            })

            alert(res.data.message || 'credentials sent!')
        } catch (err: any) {
            alert(err.res.data.message || 'nice try diddy!')
        }
    }

    const [user, setUser] = useState({
        id: '',
        firstName: '',
        lastName: '',
        bankAccount: [{
            balance: 0,
            KYC_Status: 'False',
            PAN_number: ''
        }]
    })

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get('/api/user')
                setUser(res.data.user)


            } catch (err) {
                console.log(`failed to fetch data!`)
            }
        }

        fetchUser();
    }, [])


    return (
        <div className="absolute mt-40 z-1 h-[80vh] md:w-[100vw] xl:w-[90vw] 2xl:w-[60vw] rounded-[1.5rem] grid grid-cols-1 md:grid-cols-2  place-items-center ">
            <div className='h-[80vh] w-[90vw] md:w-[40vw] 2xl:w-[25vw] rounded-[1.5rem] grid grid-cols-1 gap-3 place-content-between 2xl:place-items-center '>
                <div className='h-[45vh] w-[90vw] md:w-[40vw] 2xl:w-[25vw] border border-white/20 rounded-[1.5rem] bg-white/1 backdrop-blur-sm flex flex-col items-center justify-between text-4xl p-2'>
                    <h1 className='bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text font-bold text-transparent'>Personal Information</h1>
                    <div className='h-[7rem] 2xl:h-[21vh] w-[7rem] 2xl:w-[11vw] border border-zinc-500 rounded-full flex'></div>
                    <div className='h-[13vh] 2xl:w-[25vw] flex flex-col 2xl:p-5 gap-2'>
                        <p className='bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text font-bold text-transparent text-xl 2xl:text-[1.2rem]'>First Name- {user?.firstName}</p>
                        <p className='bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text font-bold text-transparent text-xl 2xl:text-[1.2rem]'>Last Name- {user?.lastName}</p>
                        <p className='bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text font-bold text-transparent text-xl 2xl:text-[1.2rem]'>User Id- <span className='text-[0.7rem] md:text-[0.9rem] 2xl:text-[1rem]'>{user?.id}</span></p>
                    </div>
                </div>
                <div className='h-[30vh] w-[90vw] md:w-[40vw] 2xl:w-[25vw] border border-white/20 rounded-[1.5rem] bg-white/1 backdrop-blur-sm flex flex-col items-center justify-center text-2xl'>
                    <div className=' h-30 sm:h-40 w-[90vw] md:w-[40vw] 2xl:w-110 flex flex-col justify-between p-4'>
                        <span className='text-xl bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text font-bold text-transparent'>PAN Number</span>
                        {(!user.bankAccount || !user.bankAccount[0] || !user.bankAccount[0].PAN_number) ? (
                            <>
                                <Input type="text" placeholder='enter your PAN card number' value={PAN_number} onChange={(e) => { setPan_number(e.target.value) }} />
                                <span className='flex justify-center'>
                                    <button
                                        className="group/btn cursor-pointer relative block h-10 w-40 rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
                                        type="submit"
                                        onClick={handleSubmit}
                                    >Submit &rarr;
                                        <BottomGradient />
                                    </button>
                                </span>
                            </>) : (<span className='text-4xl 2xl:text-6xl bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text font-bold text-transparent'>{user.bankAccount[0].PAN_number}</span>)
                        }
                    </div>
                    <div className='h-30 w-[90vw] md:w-[40vw] 2xl:w-110 p-4 flex justify-between items-center'>
                        <div >
                            <span className='text-xl bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text font-bold text-transparent'>KYC Status  <InfoMarker description='enter your PAN number to get verified' /></span>
                            <h1 className='text-6xl bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text font-bold text-transparent'>{user.bankAccount[0].KYC_Status?.toString()}</h1>
                        </div>

                    </div>
                </div>
            </div>
            <div className='h-[80vh] w-[90vw] md:w-[40vw] 2xl:w-[25vw] rounded-[1.5rem] grid grid-col-1 gap-3 place-content-between mt-10 md:mt-0 '>
                <div className='h-[45vh] w-[90vw] md:w-[40vw] 2xl:w-[25vw] border border-white/20 rounded-[1.5rem] bg-white/1 backdrop-blur-sm flex flex-col items-center justify-center text-4xl'>
                    <div className='border-b border-zinc-500 h-40 2xl:h-50 w-[80vw] md:w-[35vw] 2xl:w-110 flex justify-between p-4 2xl:p-9'>
                        <div className='flex flex-col h-full justify-between'>
                            <span className='text-2xl bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text font-bold text-transparent'>Current balance</span>
                            <h1 className='text-5xl 2xl:text-7xl bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text font-bold text-transparent'>${user.bankAccount[0].balance}</h1>
                        </div>
                        <AlertDialogDemo />
                    </div>
                    <div className='h-40 2xl:h-50 w-[80vw] md:w-[35vw] 2xl:w-110 flex flex-col justify-between p-4 2xl:p-9'>
                        <span className='text-2xl bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text font-bold text-transparent'>Net Worth</span>
                        <h1 className='text-5xl 2xl:text-7xl bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text font-bold text-transparent'>$100000</h1>
                    </div>
                </div>
                <div className='h-[30vh] w-[90vw] md:w-[40vw] 2xl:w-[25vw] p-5 border border-white/20 rounded-[1.5rem] bg-white/1 backdrop-blur-sm flex flex-col items-center'>
                    <div className='h-12 w-60 md:w-[35vw] 2xl:w-100 flex justify-start items-center'>
                        <h1 className='bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text font-bold text-transparent text-2xl 2xl:text-4xl'><Link href="/user/transactions">Recent Transactions</Link></h1>
                    </div>
                    <div className='h-5 w-[70vw] md:w-[30vw] 2xl:w-100 border-b border-zinc-500'></div>
                    <div className='h-15 w-[80vw] md:w-[35vw] 2xl:w-100 border-b border-zinc-500 flex justify-between items-center text-xl 2xl:text-3xl'>
                        <h2 className='bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text font-bold text-transparent'>$200</h2>
                        <h2 className='bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text font-bold text-transparent text-xl'>at 4:40 pm</h2>
                    </div>
                    <div className='h-15 w-[80vw] md:w-[35vw] 2xl:w-100 border-b border-zinc-500 flex justify-between items-center text-xl 2xl:text-3xl'>
                        <h2 className='bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text font-bold text-transparent'>$450</h2>
                        <h2 className='bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text font-bold text-transparent text-xl'>at 3:21 am</h2>
                    </div>
                    <div className='h-15 w-[80vw] md:w-[35vw] 2xl:w-100 border-b border-zinc-500 flex justify-between items-center text-xl 2xl:text-3xl'>
                        <h2 className='bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text font-bold text-transparent'>$120</h2>
                        <h2 className='bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text font-bold text-transparent text-xl'>at 12:29 am</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

const BottomGradient = () => {
    return (
        <>
            <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
            <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
        </>
    );
};