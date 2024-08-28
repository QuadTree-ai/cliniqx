import React from "react";
import Image from "next/image";
import Human from "/public/3d2.svg";
import Marquee from "./marquee";

const Hero = () => {
  return (
    <div>
      <Marquee />
      <section className="relative min-h-screen flex items-center justify-center bg-white z-10">
        <div className="container mx-auto flex flex-col md:flex-row items-start pt-24 px-4 md:px-8">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-gray-800 mb-4 leading-tight">
              Transforming Healthcare
            </h1>
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-gray-500 mb-6">
              with Advanced AI Solutions
            </h2>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
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
