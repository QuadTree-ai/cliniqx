import React from 'react';

// Import the SVG as a React component
import HumanAnatomyFront from './anatomyFront';

// List of all body parts based on the provided names
const bodyParts = [
  "Brain",
  "Eyes",
  "Kidneys",
  "Lungs",
  "Thymus",
  "Thyroid",
  "Spleen",
  "Pancreas",
  "Stomach",
  "Liver & Gallbladder",
  "Small Intestine",
  "Large Intestine",
  "Apendix",
  "Skeleton",
  "Tibia & Fibula",
  "Femur & Patella",
  "Foot",
  "Pelvis with Sacrum & Coccyx",
  "Scapulae",
  "Spine with Sacrum & Coccyx",
  "Ribs & Sternum",
  "Skull with Mandible",
  "Clavicle",
  "Radius & Ulna",
  "Humerus",
  "Hand Carpals, Metacarpals, & Phalanges",
  "Circulatory System",
  "Heart"
];

const ClickableAnatomy: React.FC = () => {
  const handlePartClick = (partId: string) => {
    alert(`You clicked on the ${partId}`);
    // You can add additional logic for displaying information or highlighting
  };

  return (
    <div className="relative flex items-center justify-center w-full h-full">
      {/* Render the SVG */}
      <HumanAnatomyFront className="w-full h-auto" />

      {/* Attach click handlers to each body part */}
      <svg className="absolute inset-0 pointer-events-none">
        {bodyParts.map(part => (
          <g
            key={part}
            id={part}
            className="cursor-pointer pointer-events-auto"
            onClick={() => handlePartClick(part)}
          >
            {/* SVG path for each body part goes here */}
          </g>
        ))}
      </svg>
    </div>
  );
};

export default ClickableAnatomy;
