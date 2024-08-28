import React from "react";
import Image from "next/image";
import Human from "/public/3d2.svg";
import Marquee from "./marquee";

const Hero = () => {
  return (
    <div className="relative z-10">
      <Marquee />
      <section className="relative min-h-screen flex items-center justify-center bg-gray-50">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-800 to-black opacity-75 z-0"></div>
        <div className="container mx-auto flex flex-col md:flex-row items-start pt-24 px-4 md:px-8 z-10">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 relative">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-4 leading-tight">
              Transforming Healthcare
            </h1>
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-regular text-gray-300 mb-6">
              with Advanced AI Solutions.
            </h2>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0 relative">
            <div className="relative w-full h-[300px] sm:h-[450px] md:h-[600px] lg:h-[750px] xl:h-[900px]">
              <Image
                src={Human}
                alt="3D Human"
                layout="fill"
                objectFit="contain"
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
