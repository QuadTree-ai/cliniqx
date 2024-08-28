import React from 'react';

type SeverityLevel = 'low' | 'moderate' | 'high';

type Insight = {
  part: string;
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
        >
          <h3 className="text-xl font-semibold mt-4 capitalize">{part}</h3>
          <p className="text-gray-700 text-center">{problem}</p>
          <span className={`mt-2 px-3 py-1 rounded-full text-white ${getSeverityColor(severity)}`}>
            Severity: {severity.charAt(0).toUpperCase() + severity.slice(1)}
          </span>
        </div>
      ))}
    </div>
  );
};

// Helper function for severity colors
const getSeverityColor = (severity: SeverityLevel): string => {
  switch (severity) {
    case 'low':
      return 'bg-green-500';
    case 'moderate':
      return 'bg-yellow-500';
    case 'high':
      return 'bg-red-500';
    default:
      return 'bg-gray-500';
  }
};

export default HealthInsight;
