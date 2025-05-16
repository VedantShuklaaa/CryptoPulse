import React from "react";
import { MotionDiv } from '@/components/motion-wrapper/motion-wrapper';

export default function features() {
    return (
        <div className="h-[180vh] lg:h-[60vh] w-[90vw] mt-10 grid grid-cols-1 lg:grid-cols-3 place-content-between place-items-center p-12 lg:gap-15 xl:gap-0">
            <MotionDiv className="border bg-linear-to-bl from-blue-600 to-pink-500 flex justify-center items-center h-[51vh] lg:h-[45vh] xl:w-[25.5vw] w-[82vw] md:w-[51vw] lg:w-[27vw]" initial={{ scale: 1 }} style={{borderRadius: 'var(--radius)', borderColor: 'var(--border)'}}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}>
                <div className="h-[50vh] border lg:h-[44vh] w-[80vw] md:w-[50vw] lg:w-[26.5vw] xl:w-[25vw] flex flex-col justify-start items-left p-4 pt-20 lg:pt-10 gap-5" style={{backgroundColor: 'var(--card)', borderColor: 'var(--border)', borderRadius: 'var(--radius)'}}>
                    <span className="text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold xl:mt-[-20px] 2xl:mt-[30px]">
                        Effortless Budget Tracking.
                    </span>
                    <span className="font-medium text-[1rem] md:text-2xl lg:text-xl xl:text-2xl xl:mt-[40px] h-[15vh] w-[60vw] md:w-[40vw] lg:w-[25vw] xl:w-[22vw]">
                        Create custom budgets, monitor your spending, and get alerts before you overspend.
                    </span>
                </div>
            </MotionDiv>
            <MotionDiv className="border bg-linear-to-bl from-blue-600 to-pink-500 flex justify-center items-center h-[51vh] lg:h-[45vh] xl:w-[25.5vw] w-[82vw] md:w-[51vw] lg:w-[27vw]" initial={{ scale: 1 }} style={{borderRadius: 'var(--radius)', borderColor: 'var(--border)'}}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}>
                <div className="h-[50vh] border lg:h-[44vh] w-[80vw] md:w-[50vw] lg:w-[26.5vw] xl:w-[25vw] flex flex-col justify-start items-left p-4 pt-20 md:pt-10  lg:pt-10 gap-5" style={{backgroundColor: 'var(--card)', borderColor: 'var(--border)', borderRadius: 'var(--radius)'}}>
                    <span className="text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold xl:mt-[-20px] 2xl:mt-[30px]">
                        Real-Time Transaction Insights.
                    </span>
                    <span className="font-medium text-[1rem] md:text-2xl lg:text-xl xl:text-2xl h-[15vh] md:h-[10vh] w-[72vw] md:w-[40vw] lg:w-[25vw] xl:w-[23vw]">
                        Import and categorize your transactions automatically. Know where your money goes.
                    </span>
                </div>
            </MotionDiv>
            <MotionDiv className="border bg-linear-to-bl from-blue-600 to-pink-500 flex justify-center items-center h-[51vh] lg:h-[45vh] xl:w-[25.5vw] w-[82vw] md:w-[51vw] lg:w-[27vw]" initial={{ scale: 1 }} style={{borderRadius: 'var(--radius)', borderColor: 'var(--border)'}}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}>
                <div className="h-[50vh] border lg:h-[44vh] w-[80vw] md:w-[50vw] lg:w-[26.5vw] xl:w-[25vw] flex flex-col justify-start items-left p-4 pt-20 lg:pt-10 gap-5" style={{backgroundColor: 'var(--card)', borderColor: 'var(--border)', borderRadius: 'var(--radius)'}}>
                    <span className="text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold w-[60vw] md:w-[40vw] lg:w-[25vw] xl:w-[22vw] xl:mt-[-20px] 2xl:mt-[30px]">
                        Dashboard Built for Clarity.
                    </span>
                    <span className="font-medium text-[1rem] md:text-2xl lg:text-xl xl:text-2xl h-[15vh] w-[63vw] md:w-[40vw] lg:w-[25vw] xl:w-[23vw] lg:mt-9">
                        Visualize income, expenses, and trends in one beautiful dashboard.
                    </span>
                </div>
            </MotionDiv>
        </div>
    )
}