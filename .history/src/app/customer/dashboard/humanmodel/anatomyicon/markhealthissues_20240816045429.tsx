import React, { useEffect } from 'react';
import HumanAnatomyFront from '../model/anatomyFront';
import HumanAnatomyIcons, { iconsMap } from './anatomyicons'; // Importing the icons

// Define the body parts and their associated health issues
const healthIssues = [
  { id: 'Brain', label: '60', icon: 'Brain' },
  { id: 'Heart', label: '24', icon: 'Heart' },
  { id: 'Lungs', label: '44', icon: 'Lungs' },
  // Add more health issues or body parts as necessary
];

const MarkHealthIssues: React.FC = () => {
  // Attach event listeners to specific body parts
  useEffect(() => {
    // Attach event listeners to SVG elements based on the mapping
    healthIssues.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        element.addEventListener('click', () => handlePartClick(id));
      }
    });

    // Cleanup event listeners on component unmount
    return () => {
      healthIssues.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          element.removeEventListener('click', () => handlePartClick(id));
        }
      });
    };
  }, []);

  const handlePartClick = (partId: string) => {
    alert(`You clicked on the ${partId}`);
    // You can expand this to show more detailed information or trigger actions
  };

  return (
    <div className="relative flex items-center justify-center w-full h-full">
      {/* Render the human anatomy SVG */}
      <HumanAnatomyFront className="w-full h-auto" />

      {/* Optionally display icons with labels for health issues */}
      {healthIssues.map(({ id, icon }) => (
        <div
          key={id}
          className="absolute flex items-center justify-center"
          style={{
            top: '0', // Define the specific top and left positions for the icons, if needed
            left: '0', // You can add position logic if you want to overlay icons on the anatomy
            display: 'none', // Hide the icons initially if they should only appear on hover or click
          }}
        >
          <HumanAnatomyIcons icon={icon as keyof typeof iconsMap} size={24} />
        </div>
      ))}
    </div>
  );
};

export default MarkHealthIssues;
