import React from "react";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

const Hero = () => {
  return (
    <div className="relative z-10 min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white mb-4 leading-tight">
              Transforming Healthcare
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-300 mb-6">
              with Advanced AI Solutions
            </h2>
          </>
        }
      >
        <Image
          src="/3d.svg" // Changed to use the SVG you mentioned earlier
          alt="Muscular System"
          layout="fill"
          objectFit="contain"
          className="rounded-md mx-auto"
        />
      </ContainerScroll>
    </div>
  );
};

export default Hero;
