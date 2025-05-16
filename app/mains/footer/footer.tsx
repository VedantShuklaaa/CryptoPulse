import React from "react";
import Link from "next/link";

export default function footer() {
    return (
        <div className="border h-[35vh] lg:h-[40vh] w-[90vw] grid grid-cols-2 place-content-center place-items-center" style={{backgroundColor: 'var(--card)', borderColor: 'var(--border)', borderRadius: 'var(--radius)'}}>
            <div className="h-[30vh] w-[40vw] border-r flex flex-col justify-center items-left gap-1 p-2" style={{borderColor: 'var(--border)'}}>
                <span className="text-2xl md:text-4xl lg:text-6xl 2xl:text-7xl">About Us</span>
                <span className="text-[1rem] md:text-[1.4rem] 2xl:text-[1.8rem] mt-4"><Link href="/">mission</Link></span>
                <span className="text-[1rem] md:text-[1.4rem] 2xl:text-[1.8rem]"><Link href="/">team</Link></span>
                <span className="text-[1rem] md:text-[1.4rem] 2xl:text-[1.8rem]"><Link href="/">Newsletter</Link></span>
            </div>
            <div className="h-[30vh] w-[40vw] border-l flex flex-col justify-center items-left gap-1 p-2 2xl:pl-15" style={{borderColor: 'var(--border)'}}>
                <span className="text-2xl md:text-4xl lg:text-6xl 2xl:text-7xl">Support</span>
                <span className="text-[1rem] md:text-[1.4rem] 2xl:text-[1.8rem] mt-4"><Link href="/">contact</Link></span>
                <span className="text-[1rem] md:text-[1.4rem] 2xl:text-[1.8rem]"><Link href="/">refund policy</Link></span>
                <span className="text-[1rem] md:text-[1.4rem] 2xl:text-[1.8rem]"><Link href="/">FAQ's</Link></span>
            </div>
        </div>
    )
}