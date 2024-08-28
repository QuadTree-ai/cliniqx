"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Marquee from "./marquee";
import muscularSystemSVG from "/public/3d.svg";

const Hero = () => {
  const svgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const svgElement = svgRef.current;
      if (svgElement) {
        const rect = svgElement.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

        if (isVisible) {
          svgElement.classList.add("svg-visible");
        } else {
          svgElement.classList.remove("svg-visible");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative z-10">
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 via-gray-900 to-black">
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <div className="container mx-auto flex flex-col md:flex-row items-start pt-24 px-4 md:px-8 z-10 relative">
            <div className="w-full md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white mb-4 leading-tight">
                Transforming Healthcare
              </h1>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-300 mb-6">
                with Advanced AI Solutions.
              </h2>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
              <div
                className="relative w-[90%] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]"
                ref={svgRef}
              >
                <Image
                  src={muscularSystemSVG}
                  alt="Muscular System"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
