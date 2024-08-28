/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const Hero = () => {
  return (
    <div className="relative z-10">
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 via-gray-900 to-black">
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <div className="container mx-auto flex flex-col items-center pt-24 px-4 md:px-8 z-10 relative">
            <div className="w-full mb-8 text-center">
              <p className="text-4xl sm:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
                Transforming Healthcare
              </p>
              <p className="text-xl sm:text-2xl text-neutral-300 mt-4">
                Discover the power of artificial intelligence and how it's revolutionizing
                patient care, from diagnostics to treatment planning.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
