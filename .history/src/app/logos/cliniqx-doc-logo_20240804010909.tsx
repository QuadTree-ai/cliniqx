import React from 'react';
import Image from 'next/image';
import LogoMain from '/public/Logo_main.svg';

const Logo = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 transition-all duration-300 ease-in-out">
        <Image
          src={LogoMain}
          alt="Logo Main"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="text-white flex items-center ml-2 transition-all duration-300 ease-in-out">
        <span className="font-capriola text-lg md:text-xl lg:text-2xl font-medium">
          cliniQ
        </span>
        <span className="font-baumans text-xl md:text-2xl lg:text-3xl mx-1">
          X
        </span>
        <span className="font-poppins text-sm md:text-base lg:text-lg font-light">
          doc
        </span>
      </div>
    </div>
  );
};

export default Logo;
