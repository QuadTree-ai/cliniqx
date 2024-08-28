import React from "react";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Info, ArrowRight } from "lucide-react"; // Import icons from Lucide

const Hero = () => {
  return (
    <div className="relative z-10 min-h-screen flex items-center justify-center">
      <ContainerScroll
        titleComponent={
          <div className="text-center px-32 py-40"> {/* Significantly increased padding */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-10 leading-tight">
              Transforming Healthcare
            </h1>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-8">
              Revolutionizing wellness with cutting-edge technology.
            </p>
            <div className="flex justify-center gap-12 mt-20"> {/* Increased spacing and margin */}
              <button className="bg-green-500 text-white font-bold py-4 px-10 rounded hover:bg-green-700 transition duration-300 ease-in-out flex items-center justify-center text-lg sm:text-xl">
                <Info className="mr-3" size={28} /> Learn More
              </button>
              <button className="bg-transparent border-2 border-green-500 text-green-500 font-bold py-4 px-10 rounded hover:bg-green-500 hover:text-white transition duration-300 ease-in-out flex items-center justify-center text-lg sm:text-xl">
                <ArrowRight className="mr-3" size={28} /> Get Started
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
