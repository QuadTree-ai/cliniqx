import React from "react";
import Marquee from "./marquee";
import Image from "next/image";
import Human from "/public/3d2.svg";
import DiscountCard from "./discountcard";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white relative">
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
          <Image
            src={Human}
            alt="3D Human"
            width={500}
            height={500}
            className="max-w-full h-auto"
          />
        </div>
      </div>
      <div className="w-full px-4 mt-8">
        <DiscountCard />
      </div>
    </section>
  );
};

export default Hero;