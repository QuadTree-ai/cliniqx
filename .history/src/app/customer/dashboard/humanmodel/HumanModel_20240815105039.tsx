import React from 'react';
import { ReactComponent as HumanAnatomyFront } from './anatomyFront'; // Your SVG component

// Define clickable areas corresponding to SVG paths
const bodyParts = [
  { id: 'Brain', top: 10, left: 45, width: 10, height: 5 },
  { id: 'Heart', top: 40, left: 48, width: 10, height: 5 },
  { id: 'Lungs', top: 30, left: 50, width: 15, height: 10 },
  // Add more parts as necessary
];

const Model = () => {
  const handlePartClick = (partId: string) => {
    console.log(`Clicked on ${partId}`);
  };

  return (
    <div className="relative flex items-center justify-center w-full h-full">
      <HumanAnatomyFront className="w-full h-auto" />
      {/* Overlay clickable areas */}
      {bodyParts.map(({ id, top, left, width, height }) => (
        <div
          key={id}
          className="absolute cursor-pointer"
          style={{
            top: `${top}%`,
            left: `${left}%`,
            width: `${width}%`,
            height: `${height}%`,
            backgroundColor: 'rgba(255, 0, 0, 0.2)' // Semi-transparent for demo, make it 'transparent' in production
          }}
          onClick={() => handlePartClick(id)}
        />
      ))}
    </div>
  );
};

export default Model;
