// src/app/customer/dashboard/humanmodel/healthissues.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import HumanFront from '/public/human models/Human front.svg';
import HumanAnatomyIcons from './humanantomyicons';

export default function HealthIssues() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-50">
      {/* Human Model Image */}
      <div className="relative">
        <Image src={HumanFront} alt="Human Model" width={400} height={600} className="object-contain" />

        {/* Health Issue Icons */}
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <div className="bg-yellow-400 p-2 rounded-full">
            <HumanAnatomyIcons icon="Brain" size={24} />
          </div>
          <span className="text-xs font-bold text-gray-700">60</span>
        </div>

        <div className="absolute top-32 left-1/4 transform -translate-x-1/2 flex flex-col items-center">
          <div className="bg-gray-600 p-2 rounded-full">
            <HumanAnatomyIcons icon="Lungs" size={24} />
          </div>
          <span className="text-xs font-bold text-yellow-400">44</span>
        </div>

        <div className="absolute top-36 right-1/3 transform translate-x-1/2 flex flex-col items-center">
          <div className="bg-gray-800 p-2 rounded-full">
            <HumanAnatomyIcons icon="Heart" size={24} />
          </div>
          <span className="text-xs font-bold text-yellow-400">24</span>
        </div>

        <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <div className="bg-gray-600 p-2 rounded-full">
            <HumanAnatomyIcons icon="Stomach" size={24} />
          </div>
          <span className="text-xs font-bold text-yellow-400">24</span>
        </div>

        <div className="absolute bottom-12 left-1/4 transform -translate-x-1/2 flex flex-col items-center">
          <div className="bg-gray-600 p-2 rounded-full">
            <HumanAnatomyIcons icon="Muscle" size={24} />
          </div>
          <span className="text-xs font-bold text-yellow-400">32</span>
        </div>
      </div>

      {/* Zoom Controls */}
      <div className="absolute bottom-4 left-4 flex flex-col space-y-2">
        <button className="p-2 bg-white rounded-full shadow-md">
          <span className="text-gray-600 font-bold">+</span>
        </button>
        <button className="p-2 bg-white rounded-full shadow-md">
          <span className="text-gray-600 font-bold">-</span>
        </button>
      </div>

      {/* Rotation Control */}
      <div className="absolute bottom-4 right-4 flex items-center space-x-2">
        <button className="p-2 bg-white rounded-full shadow-md">
          <span className="text-gray-600 font-bold">↔</span>
        </button>
      </div>
    </div>
  );
}
