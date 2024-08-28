// src/app/customer/dashboard/humanmodel/healthissues.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import HumanFront from '/public/human models/Human front.svg';
import HumanAnatomyIcons from './humananatomyicons';

const healthIssues = [
  { icon: 'Brain', size: 24, position: 'top-10 left-1/2 transform -translate-x-1/2', label: '60', bgColor: 'bg-yellow-400', textColor: 'text-gray-700' },
  { icon: 'Lungs', size: 24, position: 'top-32 left-1/4 transform -translate-x-1/2', label: '44', bgColor: 'bg-gray-600', textColor: 'text-yellow-400' },
  { icon: 'Heart', size: 24, position: 'top-36 right-1/3 transform translate-x-1/2', label: '24', bgColor: 'bg-gray-800', textColor: 'text-yellow-400' },
  { icon: 'Stomach', size: 24, position: 'bottom-28 left-1/2 transform -translate-x-1/2', label: '24', bgColor: 'bg-gray-600', textColor: 'text-yellow-400' },
  { icon: 'Muscle', size: 24, position: 'bottom-12 left-1/4 transform -translate-x-1/2', label: '32', bgColor: 'bg-gray-600', textColor: 'text-yellow-400' },
];

export default function HealthIssues() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-50">
      {/* Human Model Image */}
      <div className="relative">
        <Image src={HumanFront} alt="Human Model" width={400} height={600} className="object-contain" />

        {/* Health Issue Icons */}
        {healthIssues.map((issue, index) => (
          <div key={index} className={`absolute ${issue.position} flex flex-col items-center`}>
            <div className={`${issue.bgColor} p-2 rounded-full`}>
              <HumanAnatomyIcons icon={issue.icon} size={issue.size} />
            </div>
            <span className={`text-xs font-bold ${issue.textColor}`}>{issue.label}</span>
          </div>
        ))}
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
