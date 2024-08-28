import React from "react";
import Image from "next/image";
import Human from "/public/3d2.svg";
import Marquee from "../marquee";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-white">
      <Marquee />
      <div className="container mx-auto flex flex-col md:flex-row items-center pt-24 px-4 md:px-8 z-10">
        <div className="md:w-2/3 mb-8 md:mb-0 text-center md:text-left">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-800 mb-4 leading-tight">
            Transforming Healthcare
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-500 mb-6">
            with Advanced AI Solutions
          </h2>
        </div>
        <div className="w-full md:w-1/3 flex justify-center md:justify-end mt-8 md:mt-0">
          <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]">
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
  );
};

export default Hero;
