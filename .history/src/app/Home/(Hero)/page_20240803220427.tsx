"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative z-10 flex items-center justify-center min-h-screen mb-48">
      <ContainerScroll
        titleComponent={
          <div className="text-center px-8 py-16 sm:px-12 sm:py-20 md:px-16 md:py-24 lg:px-24 lg:py-28 xl:px-32 xl:py-32">
            <div className="mb-8 flex justify-center">
              <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  Border Magic
                </span>
              </button>
            </div>
            <div className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 leading-snug mb-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-5">
                Personal
              </h1>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-8">
                Healthcare Assistant
              </h1>
            </div>
            <h4 className="text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl text-gray-400 mt-6 mb-8 leading-snug">
              CliniQX enhances patient care with a connected EHR/EMR system, 
              cutting-edge system improving data management and compliance.
            </h4>
            <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 mb-12">
              <Link href="/signup/customer" passHref>
                <button className="relative inline-flex items-center justify-center py-3 px-6 md:py-4 md:px-8 rounded-full bg-black text-white font-bold shadow-lg hover:bg-gradient-to-r from-gray-500 to-blue-500 transition-all duration-300">
                  <ArrowRight className="mr-2" size={20} />
                  <span>Get Started</span>
                </button>
              </Link>
            </div>
            <p className="text-sm text-gray-400 mt-10 mb-8 leading-snug">
              30-day money-back guarantee
            </p>
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
