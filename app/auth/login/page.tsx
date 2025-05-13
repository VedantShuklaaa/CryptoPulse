import React from "react";
import { cn } from "@/lib/utils";
import { LoginFormDemo } from '@/app/mains/login/login'

export default function LoginPage() {
    return (
        <div className="relative flex h-[100vh] w-full items-center justify-center bg-white dark:bg-black mt-[-55px]">
            <div
                className={cn(
                    "absolute inset-0",
                    "[background-size:300px_300px]",
                    "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                    "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
                )}
            />
            {/* Radial gradient for the container to give a faded look */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black "></div>
            <div className="absolute mt-40 z-1">
                <LoginFormDemo/>
            </div>
        </div>
    )
}