import React, { useMemo } from 'react';
import ClickableAnatomy from './model/ClickableAnatomy';
import HumanAnatomyIcons from './anatomyicons';
import { bodyParts } from './model/bodyParts';

interface HealthIssue {
  id: string;
  icon: string;
  label: string;
}

const MarkHealthIssues: React.FC = () => {
  const handlePartClick = (partId: string) => {
    console.log(`You clicked on ${partId}`);
  };

  // Assuming you may want to fetch these details or they might be more dynamic
  const healthIssues = useMemo<HealthIssue[]>(() => bodyParts.map(part => ({
    id: part,
    icon: part,  // If icons are different, this mapping needs to be adjusted.
    label: '10'  // This could be dynamic, fetched or calculated somehow.
  })), []);

  return (
    <div className="relative flex items-center justify-center min-h-screen p-4 bg-gray-50">
      <ClickableAnatomy onPartClick={handlePartClick} />
      {healthIssues.map(({ id, icon, label }) => (
        <div key={id} className={`absolute flex items-center justify-center ${calculatePosition(id)}`}>
          <HumanAnatomyIcons icon={icon} size={24} />
          <span className="text-xs font-bold ml-2 text-gray-700">{label}</span>
        </div>
      ))}
    </div>
  );
};

// Dummy function to calculate position based on id, replace with real logic
function calculatePosition(partId: string): string {
  // Example: return calculated Tailwind CSS utility classes based on partId
  return "top-10 left-20"; // This needs to be dynamic based on part
}

export default MarkHealthIssues;
