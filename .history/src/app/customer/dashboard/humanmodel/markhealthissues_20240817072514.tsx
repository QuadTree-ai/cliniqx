import React, { useMemo } from 'react';
import ClickableAnatomy from './model/ClickableAnatomy';
import HumanAnatomyIcons from './icon/anatomyicons';
import { bodyParts } from './icon/bodyParts';
import { iconMapping } from './icon/iconMapping'; // Import the icon mapping

interface HealthIssue {
  id: string;
  icon: keyof typeof iconMapping;  // Use the specific keys of iconMapping for type safety
  label: string;
}

const MarkHealthIssues: React.FC = () => {
  const handlePartClick = (partId: string) => {
    console.log(`You clicked on ${partId}`);
  };

  const healthIssues = useMemo<HealthIssue[]>(() => bodyParts.map(part => ({
    id: part,
    icon: iconMapping[part] || 'DefaultIcon',  // Use mapping, provide a default icon if not found
    label: '10'  // Example static label, ideally this would be dynamic
  })), []);

  return (
    <div className="relative flex items-center justify-center min-h-screen p-4 bg-gray-50">
      <ClickableAnatomy onPartClick={handlePartClick} />
      {healthIssues.map(({ id, icon, label }) => (
        <div key={id} className={`absolute flex items-center justify-center ${calculatePosition(id)}`}>
          <span className="text-xs font-bold ml-2 text-gray-700">{label}</span>
        </div>
      ))}
    </div>
  );
};

// More dynamic function to calculate position based on part ID
function calculatePosition(partId: string): string {
  // Here, you would implement logic or access a map that provides CSS class names based on part IDs
  const positionMap = {
    brain: "top-5 left-20",
    heart: "top-30 left-50",
    // Continue mapping for other parts
  };

  return positionMap[partId] || "top-10 left-20"; // Fallback position
}

export default MarkHealthIssues;
