import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative z-10 flex items-center justify-center min-h-screen mb-40">
      {/* Added margin-bottom to the main container */}
      <ContainerScroll
        titleComponent={
          <div className="text-center px-4 py-16 sm:px-8 sm:py-20 md:px-16 md:py-24 lg:px-24 lg:py-32 xl:px-32 xl:py-40">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 leading-tight">
              Transforming Healthcare
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mt-4">
              Revolutionizing wellness with cutting-edge technology.
            </p>
            <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-10 md:mt-12">
              <Link href="/signup/customer" passHref>
                <button className="text-white bg-[#136D94] border-2 border-[#136D94] font-bold py-2 px-4 sm:py-3 sm:px-6 md:py-3 md:px-8 rounded hover:bg-[#0f5b7a] transition duration-300 ease-in-out flex items-center justify-center">
                  <ArrowRight className="mr-2" size={20} />
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        }
      >
        <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[32rem] xl:h-[40rem] flex items-center justify-center">
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
