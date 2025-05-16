import React from "react";
import { cn } from "@/lib/utils";
import SR from "@/app/mains/sr/SR";

export default async function Send() {
    return (
        <div className="h-[100vh] w-full flex flex-col items-center md:justify-center antialiased mt-[-54px]">
            <div
                className={cn(
                    "absolute inset-0",
                    "[background-size:300px_300px]",
                    "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                    "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
                )}
                style={{backgroundColor: 'var(--background)'}}
            />
            {/* Radial gradient for the container to give a faded look */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <SR />
        </div>
    )

}