import { cn } from "@/lib/utils";
import React from "react";
import Hero from './mains/hero/hero'
import Details from "./mains/details/details";
import Features from "./mains/features/features";
import CTA from "./mains/CTA/cta";
import Footer from "./mains/footer/footer";

export default function Home() {
  return (
    <div className="relative flex h-[385vh] md:h-[400vh] lg:h-[365vh] 2xl:h-[290vh] w-full justify-center bg-white dark:bg-black mt-[-54px]">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:160px_160px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black "></div>
      <p className="relative z-20 bg-gradient-to-b from-neutral-200 h-700 xl:h-680 w-400 xl:w-500 to-neutral-500 bg-clip-text  text-4xl font-bold text-transparent sm:text-7xl mt-40  flex flex-col items-center justify-between">
        <Hero />
        <Details/>
        <Features/>
        <CTA/>
        <Footer/>
      </p>
    </div>
  );
}
