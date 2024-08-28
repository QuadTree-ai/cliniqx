import React from 'react';
import HumanAnatomyIcons, { iconsMap } from '../humanmodel/icon/anatomyicons';

type SeverityLevel = 'low' | 'moderate' | 'high';

type HealthInsightProps = {
  insights: Array<{
    part: keyof typeof iconsMap; // Ensure part is correctly typed as keyof iconsMap
    problem: string;
    severity: SeverityLevel;
  }>;
};

const HealthInsight: React.FC<HealthInsightProps> = ({ insights }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {insights.map(({ part, problem, severity }, index) => (
        <div key={index} className="border p-4 rounded-lg shadow-lg flex flex-col items-center">
          <HumanAnatomyIcons icon={part} size={48} color={severityColor(severity)} />
          <h3 className="text-xl font-semibold mt-4">{part}</h3>
          <p className="text-gray-700 text-center">{problem}</p>
          <span className={`mt-2 px-3 py-1 rounded-full text-white ${severityBgColor(severity)}`}>
            Severity: {capitalize(severity)}
          </span>
        </div>
      ))}
    </div>
  );
};

// Helper function to determine color for severity level (used for the icon color)
const severityColor = (severity: SeverityLevel): string => {
  const colors = {
    low: 'green',
    moderate: 'yellow',
    high: 'red',
  };
  return colors[severity] || 'gray';
};

// Helper function to determine background color for severity level (used for the badge)
const severityBgColor = (severity: SeverityLevel): string => {
  const bgColors = {
    low: 'bg-green-500',
    moderate: 'bg-yellow-500',
    high: 'bg-red-500',
  };
  return bgColors[severity] || 'bg-gray-500';
};

// Helper function to capitalize the first letter of a string
const capitalize = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1);

const mockInsights = [
  {
    part: 'Brain' as keyof typeof iconsMap,
    problem: 'Severe headache and dizziness',
    severity: 'high' as SeverityLevel,
  },
  {
    part: 'Heart' as keyof typeof iconsMap,
    problem: 'Chest pain and shortness of breath',
    severity: 'moderate' as SeverityLevel,
  },
  {
    part: 'Lungs' as keyof typeof iconsMap,
    problem: 'Difficulty breathing and persistent cough',
    severity: 'high' as SeverityLevel,
  },
];

export default function HealthInsightPage() {
  return <HealthInsight insights={mockInsights} />;
}
