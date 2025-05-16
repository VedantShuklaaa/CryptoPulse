import React from "react";
import { FlipWords } from "@/components/ui/flip-words";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import './hero.css'
import Image from "next/image";
import Link from "next/link";

export default function hero() {

    const words = ["Finances", "Accounting", "Banking", "Investments"];

    return (
        <div className="font-normal w-[90vw] h-[65vh] md:h-[90vh] lg:h-[100vh] border-2 flex justify-center items-center overflow-hidden relative" style={{borderColor: 'var(--border)', borderRadius: 'var(--radius)'}}>
            <BackgroundGradientAnimation >
                <div className="absolute z-1 inset-0 flex flex-col items-center justify-start xl:w-[90vw] text-white font-bold px-4  pt-45 lg:pt-15 2xl:pt-25">
                    <div className=" ">
                        <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
                            <h1 className="text-10xl text-center text-3xl md:text-4xl lg:text-8xl">
                                Take Control of Your <FlipWords words={words} />with Fundora.
                            </h1>
                        </p>
                    </div>
                    <div className="mt-2 md:w-[75vw] 2xl:w-[50vw]">
                        <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white to-white/40">
                            <h1 className="text-10xl text-center text-[0.7rem] md:text-[1rem] lg:text-2xl">
                                Track spending, analyze transactions, and grow your wealth — all in one place.
                            </h1>
                        </p>
                    </div>
                    <div className="mt-3 2xl:mt-4 flex justify-center items-center gap-2 z-2000 ">
                        <button className="relative inline-flex h-10 md:h-12 md:w-32 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 cursor-pointer" >
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                            <Link className="inline-flex h-full w-full items-center justify-center rounded-full bg-black/60 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl" href="/auth/signup" >
                                Get Started
                            </Link>
                        </button>
                        <button className="relative inline-flex h-10 md:h-12 md:w-32 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 cursor-pointer" >
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                            <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-white/40 px-3 py-1 text-sm font-medium text-slate-950 backdrop-blur-3xl">
                                Live Demo
                            </span>
                        </button>
                    </div>
                    <div className="border-2 border-zinc-700 h-[40vh] md:h-[60vh] w-[80vw] 2xl:w-[70vw] mt-25 md:mt-20 rounded-t-[2rem] overflow-hidden">
                        <Image
                            objectPosition="center"
                            objectFit="cover"
                            height={2100}
                            width={2580}
                            src="/lamo.png"
                            alt="rust"
                        />
                    </div>
                </div>
            </BackgroundGradientAnimation>
        </div>
    )
}