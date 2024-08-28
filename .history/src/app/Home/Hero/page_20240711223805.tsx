import React from "react";
import Image from "next/image";
import Human from "/public/3d2.svg";
import Marquee from "./marquee";

const Hero = () => {
  return (
    <div>
      <Marquee />
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center pt-24 px-4 md:px-8 z-10">
          <div className="md:w-2/3 mb-8 md:mb-0 text-center md:text-left">
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-gray-800 mb-4 leading-tight">
              Transforming Healthcare
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-500 mb-6">
              with Advanced AI Solutions
            </h2>
          </div>
          <div className="w-full md:w-1/3 flex justify-center md:justify-end mt-8 md:mt-0">
            <div className="relative w-[400px] h-[400px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px]">
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
