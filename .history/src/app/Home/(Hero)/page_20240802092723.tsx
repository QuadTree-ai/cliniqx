import React from "react";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { FaArrowRight, FaInfoCircle } from "react-icons/fa"; // Import appropriate icons

const Hero = () => {
  return (
    <div className="relative z-10 min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 via-purple-900 flex items-center justify-center">
      <ContainerScroll
        titleComponent={
          <div className="text-center p-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-violet-200 to-violet-500 py-8 leading-tight">
              Transforming Healthcare
            </h1>
            <p className="text-xl sm:text-2xl text-violet-200 mt-4">
              Revolutionizing wellness with cutting-edge technology.
            </p>
            <div className="mt-8">
              <button className="bg-violet-600 text-white font-bold py-2 px-4 rounded hover:bg-violet-800 transition duration-300 ease-in-out mr-4 flex items-center justify-center">
                <FaInfoCircle className="mr-2" /> Learn More
              </button>
              <button className="bg-transparent border-2 border-violet-600 text-violet-600 font-bold py-2 px-4 rounded hover:bg-violet-600 hover:text-white transition duration-300 ease-in-out flex items-center justify-center">
                <FaArrowRight className="mr-2" /> Get Started
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
