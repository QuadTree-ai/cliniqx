import React, { useMemo } from 'react';
import ClickableAnatomy from './model/ClickableAnatomy';
import HumanAnatomyIcons from './anatomyicons';
import { bodyParts } from './model/bodyParts';

const MarkHealthIssues: React.FC = () => {
  const handlePartClick = (partId: string) => {
    console.log(`You clicked on ${partId}`);
  };

  const healthIssues = useMemo(() => bodyParts.map(part => ({
    ...part,
    label: '10', // Default label, should be dynamic based on data
    icon: part.id // Assuming the icon ID matches the body part ID
  })), []);

  return <div className="relative flex items-center justify-center min-h-screen p-4 bg-gray-50">
    <ClickableAnatomy onPartClick={handlePartClick} />
    {healthIssues.map(({ id, icon, top, left }) => (
      <div key={id} className="absolute flex items-center justify-center" style={{ top, left, transform: 'translate(-50%, -50%)' }}>
        <HumanAnatomyIcons icon={icon} size={24} />
        <span className="text-xs font-bold ml-2 text-gray-700">{id}</span>
      </div>
    ))}
  </div>;
};

export default MarkHealthIssues;
