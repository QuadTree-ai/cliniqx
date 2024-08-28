"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { ArrowRight } from "lucide-react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const Hero = () => {
  return (
    <div className="relative z-10 flex items-center justify-center min-h-screen mb-40">
      <ContainerScroll
        titleComponent={
          <div className="text-center px-6 py-12 sm:px-10 sm:py-16 md:px-14 md:py-20 lg:px-20 lg:py-24 xl:px-28 xl:py-28">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 leading-snug mb-4">
              Personalized <br /> Healthcare Assistant
            </h1>
            <p className="text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl text-gray-200 mt-2 mb-4 leading-snug">
              CliniQX enhances patient care with a cutting-edge EHR system,
              improving data management and compliance.
            </p>

            <div className="flex justify-center gap-2 sm:gap-4 md:gap-6">
              <Link href="/signup/customer" passHref>
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  as="button"
                  className="dark:bg-black bg-black text-white dark:text-white font-bold py-2 px-4 md:py-3 md:px-6 flex items-center justify-center space-x-2"
                >
                  <ArrowRight className="mr-2" size={20} />
                  <span>Get Started</span>
                </HoverBorderGradient>
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
            priority // Use priority to preload important images
            className="rounded-md"
          />
        </div>
      </ContainerScroll>
    </div>
  );
};

export default Hero;
