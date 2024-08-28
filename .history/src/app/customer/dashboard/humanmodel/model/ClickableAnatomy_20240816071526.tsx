import React, { useEffect } from 'react';
import HumanAnatomyFront from './anatomyFront';

// Define a list of body parts IDs that correspond to elements in the SVG
const bodyParts = [
  "brain",
  "heart",
  "lungs",
  "kidneys",
  "eyes",
  "thymus",
  "thyroid",
  "spleen",
  "pancreas",
  "stomach",
  "liver",
  "gallbladder",
  "smallIntestine",
  "largeIntestine",
  "appendix",
  "skeleton",
  "tibia",
  "fibula",
  "femur",
  "patella",
  "foot",
  "pelvis",
  "sacrum",
  "coccyx",
  "scapulae",
  "spine",
  "ribs",
  "sternum",
  "skull",
  "mandible",
  "clavicle",
  "radius",
  "ulna",
  "humerus",
  "handCarpals",
  "metacarpals",
  "phalanges",
  "circulatorySystem"
];

const ClickableAnatomy: React.FC<{ onPartClick: (partId: string) => void }> = ({ onPartClick }) => {
  useEffect(() => {
    // Select elements by class and assert them as HTMLElements
    const parts = document.querySelectorAll('.body-part') as NodeListOf<HTMLElement>;

    parts.forEach(part => {
      part.addEventListener('click', () => onPartClick(part.id));
      part.style.cursor = 'pointer'; // Apply cursor style to indicate clickable areas
    });

    // Cleanup function to remove event listeners and revert styles if necessary
    return () => {
      parts.forEach(part => {
        part.removeEventListener('click', () => onPartClick(part.id));
        part.style.cursor = ''; // Revert cursor style if necessary
      });
    };
  }, [onPartClick]);

  return (
    <div className="relative flex items-center justify-center w-full h-full">
      <HumanAnatomyFront className="w-full h-auto" />
    </div>
  );
};

export default ClickableAnatomy;
