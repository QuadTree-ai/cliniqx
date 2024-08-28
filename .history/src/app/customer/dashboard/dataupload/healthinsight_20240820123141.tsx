import React from 'react';
import HumanAnatomyIcons from '../humanmodel/icon/anatomyicons';

type HealthInsightProps = {
  insights: Array<{
    part: keyof typeof HumanAnatomyIcons;
    problem: string;
    severity: 'low' | 'moderate' | 'high'; // Example severity levels
  }>;
};

const HealthInsight: React.FC<HealthInsightProps> = ({ insights }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {insights.map((insight, index) => (
        <div key={index} className="border p-4 rounded-lg shadow-lg">
          {/* Use the icon for the anatomy part */}
          <HumanAnatomyIcons icon={insight.part} size={48} color={getColorBySeverity(insight.severity)} />
          <h3 className="text-xl font-semibold mt-4">{insight.part}</h3>
          <p className="text-gray-700">{insight.problem}</p>
          <span className={`inline-block mt-2 px-3 py-1 rounded-full text-white ${getColorBySeverity(insight.severity, true)}`}>
            Severity: {insight.severity}
          </span>
        </div>
      ))}
    </div>
  );
};

// Helper function to get color based on severity
const getColorBySeverity = (severity: 'low' | 'moderate' | 'high', isBackground: boolean = false) => {
  switch (severity) {
    case 'low':
      return isBackground ? 'bg-green-500' : 'green';
    case 'moderate':
      return isBackground ? 'bg-yellow-500' : 'yellow';
    case 'high':
      return isBackground ? 'bg-red-500' : 'red';
    default:
      return isBackground ? 'bg-gray-500' : 'gray';
  }
};

export default HealthInsight;
