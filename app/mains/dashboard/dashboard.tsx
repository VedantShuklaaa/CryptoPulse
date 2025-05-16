'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { InfoMarker } from '@/app/mains/infoMarker/info';
import axios from 'axios';
import { AlertDialogDemo } from '@/app/mains/alertDIalog/alertDialog'
import dotenv from 'dotenv';
dotenv.config()

const cache_Key = process.env.CACHE_KEY as string;

export default function Dashboard() {

    const [PAN_number, setPan_number] = useState('')

    const handleSubmit = async () => {
        try {
            const res = await axios.post('/api/dashboard/pan', {
                PAN_number
            },)

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
            const CACHE_KEY = cache_Key;
            const CACHE_DURATION = 3600000;
            try {

                const cachedData = localStorage.getItem(CACHE_KEY);

                if (cachedData) {
                    const { data, timestamp } = JSON.parse(cachedData);
                    const now = Date.now();

                    // If the cache hasn't expired, use it
                    if (now - timestamp < CACHE_DURATION) {
                        console.log('Using cached user data');
                        setUser(data.user);
                        return;
                    }
                    console.log('User cache expired, fetching fresh data');
                }

                const res = await axios.get('/api/user')
                setUser(res.data.user)

                localStorage.setItem(CACHE_KEY, JSON.stringify({
                    data: res.data,
                    timestamp: Date.now()
                }));

            } catch (err) {
                console.log(`failed to fetch data!`)
            }
        }

        fetchUser();
    }, [])


    return (
        <div className="absolute mt-40 z-1 h-[80vh] md:w-[100vw] xl:w-[90vw] 2xl:w-[60vw] rounded-[1.5rem] grid grid-cols-1 md:grid-cols-2  place-items-center ">
            <div className='h-[80vh] w-[93vw] md:w-[40vw] 2xl:w-[25vw] rounded-[1.5rem] grid grid-cols-1 gap-3 place-content-between 2xl:place-items-center '>
                <div className='border w-[93vw] md:w-[41vw] 2xl:w-[25.5vw] bg-linear-to-bl from-blue-600 to-pink-500 p-1 flex justify-center items-center' style={{borderRadius: 'var(--radius)', borderColor: 'var(--border)'}}>
                    <div className='h-[45vh] w-[90vw] md:w-[40vw] 2xl:w-[25vw] border backdrop-blur-sm flex flex-col items-center justify-between text-4xl p-2' style={{backgroundColor: 'var(--background)', borderRadius: 'var(--radius)', borderColor: 'var(--border)'}}>
                        <h1 className=''>Personal Information</h1>
                        <div className='h-[7rem] 2xl:h-[21vh] w-[7rem] 2xl:w-[11vw] border  rounded-full flex' style={{borderColor: 'var(--border)'}}></div>
                        <div className='h-[13vh] 2xl:w-[25vw] flex flex-col 2xl:p-5 gap-2'>
                            <p className=' text-xl 2xl:text-[1.2rem]'>First Name- {user?.firstName}</p>
                            <p className=' text-xl 2xl:text-[1.2rem]'>Last Name- {user?.lastName}</p>
                            <p className=' text-xl 2xl:text-[1.2rem]'>User Id- <span className='text-[0.65rem] md:text-[9px] lg:text-[0.9rem] 2xl:text-[1rem]'>{user?.id}</span></p>
                        </div>
                    </div>
                </div>
                <div className='border bg-linear-to-bl w-[93vw] md:w-[41vw] 2xl:w-[25.5vw] from-blue-600 to-pink-500 p-1 flex justify-center items-center' style={{borderRadius: 'var(--radius)', borderColor: 'var(--border)'}}>
                    <div className='h-[30vh] w-[90vw] md:w-[40vw] 2xl:w-[25vw] border backdrop-blur-sm flex flex-col items-center justify-center text-2xl' style={{backgroundColor: 'var(--background)', borderRadius: 'var(--radius)', borderColor: 'var(--border)'}}>
                        <div className=' h-30 sm:h-40 w-[90vw] md:w-[40vw] 2xl:w-110 flex flex-col justify-between p-4 2xl:p-5'>
                            <span className='text-xl'>PAN Number</span>
                            {(!user.bankAccount || !user.bankAccount[0] || !user.bankAccount[0].PAN_number) ? (
                                <>
                                    <Input type="text" placeholder='enter your PAN card number' value={PAN_number} onChange={(e) => { setPan_number(e.target.value) }} />
                                    <span className='flex justify-center'>
                                        <button
                                            className="group/btn cursor-pointer relative block h-10 w-40 shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
                                            type="submit"
                                            onClick={handleSubmit}
                                            style={{borderRadius: 'var(--radius)'}}
                                        >Submit &rarr;
                                            <BottomGradient />
                                        </button>
                                    </span>
                                </>) : (<span className='text-4xl 2xl:text-6xl'>{user.bankAccount[0].PAN_number}</span>)
                            }
                        </div>
                        <div className='h-30 w-[90vw] md:w-[40vw] 2xl:w-110 p-4 flex justify-between items-center'>
                            <div >
                                <span className='text-xl'>KYC Status  <InfoMarker description='enter your PAN number to get verified' /></span>
                                <h1 className='text-6xl'>{user.bankAccount[0].KYC_Status?.toString()}</h1>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='h-[80vh] w-[93vw] md:w-[40vw] 2xl:w-[25vw] rounded-[1.5rem] grid grid-col-1 gap-3 place-content-between mt-10 md:mt-0'>
                <div className='border bg-linear-to-bl w-[93vw] md:w-[41vw] 2xl:w-[25.5vw] from-blue-600 to-pink-500 p-1 flex justify-center items-center' style={{borderRadius: 'var(--radius)', borderColor: 'var(--border)'}}>
                    <div className='h-[45vh] w-[90vw] md:w-[40vw] 2xl:w-[25vw] border border-white/20 rounded-[1.5rem] backdrop-blur-sm flex flex-col items-center justify-center text-4xl' style={{backgroundColor: 'var(--background)', borderRadius: 'var(--radius)'}}>
                        <div className='border-b h-40 2xl:h-50 w-[80vw] md:w-[35vw] 2xl:w-110 flex justify-between p-4 2xl:p-9' style={{borderColor: 'var(--border)'}}>
                            <div className='flex flex-col h-full justify-between'>
                                <span className='text-2xl'>Current balance</span>
                                <h1 className='text-5xl 2xl:text-7xl'>${user.bankAccount[0].balance}</h1>
                            </div>
                            <AlertDialogDemo />
                        </div>
                        <div className='h-40 2xl:h-50 w-[80vw] md:w-[35vw] 2xl:w-110 flex flex-col justify-between p-4 2xl:p-9'>
                            <span className='text-2xl'>Net Worth</span>
                            <h1 className='text-5xl 2xl:text-7xl'>$100000</h1>
                        </div>
                    </div>
                </div>
                <div className='border bg-linear-to-bl w-[93vw] md:w-[41vw] 2xl:w-[25.5vw] from-blue-600 to-pink-500 p-1 flex justify-center items-center' style={{borderRadius: 'var(--radius)', borderColor: 'var(--border)'}}>
                    <div className='h-[30vh] w-[90vw] md:w-[40vw] 2xl:w-[25vw] p-5 border flex flex-col items-center' style={{backgroundColor: 'var(--background)', borderRadius: 'var(--radius)', borderColor: 'var(--border)'}}>
                        <div className='h-12 w-60 md:w-[35vw] 2xl:w-100 flex justify-start items-center'>
                            <h1 className='text-2xl 2xl:text-4xl'><Link href="/user/transactions">Recent Transactions</Link></h1>
                        </div>
                        <div className='h-5 w-[70vw] md:w-[30vw] 2xl:w-100 border-b' style={{borderColor: 'var(--border)'}}></div>
                        <div className='h-15 w-[80vw] md:w-[35vw] 2xl:w-100 border-b flex justify-between items-center text-xl 2xl:text-3xl' style={{borderColor: 'var(--border)'}}>
                            <h2 >$200</h2>
                            <h2 className='text-xl'>at 4:40 pm</h2>
                        </div>
                        <div className='h-15 w-[80vw] md:w-[35vw] 2xl:w-100 border-b flex justify-between items-center text-xl 2xl:text-3xl' style={{borderColor: 'var(--border)'}}>
                            <h2>$450</h2>
                            <h2 className='text-xl'>at 3:21 am</h2>
                        </div>
                        <div className='h-15 w-[80vw] md:w-[35vw] 2xl:w-100 border-b flex justify-between items-center text-xl 2xl:text-3xl' style={{borderColor: 'var(--border)'}}>
                            <h2>$120</h2>
                            <h2 className='text-xl'>at 12:29 am</h2>
                        </div>
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