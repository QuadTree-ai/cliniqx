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
      <Marquee />
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 via-gray-900 to-black">
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <div className="container mx-auto flex flex-col md:flex-row items-start pt-24 px-4 md:px-8 z-10 relative">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-4 leading-tight">
                Transforming Healthcare
              </h1>
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-gray-300 mb-6">
                with Advanced AI Solutions.
              </h2>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
              <div
                className="relative w-full h-[300px] sm:h-[450px] md:h-[600px] lg:h-[750px] xl:h-[900px]"
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
      <style jsx>{`
        .svg-visible {
          // Add any additional styles if needed when the SVG is visible
        }
      `}</style>
    </div>
  );
};

export default Hero;
