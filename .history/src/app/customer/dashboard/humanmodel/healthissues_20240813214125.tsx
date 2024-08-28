"use client";

import React from 'react';
import HumanAnatomyIcons from './humanantomyicons';
import Image from 'next/image';
import HumanFront from '/mnt/data/Human front.svg';

const healthIssues: Array<{
  id: string; // Anatomy part id from SVG
  icon: keyof typeof iconsMap;
  label: string;
  bgColor: string;
  textColor: string;
}> = [
  { id: 'Brain', icon: 'Brain', label: '60', bgColor: 'bg-yellow-400 bg-opacity-75', textColor: 'text-gray-700' },
  { id: 'Lungs', icon: 'Lungs', label: '44', bgColor: 'bg-gray-600 bg-opacity-75', textColor: 'text-yellow-400' },
  { id: 'Heart', icon: 'Heart', label: '24', bgColor: 'bg-gray-800 bg-opacity-75', textColor: 'text-yellow-400' },
  { id: 'Stomach', icon: 'Stomach', label: '24', bgColor: 'bg-gray-600 bg-opacity-75', textColor: 'text-yellow-400' },
  { id: 'Muscle', icon: 'Muscle', label: '32', bgColor: 'bg-gray-600 bg-opacity-75', textColor: 'text-yellow-400' },
];

export default function HealthIssues() {
  return (
    <div className="relative flex items-center justify-center w-full h-full">
      <Image src={HumanFront} alt="Human Front View" layout="responsive" width={400} height={600} />
      {healthIssues.map(({ id, icon, label, bgColor, textColor }, index) => (
        <div
          key={index}
          className={`absolute ${bgColor} p-2 rounded-full`}
          style={{ position: 'absolute', top: `var(--${id}-top)`, left: `var(--${id}-left)` }} // Use CSS variables or hardcoded values for positioning
        >
          <HumanAnatomyIcons icon={icon} size={24} />
          <span className={`text-xs font-bold ${textColor} mt-1`}>{label}</span>
        </div>
      ))}
    </div>
  );
}
