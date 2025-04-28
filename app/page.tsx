import Image from "next/image";
import { cn } from "@/lib/utils";
import React from "react";

export default function Home() {
  return (
    <div className="relative flex h-[200vh] w-full  justify-center bg-white dark:bg-black mt-[-55px]">
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
      <p className="relative z-20 bg-gradient-to-b from-neutral-200 h-200 w-400 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl  mt-45 flex items-center justify-center">
        Welcome to PulsePay
      </p>
    </div>
  );
}
