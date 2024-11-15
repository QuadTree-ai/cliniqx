"use client";

import React from 'react';
import HumanAnatomyIcons, { iconsMap } from './humanantomyicons';
import HumanFront from './HumanFront.svg'; // Importing the SVG as a React component using SVGR

const healthIssues: Array<{
  id: string; // Anatomy part id from SVG
  icon: keyof typeof iconsMap;
  label: string;
  bgColor: string;
  textColor: string;
  top: string; // Top position
  left: string; // Left position
}> = [
  { id: 'Brain', icon: 'Brain', label: '60', bgColor: 'bg-yellow-400 bg-opacity-75', textColor: 'text-gray-700', top: '10%', left: '45%' },
  { id: 'Lungs', icon: 'Lungs', label: '44', bgColor: 'bg-gray-600 bg-opacity-75', textColor: 'text-yellow-400', top: '30%', left: '50%' },
  { id: 'Heart', icon: 'Heart', label: '24', bgColor: 'bg-gray-800 bg-opacity-75', textColor: 'text-yellow-400', top: '40%', left: '48%' },
  { id: 'Stomach', icon: 'Stomach', label: '24', bgColor: 'bg-gray-600 bg-opacity-75', textColor: 'text-yellow-400', top: '50%', left: '50%' },
  { id: 'Muscle', icon: 'Muscle', label: '32', bgColor: 'bg-gray-600 bg-opacity-75', textColor: 'text-yellow-400', top: '70%', left: '45%' },
];

export default function HealthIssues() {
  const handlePartClick = (part: string) => {
    alert(`You clicked on ${part}`);
  };

  return (
    <div className="relative flex items-center justify-center w-full h-full">
      <HumanFront className="w-full h-auto" />

      {healthIssues.map(({ id, icon, label, bgColor, textColor, top, left }, index) => (
        <div
          key={index}
          className={`absolute ${bgColor} p-2 rounded-full flex items-center justify-center cursor-pointer`}
          style={{ top, left }} // Positioning using the top and left values
          onClick={() => handlePartClick(id)} // Handle clicks on specific parts
        >
          <HumanAnatomyIcons icon={icon} size={24} />
          <span className={`text-xs font-bold ${textColor} ml-2`}>{label}</span>
        </div>
      ))}
    </div>
  );
}
