import React, { memo } from 'react';
import HumanAnatomyIcons, { iconsMap } from '../humanmodel/icon/anatomyicons';

type SeverityLevel = 'low' | 'moderate' | 'high';

type Insight = {
  part: keyof typeof iconsMap;
  problem: string;
  severity: SeverityLevel;
};

type HealthInsightProps = {
  insights: Insight[];
};

const HealthInsight: React.FC<HealthInsightProps> = ({ insights }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {insights.map(({ part, problem, severity }, index) => (
        <div
          key={index}
          className="border p-4 rounded-lg shadow-lg flex flex-col items-center"
          aria-label={`Health insight for ${part} with ${severity} severity`}
        >
          <MemoizedHumanAnatomyIcons icon={part} size={48} color={getSeverityColor(severity)} />
          <h3 className="text-xl font-semibold mt-4 capitalize">{part}</h3>
          <p className="text-gray-700 text-center">{problem}</p>
          <span
            className={`mt-2 px-3 py-1 rounded-full text-white ${getSeverityBgColor(severity)}`}
          >
            Severity: {capitalize(severity)}
          </span>
        </div>
      ))}
    </div>
  );
};

// Memoize the HumanAnatomyIcons component to prevent unnecessary re-renders
const MemoizedHumanAnatomyIcons = memo(HumanAnatomyIcons);

// Helper function to get the color for the icon based on severity
const getSeverityColor = (severity: SeverityLevel): string => {
  const colors: Record<SeverityLevel, string> = {
    low: 'green',
    moderate: 'yellow',
    high: 'red',
  };
  return colors[severity];
};

// Helper function to get the background color for the severity badge
const getSeverityBgColor = (severity: SeverityLevel): string => {
  const bgColors: Record<SeverityLevel, string> = {
    low: 'bg-green-500',
    moderate: 'bg-yellow-500',
    high: 'bg-red-500',
  };
  return bgColors[severity];
};

// Helper function to capitalize the first letter of a string
const capitalize = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1);

const mockInsights: Insight[] = [
  {
    part: 'Brain',
    problem: 'Severe headache and dizziness',
    severity: 'high',
  },
  {
    part: 'Heart',
    problem: 'Chest pain and shortness of breath',
    severity: 'moderate',
  },
  {
    part: 'Lungs',
    problem: 'Difficulty breathing and persistent cough',
    severity: 'high',
  },
];

export default function HealthInsightPage() {
  return <HealthInsight insights={mockInsights} />;
}
