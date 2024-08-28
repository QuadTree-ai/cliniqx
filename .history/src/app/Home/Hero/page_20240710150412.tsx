import React from 'react';
import Marquee from './marquee';
import Image from 'next/image';
import Human from '/public/3d2.svg';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-start justify-center py-12 bg-gray-50 relative">
      <Marquee />
      <div className="container mx-auto flex flex-col md:flex-row items-center pt-24 px-8">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-4 leading-tight">
            Transforming Healthcare
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-gray-500 mb-6">
            with Advanced AI Solutions
          </h2>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <Image src={Human} alt="3D Human" width={500} height={500} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
