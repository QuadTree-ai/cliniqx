import React from "react";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Info, ArrowRight } from "lucide-react"; // Import icons from Lucide

const Hero = () => {
  return (
    <div className="relative z-10 min-h-screen bg-gradient-to-r from-teal-900 to-cyan-900 flex items-center justify-center"> {/* Updated gradient colors */}
      <ContainerScroll
        titleComponent={
          <div className="text-center p-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-cyan-200 to-teal-500 py-8 leading-tight">
              Transforming Healthcare
            </h1>
            <p className="text-xl sm:text-2xl text-cyan-300 mt-4">
              Revolutionizing wellness with cutting-edge technology.
            </p>
            <div className="flex justify-center gap-8 mt-10"> {/* Increased gap and margin-top */}
              <button className="bg-cyan-600 text-white font-bold py-2 px-4 rounded hover:bg-cyan-800 transition duration-300 ease-in-out flex items-center justify-center">
                <Info className="mr-2" size={20} /> Learn More
              </button>
              <button className="bg-transparent border-2 border-cyan-600 text-cyan-600 font-bold py-2 px-4 rounded hover:bg-cyan-600 hover:text-white transition duration-300 ease-in-out flex items-center justify-center">
                <ArrowRight className="mr-2" size={20} /> Get Started
              </button>
            </div>
          </div>
        }
      >
        <div className="relative w-full h-full flex items-center justify-center mt-12"> {/* Added more top margin */}
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
