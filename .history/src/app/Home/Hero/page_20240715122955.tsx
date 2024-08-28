import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Marquee from "./marquee";
import muscularSystemSVG from "/public/Muscular System.svg"; // Path t your SVG

const Hero = () => {
  const svgRef = useRef(null);

  const handleScroll = () => {
    if (svgRef.current) {
      const svgElement = svgRef.current;
      const rect = svgElement.getBoundingClientRect();
      const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
      
      if (isVisible) {
        svgElement.classList.add("svg-3d-enlarge");
      } else {
        svgElement.classList.remove("svg-3d-enlarge");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative z-10">
      <Marquee />
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-black via-gray-800 to-black">
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <div className="container mx-auto flex flex-col md:flex-row items-start pt-24 px-4 md:px-8 z-10 relative">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-4 leading-tight">
                Transforming Healthcare
              </h1>
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-regular text-gray-300 mb-6">
                with Advanced AI Solutions.
              </h2>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
              <div className="relative w-full h-[300px] sm:h-[450px] md:h-[600px] lg:h-[750px] xl:h-[900px]">
                <div className="svg-container">
                  <object
                    ref={svgRef}
                    data={muscularSystemSVG}
                    type="image/svg+xml"
                    className="svg-3d w-full h-full"
                  >
                    Your browser does not support SVG.
                  </object>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .svg-container {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
};

export default Hero;
