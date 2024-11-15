import React from "react";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

const Hero = () => {
  return (
    <div className="relative z-10 min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black flex items-center justify-center">
      <ContainerScroll
        titleComponent={
          <div className="text-center p-8">
            {" "}
            {/* Added padding for better spacing */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 leading-tight">
              Transforming Healthcare
            </h1>
          </div>
        }
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {" "}
          {/* Container for the image */}
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
