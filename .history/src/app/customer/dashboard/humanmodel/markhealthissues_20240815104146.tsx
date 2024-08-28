import React from 'react';
import HumanAnatomyIcons, { iconsMap } from './anatomyicons'; // Importing the icons
import { ReactComponent as HumanAnatomyFront } from './anatomyFront'; // Importing the SVG as a ReactComponent

const healthIssues = [
  { id: 'Brain', label: '60', icon: 'Brain', top: '10%', left: '45%', bgColor: 'bg-yellow-400', textColor: 'text-gray-700' },
  { id: 'Heart', label: '24', icon: 'Heart', top: '40%', left: '48%', bgColor: 'bg-red-400', textColor: 'text-white' },
  { id: 'Lungs', label: '44', icon: 'Lungs', top: '30%', left: '50%', bgColor: 'bg-blue-400', textColor: 'text-white' },
  // Additional health issues can be added here
];

const MarkHealthIssues: React.FC = () => {
  const handlePartClick = (partId: string) => {
    alert(`You clicked on the ${partId}`);
  };

  return (
    <div className="relative flex items-center justify-center w-full h-full">
      <HumanAnatomyFront className="w-full h-auto" />

      {/* Overlay for clickable areas and displaying icons */}
      {healthIssues.map(({ id, icon, top, left, bgColor, textColor }) => (
        <button
          key={id}
          onClick={() => handlePartClick(id)}
          className={`absolute ${bgColor} p-2 rounded-full cursor-pointer flex items-center justify-center`}
          style={{ top: `${top}%`, left: `${left}%`, transform: 'translate(-50%, -50%)' }}
          aria-label={`Click to view details about ${id}`}
        >
          <HumanAnatomyIcons icon={icon as keyof typeof iconsMap} size={24} />
          <span className={`text-xs font-bold ${textColor} ml-2`}>{id}</span>
        </button>
      ))}
    </div>
  );
};

export default MarkHealthIssues;
