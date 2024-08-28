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
    // Attach hover effect dynamically
    const parts = document.querySelectorAll('.body-part') as NodeListOf<HTMLElement>;

    parts.forEach(part => {
      part.addEventListener('mouseenter', () => {
        part.style.fill = '#abcdef'; // Light blue fill on hover
        part.style.stroke = '#123456'; // Dark blue border on hover
        part.style.strokeWidth = '2px'; // Border width on hover
      });

      part.addEventListener('mouseleave', () => {
        part.style.fill = ''; // Revert fill
        part.style.stroke = ''; // Revert stroke
        part.style.strokeWidth = ''; // Revert stroke width
      });

      part.addEventListener('click', () => onPartClick(part.id));
      part.style.cursor = 'pointer';
    });

    return () => {
      parts.forEach(part => {
        part.removeEventListener('mouseenter', () => {/* Hover styles */});
        part.removeEventListener('mouseleave', () => {/* Revert styles */});
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