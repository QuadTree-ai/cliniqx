import React from "react";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Info, ArrowRight } from "lucide-react"; // Import icons from Lucide
import { Button } from "@/components/ui/moving-border";

const Hero = () => {
  return (
    <div className="relative z-10 min-h-screen flex items-center justify-center">
      <ContainerScroll
        titleComponent={
          <div className="text-center px-24 py-32">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 leading-tight">
              Transforming Healthcare
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 mt-4">
              Revolutionizing wellness with cutting-edge technology.
            </p>
            <div className="flex justify-center gap-10 mt-16">
              <button className="bg-[#136D94] text-white font-bold py-3 px-8 rounded hover:bg-[#0f5b7a] transition duration-300 ease-in-out flex items-center justify-center">
                
              </button>
              <Button
                borderRadius="1.75rem"
                className="bg-[#136D94] text-white font-bold py-3 px-8 rounded hover:bg-[#0f5b7a] transition duration-300 ease-in-out flex items-center justify-center"
              >
                <ArrowRight className="mr-2" size={24} /> Get Started
              </Button>
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