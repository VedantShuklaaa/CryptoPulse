import React from "react";
import { MotionDiv } from '@/components/motion-wrapper/motion-wrapper';

export default function features() {
    return (
        <div className="h-[180vh]  lg:h-[60vh] w-[90vw] mt-10 grid grid-cols-1 lg:grid-cols-3 place-content-between place-items-center p-12 bg-black lg:gap-15 xl:gap-0">
            <MotionDiv className="border-2 border-zinc-600 bg-linear-to-bl from-blue-600 to-pink-500 flex justify-center items-center rounded-[2.2rem] h-[51vh] lg:h-[45vh] xl:w-[25.5vw] w-[82vw] md:w-[51vw] lg:w-[27vw]" initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}>
                <div className="bg-black h-[50vh] lg:h-[44vh] w-[80vw] md:w-[50vw] lg:w-[26.5vw] xl:w-[25vw] rounded-[2rem] flex flex-col justify-start items-left p-4 pt-20 lg:pt-10 gap-5">
                    <span className="text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white ">
                        Effortless Budget Tracking.
                    </span>
                    <span className="font-medium text-zinc-400 text-[1rem] md:text-2xl lg:text-xl xl:text-2xl h-[15vh] w-[60vw] md:w-[40vw] lg:w-[25vw] xl:w-[22vw] lg:pt-10">
                        Create custom budgets, monitor your spending, and get alerts before you overspend.
                    </span>
                </div>
            </MotionDiv>
            <MotionDiv className="border-2 border-zinc-600 bg-linear-to-bl from-blue-600 to-pink-500 flex justify-center items-center rounded-[2.2rem] h-[51vh] lg:h-[45vh] xl:w-[25.5vw] w-[82vw] md:w-[51vw] lg:w-[27vw]" initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}>
                <div className="bg-black h-[50vh] lg:h-[44vh] w-[80vw] md:w-[50vw] lg:w-[26.5vw] xl:w-[25vw] rounded-[2rem] flex flex-col justify-start items-left p-4 pt-20 lg:pt-10 gap-5">
                    <span className="text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white">
                        Real-Time Transaction Insights.
                    </span>
                    <span className="font-medium text-zinc-400 text-[1rem] md:text-2xl lg:text-xl xl:text-2xl h-[15vh] w-[72vw] md:w-[40vw] lg:w-[25vw] xl:w-[20vw]">
                        Import and categorize your transactions automatically. Know where your money goes.
                    </span>
                </div>
            </MotionDiv>
            <MotionDiv className="border-2 border-zinc-600 bg-linear-to-bl from-blue-600 to-pink-500 flex justify-center items-center rounded-[2.2rem] h-[51vh] lg:h-[45vh] xl:w-[25.5vw] w-[82vw] md:w-[51vw] lg:w-[27vw]" initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}>
                <div className="bg-black h-[50vh] lg:h-[44vh] w-[80vw] md:w-[50vw] lg:w-[26.5vw] xl:w-[25vw] rounded-[2rem] flex flex-col justify-start items-left p-4 pt-20 lg:pt-10 gap-5" >
                    <span className="text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold w-[60vw] md:w-[40vw] lg:w-[25vw] xl:w-[22vw] text-white">
                        Dashboard Built for Clarity.
                    </span>
                    <span className="font-medium text-zinc-400 text-[1rem] md:text-2xl lg:text-xl xl:text-2xl h-[15vh] w-[63vw] md:w-[40vw] lg:w-[25vw] xl:w-[18vw] lg:pt-9">
                        Visualize income, expenses, and trends in one beautiful dashboard.
                    </span>
                </div>
            </MotionDiv>
        </div>
    )
}