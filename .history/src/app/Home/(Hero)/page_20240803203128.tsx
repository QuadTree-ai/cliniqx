"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { ArrowRight } from "lucide-react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const Hero = () => {
  return (
    <div className="relative z-10 flex items-center justify-center min-h-screen mb-48">
      <ContainerScroll
        titleComponent={
          <div className="text-center px-8 py-16 sm:px-12 sm:py-20 md:px-16 md:py-24 lg:px-24 lg:py-28 xl:px-32 xl:py-32">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 leading-snug mb-6">
              <span className="block mb-2">Personal</span>{" "}
              <span className="block">Healthcare Assistant</span>
            </h1>
            <h4 className="text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl text-gray-400 mt-6 mb-8 leading-snug">
              {" "}
              {/* Increased margin-top from mt-4 to mt-6 */}
              CliniQX enhances patient care with a connected EHR/EMR system,
              cutting-edge system improving data management and compliance.
            </h4>

            <div className="flex justify-center gap-4 sm:gap-6 md:gap-8">
              <Link href="/signup/customer" passHref>
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  as="button"
                  className="dark:bg-black bg-black text-white dark:text-white font-bold py-3 px-6 md:py-4 md:px-8 flex items-center justify-center space-x-2"
                >
                  <ArrowRight className="mr-2" size={20} />
                  <span>Get Started</span>
                </HoverBorderGradient>
              </Link>
            </div>
          </div>
        }
      >
        <div className="relative w-full h-64 sm:h-96 md:h-[36rem] lg:h-[40rem] xl:h-[44rem] flex items-center justify-center">
          <Image
            src="/3d.svg"
            alt="Muscular System"
            layout="fill"
            objectFit="contain"
            priority // Use priority to preload important images
            className="rounded-md"
          />
        </div>
      </ContainerScroll>
    </div>
  );
};

export default Hero;
