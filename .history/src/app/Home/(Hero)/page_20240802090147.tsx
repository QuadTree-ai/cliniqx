import React, { useEffect, useRef } from "react";
import Marquee from "./marquee";

const Hero = () => {
  return (
    <div className="relative z-10">
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 via-gray-900 to-black">
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <div className="container mx-auto flex flex-col md:flex-row items-start pt-24 px-4 md:px-8 z-10 relative">
            <div className="w-full mb-8 text-center">
              <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
                Transforming Healthcare
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
