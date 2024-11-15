import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative z-10 flex items-center justify-center h-[110vh]"> {/* Increased height */}
      <ContainerScroll
        titleComponent={
          <div className="text-center px-24 py-40"> {/* Increased vertical padding */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 leading-tight">
              Transforming Healthcare
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 mt-4">
              Revolutionizing wellness with cutting-edge technology.
            </p>
            <div className="flex justify-center gap-10 mt-16">
              <Link href="/signup/customer" passHref>
                <button className="text-white bg-[#136D94] border-2 border-[#136D94] font-bold py-3 px-8 rounded hover:bg-[#136D94] hover:transition duration-300 ease-in-out flex items-center justify-center">
                  <ArrowRight className="mr-2" size={24} /> Get Started
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
