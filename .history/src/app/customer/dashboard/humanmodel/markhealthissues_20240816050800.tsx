import React, { useMemo } from 'react';
import ClickableAnatomy from './model/ClickableAnatomy'; // Import ClickableAnatomy component
import HumanAnatomyIcons, { iconsMap } from './anatomyicons'; // Importing the icons

// Define the body parts and their associated health issues
const healthIssuesData = [
  { id: 'Brain', label: '60', icon: 'Brain', top: '10%', left: '45%' },
  { id: 'Heart', label: '24', icon: 'Heart', top: '40%', left: '48%' },
  { id: 'Lungs', label: '44', icon: 'Lungs', top: '30%', left: '50%' },
  // Add more health issues or body parts as necessary
];

const MarkHealthIssues: React.FC = () => {
  const handlePartClick = (partId: string) => {
    console.log(`You clicked on the ${partId}`);
    // You can expand this to show more detailed information or trigger actions
  };

  // Memoize the health issues to prevent unnecessary re-renders
  const healthIssues = useMemo(() => healthIssuesData, []);

  return (
    <div className="relative flex items-center justify-center min-h-screen p-4 bg-gray-50">
      {/* Render the ClickableAnatomy component and pass health issues */}
      <ClickableAnatomy onPartClick={handlePartClick} />

      {/* Display icons with labels for health issues */}
      {healthIssues.map(({ id, icon, top, left }) => (
        <div
          key={id}
          className="absolute flex items-center justify-center"
          style={{ top, left, transform: 'translate(-50%, -50%)' }}
          aria-label={`Click to view details about ${id}`}
        >
          <HumanAnatomyIcons icon={icon as keyof typeof iconsMap} size={24} />
          <span className="text-xs font-bold ml-2 text-gray-700">{id}</span>
        </div>
      ))}
    </div>
  );
};

export default MarkHealthIssues;
