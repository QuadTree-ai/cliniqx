import React, { useEffect } from 'react';
import HumanAnatomyFront from './model/anatomyFront';

// Define clickable areas corresponding to SVG elements
const bodyPartMapping = [
  { id: 'Brain', label: 'Brain' },
  { id: 'Heart', label: 'Heart' },
  { id: 'Lungs', label: 'Lungs' },
  // Add more body parts as necessary
];

const Model = () => {
  useEffect(() => {
    // Attach event listeners to SVG elements based on the mapping
    bodyPartMapping.forEach(({ id, label }) => {
      const element = document.getElementById(id);
      if (element) {
        element.addEventListener('click', () => handlePartClick(label));
      }
    });

    // Cleanup event listeners on component unmount
    return () => {
      bodyPartMapping.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          element.removeEventListener('click', () => handlePartClick(id));
        }
      });
    };
  }, []);

  const handlePartClick = (partId: string) => {
    console.log(`Clicked on ${partId}`);
    // Logic for showing details or highlighting
    alert(`You clicked on the ${partId}`);
  };

  return (
    <div className="relative flex items-center justify-center w-full h-full">
      <HumanAnatomyFront className="w-full h-auto" />
    </div>
  );
};

export default Model;
