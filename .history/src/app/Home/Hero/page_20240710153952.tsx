import React from "react";
import Marquee from "./marquee";
import Image from "next/image";
import Human from "/public/3d2.svg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-start justify-center bg-gray-50 relative">
      <Marquee />
      <div className="container mx-auto flex flex-col md:flex-row items-center pt-24 px-4 md:px-8">
        <div className="md:w-2/3 mb-8 md:mb-0 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 mb-4 leading-tight">
            Transforming Healthcare
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-500 mb-6">
            with Advanced AI Solutions
          </h2>
          <Button className="mt-4 text-sm md:text-md px-8 py-3 text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 rounded-full">
            Learn More
          </Button>
        </div>
        <div className="md:w-1/3 flex justify-center md:justify-end mt-8 md:mt-0">
          <Image
            src={Human}
            alt="3D Human"
            width={400}
            height={400}
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;