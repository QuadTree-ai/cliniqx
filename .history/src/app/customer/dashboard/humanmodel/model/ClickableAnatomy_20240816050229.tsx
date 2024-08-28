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

interface ClickableAnatomyProps {
  onPartClick: (partId: string) => void;
}

const ClickableAnatomy: React.FC<ClickableAnatomyProps> = ({ onPartClick }) => {
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
            onClick={() => onPartClick(part)}
          >
            {/* SVG paths for each body part */}
          </g>
        ))}
      </svg>
    </div>
  );
};

export default ClickableAnatomy;