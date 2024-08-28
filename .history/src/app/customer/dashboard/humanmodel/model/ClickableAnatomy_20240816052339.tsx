import React, { useEffect } from 'react';
import HumanAnatomyFront from './anatomyFront';

// List of body parts with their respective IDs
const bodyParts = [
  "Brain",
  "Heart",
  "Lungs",
  "Kidneys",
  "Eyes",
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
];

interface ClickableAnatomyProps {
  onPartClick: (partId: string) => void;
}

const ClickableAnatomy: React.FC<ClickableAnatomyProps> = ({ onPartClick }) => {
  useEffect(() => {
    // Loop over body parts and add event listeners to the respective SVG elements
    bodyParts.forEach(part => {
      const element = document.getElementById(part);
      if (element) {
        element.classList.add('body-part'); // Apply CSS class for styling
        element.addEventListener('click', () => onPartClick(part));
      }
    });

    // Cleanup function to remove event listeners and classes
    return () => {
      bodyParts.forEach(part => {
        const element = document.getElementById(part);
        if (element) {
          element.classList.remove('body-part');
          element.removeEventListener('click', () => onPartClick(part));
        }
      });
    };
  }, [onPartClick]);

  return (
    <div className="relative flex items-center justify-center w-full h-full">
      {/* Render the human anatomy SVG */}
      <HumanAnatomyFront className="w-full h-auto" />
    </div>
  );
};

export default ClickableAnatomy;
