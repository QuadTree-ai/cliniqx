/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Logo = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative h-8 w-8 md:h-10 md:w-10 transition-all duration-300 ease-in-out">
        <img
          src="Logo_main.svg"
          alt="Logo Main"
          className="object-contain w-full h-full"
        />
      </div>
      <div className="flex items-center ml-2 transition-all duration-300 ease-in-out">
        <span className="font-capriola text-lg md:text-xl lg:text-2xl font-medium">
          cliniQ
        </span>
        <span className="font-baumans text-2xl md:text-3xl lg:text-4xl mx-1">
          X
        </span>
        <span className="font-poppins text-sm md:text-base lg:text-lg font-light">
          invent
        </span>
      </div>
    </div>
  );
};

export default Logo;
