import React from "react";

export default function cta() {
    return (
        <div className="h-[70vh] 2xl:h-[60vh] w-[90vw] flex flex-col justify-center items-center gap-10 md:gap-0 bg-black">
            <div className="h-[40vh] w-full flex justify-center items-center">
                <h1 className="text-7xl md:text-8xl 2xl:text-9xl text-center bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text font-bold text-transparent">Try Fundora today</h1>
            </div>
            <div className="h-[20vh] w-full  flex justify-center items-start ">
                <button className="relative inline-flex h-12 w-34 md:h-12 md:w-32 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 cursor-pointer" >
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-black/60 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                        Get Started
                    </span>
                </button>
            </div>
        </div>
    )
}