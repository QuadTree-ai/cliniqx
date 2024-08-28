"use client";

import React from 'react';
import HumanAnatomyIcons, { iconsMap } from './humanantomyicons';
import Image from 'next/image';
import HumanFront from '/Human front.svg';

const healthIssues: Array<{
  id: string; // Anatomy part id from SVG
  icon: keyof typeof iconsMap;
  label: string;
  bgColor: string;
  textColor: string;
  top: string;  // Top position for the icon
  left: string; // Left position for the icon
}> = [
  { id: 'Brain', icon: 'Brain', label: '60', bgColor: 'bg-yellow-400 bg-opacity-75', textColor: 'text-gray-700', top: '10%', left: '45%' },
  { id: 'Lungs', icon: 'Lungs', label: '44', bgColor: 'bg-gray-600 bg-opacity-75', textColor: 'text-yellow-400', top: '30%', left: '42%' },
  { id: 'Heart', icon: 'Heart', label: '24', bgColor: 'bg-gray-800 bg-opacity-75', textColor: 'text-yellow-400', top: '40%', left: '43%' },
  { id: 'Stomach', icon: 'Stomach', label: '24', bgColor: 'bg-gray-600 bg-opacity-75', textColor: 'text-yellow-400', top: '60%', left: '43%' },
  { id: 'Muscle', icon: 'Muscle', label: '32', bgColor: 'bg-gray-600 bg-opacity-75', textColor: 'text-yellow-400', top: '80%', left: '40%' },
];

export default function HealthIssues() {
  return (
    <div className="relative flex items-center justify-center w-full h-full">
      {/* Display the SVG */}
      <Image
        src={HumanFront}
        alt="Human Front View"
        layout="responsive"
        width={400}
        height={600}
      />

      {/* Overlay health issue icons on the SVG */}
      {healthIssues.map(({ id, icon, label, bgColor, textColor, top, left }, index) => (
        <div
          key={index}
          className={`absolute ${bgColor} p-2 rounded-full flex flex-col items-center justify-center`}
          style={{ top, left }}
        >
          <HumanAnatomyIcons icon={icon} size={24} />
          <span className={`text-xs font-bold ${textColor} mt-1`}>{label}</span>
        </div>
      ))}
    </div>
  );
}
