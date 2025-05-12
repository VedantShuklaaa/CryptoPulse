import React from "react";
import Link from "next/link";

export default function footer() {
    return (
        <div className="border border-zinc-700 h-[35vh] lg:h-[40vh] w-[90vw] grid grid-cols-2 place-content-center place-items-center bg-black text-white">
            <div className="h-[30vh] w-[40vw] border-r border-zinc-500 flex flex-col justify-center items-left gap-1 p-2 ">
                <span className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text font-mono text-transparent text-2xl md:text-4xl lg:text-6xl 2xl:text-7xl"><Link href="/">About Us</Link></span>
                <span className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text font-light text-transparent text-[1rem] md:text-[1.4rem] 2xl:text-[1.8rem] mt-4"><Link href="/">mission</Link></span>
                <span className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text font-light text-transparent text-[1rem] md:text-[1.4rem] 2xl:text-[1.8rem]"><Link href="/">team</Link></span>
                <span className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text font-light text-transparent text-[1rem] md:text-[1.4rem] 2xl:text-[1.8rem]"><Link href="/">Newsletter</Link></span>
            </div>
            <div className="h-[30vh] w-[40vw] border-l border-zinc-500 flex flex-col justify-center items-left gap-1 p-2 2xl:pl-15">
                <span className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text font-mono text-transparent text-2xl md:text-4xl lg:text-6xl 2xl:text-7xl"><Link href="/">Support</Link></span>
                <span className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text font-light text-transparent text-[1rem] md:text-[1.4rem] 2xl:text-[1.8rem] mt-4"><Link href="/">contact</Link></span>
                <span className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text font-light text-transparent text-[1rem] md:text-[1.4rem] 2xl:text-[1.8rem]"><Link href="/">refund policy</Link></span>
                <span className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text font-light text-transparent text-[1rem] md:text-[1.4rem] 2xl:text-[1.8rem]"><Link href="/">FAQ's</Link></span>
            </div>
        </div>
    )
}