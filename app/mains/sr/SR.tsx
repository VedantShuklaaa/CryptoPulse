'use client';
import react, { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import axios from 'axios';

export default function SR() {


    const [sendUser, setSendUser] = useState('')
    const [reciever, setReciever] = useState('')
    const [amount, setAmount] = useState('')
    const [findUser, setFindUser] = useState({
        balance: 0,
        KYC_Status: 'False',
        PAN_number: '',
        id: '',
        user: {
            id: '',
            firstName: '',
            lastName: '',
        }
    })

    const send = async () => {
        try {
            const res = await axios.post('/api/sendRecieve', {
                amount: Number(amount),
                recieverId: reciever
            })

            alert(res.data.message || 'amount successfully sent')
        } catch (err: any) {
            alert(err.response?.data?.message || `can't send the money`)
        }
    }

    const handleSearch = async () => {
        try {
            const res = await axios.post('/api/userFetch', {
                id: sendUser
            })
            setFindUser(res.data.findUser)

            alert(res.data.message || `user Found!`)
        } catch (err: any) {
            alert(err.response?.data?.message || `can't find user`)
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
            } catch (err: any) {
                alert(err.response?.data?.message || `can't find user data`)
            }
        }

        fetchUser();
    }, [])


    return (
        <div className='border-1 border-zinc-600 bg-linear-to-bl from-blue-600 to-pink-500 rounded-[1.7rem] z-1 h-[56vh] md:h-[55.5vh] lg:h-[61vh] 2xl:h-[63vh] w-[92vw] md:w-[91vw] lg:w-[70.5vw] xl:w-[60.5vw] 2xl:w-[49.5vw] flex justify-center items-center mt-50'>
            <div className='absolute z-1 h-[55vh] lg:h-[60vh] 2xl:h-[62vh] w-[90vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[49vw] p-2 flex flex-col justify-between items-center rounded-[1.5rem] bg-black backdrop-blur-sm '>
                <div className='h-[38vh] xl:h-[40vh] w-full flex flex-col lg:items-center justify-between'>
                    <div className='h-[17vh] w-[85vw] lg:w-[65vw] xl:w-[57vw] 2xl:w-[48vw] border rounded-[1rem] border-white/20  bg-white/1 backdrop-blur-sm '>
                        <div className='h-[5vh] w-full flex justify-between items-center p-4'>
                            <span className='bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text font-bold text-transparent md:text-2xl'>From -</span>
                            <span className='flex bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text font-bold text-transparent md:text-2xl'>{user.firstName} {user.lastName}</span>
                        </div>
                        <div className='h-[12vh] w-full flex flex-col items-center justify-center'>
                            <Input placeholder='enter the amount' className='w-[75vw] lg:w-[60vw] xl:w-[52vw] 2xl:w-[46vw]' type='number' value={amount} onChange={(e) => { setAmount(e.target.value) }} />
                        </div>
                    </div>
                    <div className='h-[17vh] w-[85vw] lg:w-[65vw] xl:w-[57vw] 2xl:w-[48vw] border rounded-[1rem] border-white/20  bg-white/1 backdrop-blur-sm '>
                        <div className='h-[5vh] w-full flex justify-between items-center p-4'>
                            <span className='bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text font-bold text-transparent md:text-2xl'>To -</span>
                            <span className='flex bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text font-bold text-transparent md:text-2xl'>{findUser?.user.firstName} {findUser?.user.lastName}</span>
                        </div>
                        <div className='h-[12vh] md:h-[11vh] w-full flex flex-col items-center justify-center md:justify-between'>
                            <Input placeholder="enter the reciever's id" className='w-[75vw] lg:w-[60vw] xl:w-[52vw] 2xl:w-[46vw]' type='string' value={sendUser} onChange={(e) => { setSendUser(e.target.value), setReciever(e.target.value) }} />
                            <button
                                className="group/btn cursor-pointer relative block h-10 md:h-12 w-40 rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
                                type="submit"
                                onClick={handleSearch}
                            >Check user &rarr;
                                <BottomGradient />
                            </button>
                        </div>
                    </div>
                </div>
                <button
                    className="mb-4 group/btn cursor-pointer relative block h-10 md:h-12 w-[32vw] rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
                    type="submit"
                    onClick={send}
                >
                    Send &rarr;
                    <BottomGradient />
                </button>
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