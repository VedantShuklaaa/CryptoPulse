import { cn } from "@/lib/utils";
import React from "react";
import Hero from './mains/hero/hero'
import Details from "./mains/details/details";
import Features from "./mains/features/features";
import CTA from "./mains/CTA/cta";
import Footer from "./mains/footer/footer";

export default function Home() {
  return (
    <div className="h-[350vh] sm:h-[290vh] md:h-[400vh] lg:h-[290vh] xl:h-[305vh] 2xl:h-[290vh] w-full flex flex-col items-center md:justify-center antialiased mt-[110px] sm:mt-[30px] md:mt-[35px] ">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:300px_300px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
        style={{ backgroundColor: 'var(--background)' }}
      />

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="">
        <Hero />
        <Details />
        <Features />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}
