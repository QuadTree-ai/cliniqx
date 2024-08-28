import React, { useMemo } from 'react';
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
    console.log(`Clicked on ${partId}`);
    // Implement modal or tooltip showing here
  };

  const renderedHealthIssues = useMemo(() => healthIssues.map(({ id, label, icon, top, left, bgColor, textColor }) => (
    <div
      key={id}
      onClick={() => handlePartClick(id)}
      className={`absolute ${bgColor} p-2 rounded-full cursor-pointer flex items-center justify-center`}
      style={{ top: `${top}%`, left: `${left}%`, transform: 'translate(-50%, -50%)' }}
      aria-label={`Health issue at ${id}`}
      role="button"
      tabIndex={0}
    >
      <HumanAnatomyIcons icon={icon as keyof typeof iconsMap} size={24} />
      <span className={`text-xs font-bold ${textColor} ml-2`}>{label}</span>
    </div>
  )), []);

  return (
    <div className="relative flex items-center justify-center w-full h-full">
      <HumanAnatomyFront className="w-full h-auto" />
      {renderedHealthIssues}
    </div>
  );
};

export default React.memo(MarkHealthIssues);
