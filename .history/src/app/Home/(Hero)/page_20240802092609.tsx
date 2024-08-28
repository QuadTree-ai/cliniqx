import React from "react";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

const Hero = () => {
  return (
    <div className="relative z-10 min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black flex items-center justify-center">
      <ContainerScroll
        titleComponent={
          <div className="text-center p-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 leading-tight">
              Transforming Healthcare
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 mt-4">
              Revolutionizing wellness with cutting-edge technology.
            </p>
            <div className="mt-8">
              <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out mr-4">
                Learn More
              </button>
              <button className="bg-transparent border-2 border-blue-500 text-blue-500 font-bold py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out">
                Get Started
              </button>
            </div>
          </div>
        }
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src="/3d.svg"
            alt="Muscular System"
            layout="fill"
            objectFit="contain"
            className="rounded-md"
          />
        </div>
      </ContainerScroll>
    </div>
  );
};

export default Hero;
