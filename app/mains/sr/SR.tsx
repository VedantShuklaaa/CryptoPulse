import react from 'react';
import { Input } from '@/components/ui/input';

export default function SR() {

    return (
        <div className='absolute mt-40 z-1 h-[55vh] w-[90vw] p-5 flex flex-col justify-between items-center rounded-[1.5rem] border border-white/20  bg-white/4 backdrop-blur-sm '>
            <div className='h-[38vh] flex flex-col justify-between'>
                <div className='h-[17vh] w-[85vw] border rounded-[1rem] border-white/20  bg-white/1 backdrop-blur-sm '>

                </div>
                <div className='h-[17vh] w-[85vw] border rounded-[1rem] border-white/20  bg-white/1 backdrop-blur-sm '>

                </div>
            </div>
            <button
                className="mb-4 group/btn cursor-pointer relative block h-10 w-[32vw] rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
                type="submit"
            >
                Send &rarr;
                <BottomGradient />
            </button>

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