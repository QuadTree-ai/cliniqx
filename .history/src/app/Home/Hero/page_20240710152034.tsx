import React from 'react';
import Marquee from './marquee';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-start justify-center py-12 bg-gray-50 relative">
      <Marquee />
      <div className="container mx-auto flex flex-col md:flex-row items-center pt-24 px-8">
        <div className="md:w-2/3 mb-8 md:mb-0">
          <h1 className="text-6xl md:text-8xl font-extrabold text-gray-800 mb-4 leading-tight">
            Transforming Healthcare
          </h1>
          <h2 className="text-4xl md:text-5xl font-light text-gray-500 mb-6">
            with Advanced AI Solutions
          </h2>
          <Button className="mt-4 text-xl md:text-2xl px-10 py-4 text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 rounded-full">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;