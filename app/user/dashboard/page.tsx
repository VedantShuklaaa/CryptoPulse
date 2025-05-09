"use cache";
import react from 'react';
import Dashboard from '@/app/mains/dashboard/dashboard';
import { cn } from '@/lib/utils';

export default async function dashboard() {
    return (
        <div className="h-[200vh] md:h-[100vh] w-full rounded-md relative flex flex-col items-center md:justify-center antialiased mt-[-54px]">
            <div
                className={cn(
                    "absolute inset-0",
                    "[background-size:35px_35px]",
                    "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                    "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
                )}
            />
            {/* Radial gradient for the container to give a faded look */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black "></div>
            <Dashboard />
        </div>
    )
}

