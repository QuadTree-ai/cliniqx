// src/app/customer/dashboard/humanmodel/healthissues.tsx
"use client";

import React from 'react';
import HumanAnatomyIcons from './humanantomyicons';

const healthIssues: Array<{
  icon: 'Brain' | 'Lungs' | 'Heart' | 'Stomach' | 'Muscle' | 'Eye' | 'Hand';
  size: number;
  position: string;
  label: string;
  bgColor: string;
  textColor: string;
}> = [
  { icon: 'Brain', size: 24, position: 'top-[5%] left-[50%] transform -translate-x-1/2', label: '60', bgColor: 'bg-yellow-400 bg-opacity-75', textColor: 'text-gray-700' },
  { icon: 'Lungs', size: 24, position: 'top-[30%] left-[30%] transform -translate-x-1/2', label: '44', bgColor: 'bg-gray-600 bg-opacity-75', textColor: 'text-yellow-400' },
  { icon: 'Heart', size: 24, position: 'top-[40%] right-[35%] transform translate-x-1/2', label: '24', bgColor: 'bg-gray-800 bg-opacity-75', textColor: 'text-yellow-400' },
  { icon: 'Stomach', size: 24, position: 'bottom-[30%] left-[50%] transform -translate-x-1/2', label: '24', bgColor: 'bg-gray-600 bg-opacity-75', textColor: 'text-yellow-400' },
  { icon: 'Muscle', size: 24, position: 'bottom-[10%] left-[25%] transform -translate-x-1/2', label: '32', bgColor: 'bg-gray-600 bg-opacity-75', textColor: 'text-yellow-400' },
];

export default function HealthIssues() {
  return (
    <div className="relative flex items-center justify-center w-full h-full">
      {/* Health Issue Icons */}
      {healthIssues.map(({ icon, size, position, label, bgColor, textColor }, index) => (
        <div key={index} className={`absolute ${position} flex flex-col items-center`}>
          <div className={`${bgColor} p-2 rounded-full`}>
            <HumanAnatomyIcons icon={icon} size={size} />
          </div>
          <span className={`text-xs font-bold ${textColor} mt-1`}>{label}</span>
        </div>
      ))}
    </div>
  );
}
