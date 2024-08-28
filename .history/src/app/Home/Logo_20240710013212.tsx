/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';
import LogoMain from '/public/Logo_main.svg';

const Logo = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative h-10 w-10 md:h-12 md:w-12 transition-all duration-300 ease-in-out">
        <Image
          src={LogoMain}
          alt="Logo Main"
          layout="fill"
          objectFit="contain"
          className="object-contain"
        />
      </div>
      <div className="flex items-center ml-2 transition-all duration-300 ease-in-out">
        <span className="font-capriola text-lg md:text-xl lg:text-2xl font-medium">
          cliniQ
        </span>
        <span className="font-baumans text-2xl md:text-3xl lg:text-4xl mx-1">
          X
        </span>
      </div>
    </div>
  );
};

export default Logo;
