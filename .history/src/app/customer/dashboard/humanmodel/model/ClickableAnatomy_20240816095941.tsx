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
    console.log('Effect running');
    const parts = document.querySelectorAll('.body-part') as NodeListOf<HTMLElement>;

    if (parts.length === 0) {
      console.error('No parts found. Check if the SVG has loaded and IDs are correct.');
    } else {
      console.log(`${parts.length} parts found`);
    }

    parts.forEach(part => {
      console.log(`Adding event listener to: ${part.id}`);
      part.addEventListener('click', () => {
        console.log(`Part clicked: ${part.id}`);
        onPartClick(part.id);
      });
      part.style.cursor = 'pointer';
    });

    return () => {
      parts.forEach(part => {
        part.removeEventListener('click', () => onPartClick(part.id));
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