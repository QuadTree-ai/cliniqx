"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { ArrowRight } from "lucide-react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

import { TextRevealCard } from "@/components/ui/text-reveal-card";

const Hero = () => {
  return (
    <div className="relative z-10 flex items-center justify-center min-h-screen mb-40">
      <ContainerScroll
        titleComponent={
          <div className="text-center px-6 py-12 sm:px-10 sm:py-16 md:px-14 md:py-20 lg:px-20 lg:py-24 xl:px-28 xl:py-28">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 leading-tight mb-6">
              Transforming Healthcare
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-200 mt-6 mb-10 leading-relaxed">
              Personalized healthcare assistant
            </p>
            <div className="flex items-center justify-center min-h-screen">
              <TextRevealCard
                text="You take care of your health"
                revealText="We handle your treatment"
                className="w-full max-w-5xl px-12 py-20 rounded-lg shadow-xl overflow-hidden"
              ></TextRevealCard>
              <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 mt-10">
                <Link href="/signup/customer" passHref>
                  <HoverBorderGradient
                    containerClassName="rounded-full"
                    as="button"
                    className="dark:bg-black bg-black text-white dark:text-white font-bold py-3 px-6 md:py-4 md:px-10 flex items-center justify-center space-x-2"
                  >
                    <ArrowRight className="mr-2" size={20} />
                    <span>Get Started</span>
                  </HoverBorderGradient>
                </Link>
              </div>
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
