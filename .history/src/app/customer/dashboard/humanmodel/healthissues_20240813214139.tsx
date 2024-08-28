"use client";

import React from 'react';

const healthIssues: Array<{
  id: string; // Anatomy part id from SVG
  label: string;
  bgColor: string;
  textColor: string;
}> = [
  { id: 'brain', label: '60', bgColor: 'bg-yellow-400 bg-opacity-75', textColor: 'text-gray-700' },
  { id: 'lungs', label: '44', bgColor: 'bg-gray-600 bg-opacity-75', textColor: 'text-yellow-400' },
  { id: 'heart', label: '24', bgColor: 'bg-gray-800 bg-opacity-75', textColor: 'text-yellow-400' },
  { id: 'stomach', label: '24', bgColor: 'bg-gray-600 bg-opacity-75', textColor: 'text-yellow-400' },
  { id: 'muscle', label: '32', bgColor: 'bg-gray-600 bg-opacity-75', textColor: 'text-yellow-400' },
];

export default function HealthIssues() {
  return (
    <div className="relative flex items-center justify-center w-full h-full">
      {healthIssues.map(({ id, label, bgColor, textColor }, index) => (
        <div 
          key={index} 
          className={`absolute ${bgColor} p-2 rounded-full`}
          style={{ position: 'relative', top: '0', left: '0', transform: `translate(${id})` }} // Assuming you have data-position in your SVG for each part
        >
          <span className={`text-xs font-bold ${textColor}`}>{label}</span>
        </div>
      ))}
    </div>
  );
}
