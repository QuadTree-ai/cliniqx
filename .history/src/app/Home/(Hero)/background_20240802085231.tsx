import React from 'react';

export const DotBackgroundDemo: React.FC = () => {
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-black dark:bg-dot-black/[0.20] bg-dot-white/[0.20] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute inset-0 flex items-center justify-center dark:bg-gradient-radial from-transparent via-black to-bg-black opacity-20 bg-gradient-radial from-transparent via-white to-bg-white opacity-20"></div>
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Backgrounds
      </p>
    </div>
  );
};

export default DotBackgroundDemo;
