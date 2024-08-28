import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative z-10 flex items-center justify-center h-screen sm:h-[110vh]">
      {/* Use h-screen for mobile and increase height for larger screens */}
      <ContainerScroll
        titleComponent={
          <div className="text-center px-4 py-16 sm:px-12 sm:py-24 md:px-24 md:py-32 lg:px-32 lg:py-40">
            {/* Responsive padding */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-4 md:py-6 leading-tight">
              Transforming Healthcare
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mt-4">
              Revolutionizing wellness with cutting-edge technology.
            </p>
            <div className="flex justify-center gap-4 md:gap-8 lg:gap-10 mt-8 md:mt-12">
              {/* Responsive gaps and margins */}
              <Link href="/signup/customer" passHref>
                <button className="text-white bg-[#136D94] border-2 border-[#136D94] font-bold py-2 px-4 sm:py-3 sm:px-6 md:py-3 md:px-8 rounded hover:bg-[#136D94] hover:transition duration-300 ease-in-out flex items-center justify-center">
                  <ArrowRight className="mr-2" size={20} /> {/* Smaller icon for smaller screens */}
                  Get Started
                </button>
              </Link>
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
