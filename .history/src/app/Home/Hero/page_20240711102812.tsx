import React from "react";
import Marquee from "./marquee";
import Image from "next/image";
import Human from "/public/3d2.svg";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white relative pt-24 md:pt-32">
      <Marquee />
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4 md:px-8">
        <div className="md:w-2/3 mb-8 md:mb-0 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 mb-4 leading-tight">
            Transforming Healthcare
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-500 mb-6">
            with Advanced AI Solutions
          </h2>
        </div>
        <div className="md:w-1/3 flex justify-center md:justify-end mt-8 md:mt-0">
          <div className="w-full max-w-sm">
            <Image
              src={Human}
              alt="3D Human"
              layout="responsive"
              width={500}
              height={500}
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
