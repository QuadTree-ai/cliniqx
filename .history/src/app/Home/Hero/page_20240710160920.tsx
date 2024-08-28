import React from "react";
import Marquee from "./marquee";
import Image from "next/image";
import Human from "/public/3d2.svg";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-start bg-white relative">
      <Marquee />
      <div className="container mx-auto pt-24 px-4 md:px-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold text-gray-800 mb-4 leading-tight">
            Transforming Healthcare
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-500 mb-6">
            with Advanced AI Solutions
          </h2>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <div className="w-full max-w-[450px]">
            <AspectRatio ratio={16 / 9}>
              <Image src={Human} alt="3D Human" className="rounded-md object-cover" />
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
