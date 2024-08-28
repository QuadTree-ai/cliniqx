import React, { useMemo } from 'react';
import ClickableAnatomy from './model/ClickableAnatomy';
import HumanAnatomyIcons from './anatomyicons';
import { bodyParts } from './model/bodyParts';

const MarkHealthIssues = () => {
  const handlePartClick = partId => {
    console.log(`You clicked on ${partId}`);
  };

  const healthIssues = useMemo(() => bodyParts.map(part => ({
    id: part,
    icon: part,  // Assuming you have a 1-to-1 mapping of part to icon. Adjust if necessary.
    label: '10'  // Example label, adjust based on actual data.
  })), []);

  return (
    <div className="relative flex items-center justify-center min-h-screen p-4 bg-gray-50">
      <ClickableAnatomy onPartClick={handlePartClick} />
      {healthIssues.map(({ id, icon }) => (
        <div key={id} className="absolute flex items-center justify-center">
          <HumanAnatomyIcons icon={icon} size={24} />
          <span className="text-xs font-bold ml-2 text-gray-700">{id}</span>
        </div>
      ))}
    </div>
  );
};

export default MarkHealthIssues;
