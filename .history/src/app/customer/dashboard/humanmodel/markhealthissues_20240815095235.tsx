import React from 'react';
import HumanAnatomyIcons, { iconsMap } from './anatomyicons'; // Importing the icons
import { ReactComponent as HumanAnatomyFront } from './anatomyFront'; // Importing the SVG as a ReactComponent

const healthIssues = [
  { id: 'Brain', label: '60', icon: 'Brain', top: '10%', left: '45%', bgColor: 'bg-yellow-400', textColor: 'text-gray-700' },
  { id: 'Heart', label: '24', icon: 'Heart', top: '40%', left: '48%', bgColor: 'bg-red-400', textColor: 'text-white' },
  { id: 'Lungs', label: '44', icon: 'Lungs', top: '30%', left: '50%', bgColor: 'bg-blue-400', textColor: 'text-white' },
  // Add more health issues as needed
];

const MarkHealthIssues: React.FC = () => {
  const handlePartClick = (part: string) => {
    alert(`You clicked on the ${part}`);
    // You can expand this to show more detailed information or trigger actions
  };

  return (
    <div className="relative flex items-center justify-center w-full h-full">
      {/* Render the SVG Component */}
      <HumanAnatomyFront className="w-full h-auto" />

      {/* Map over health issues and display icons on the corresponding body parts */}
      {healthIssues.map(({ id, label, icon, top, left, bgColor, textColor }, index) => (
        <div
          key={index}
          onClick={() => handlePartClick(id)}
          className={`absolute ${bgColor} p-2 rounded-full cursor-pointer flex items-center justify-center`}
          style={{ top, left, transform: 'translate(-50%, -50%)' }} // Adjusted for more accurate positioning
        >
          <HumanAnatomyIcons icon={icon as keyof typeof iconsMap} size={24} />
          <span className={`text-xs font-bold ${textColor} ml-2`}>{label}</span>
        </div>
      ))}
    </div>
  );
};

export default MarkHealthIssues;
