import React from 'react';

type Insight = {
  part: string;
  problem: string;
  severity: 'low' | 'moderate' | 'high';
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
          <h3 className="text-xl font-semibold mt-4 capitalize">{part}</h3>
          <p className="text-gray-700 text-center">{problem}</p>
          <span className={`mt-2 px-3 py-1 rounded-full text-white ${getSeverityBgColor(severity)}`}>
            Severity: {severity}
          </span>
        </div>
      ))}
    </div>
  );
};

const getSeverityBgColor = (severity: 'low' | 'moderate' | 'high'): string => {
  const bgColors: Record<'low' | 'moderate' | 'high', string> = {
    low: 'bg-green-500',
    moderate: 'bg-yellow-500',
    high: 'bg-red-500',
  };
  return bgColors[severity];
};

export default HealthInsight;
