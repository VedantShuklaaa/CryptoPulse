import React from "react";

export default function details(){
    return(
        <div className="mt-10 xl:mt-15 flex flex-col justify-center items-center h-[full] w-[full]  bg-black">
            <span className="text-xl xl:text-2xl bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text font-medium text-transparent">
                Trusted by 
            </span>
            <span className="text-7xl xl:text-[9vw] bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text font-mono text-transparent">
                No-One
            </span>
        </div>
    )
}