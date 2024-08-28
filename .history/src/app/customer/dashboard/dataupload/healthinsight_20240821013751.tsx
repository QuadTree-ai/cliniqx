import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import HumanAnatomyIcons, { iconsMap } from '../icon/anatomyicons';

// Define the severity levels
type SeverityLevel = 'low' | 'moderate' | 'high';

// Define the structure of an insight
type Insight = {
  part: keyof typeof iconsMap; // Ensure part is correctly typed as a key of iconsMap
  problem: string;
  severity: SeverityLevel;
};

// Define props for the HealthInsight component
interface HealthInsightProps {
  insights: Insight[];
}

// The main HealthInsight component using Shadcn components
const HealthInsight: React.FC<HealthInsightProps> = ({ insights }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {insights.map(({ part, problem, severity }, index) => (
        <Card
          key={index}
          className={`border ${getSeverityColor(severity)} shadow-lg`}
        >
          <CardHeader className="flex flex-col items-center">
            <HumanAnatomyIcons icon={part} size={48} color={getSeverityIconColor(severity)} />
            <CardTitle className="text-xl font-semibold capitalize mt-4">
              {part}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-700">{problem}</p>
            <Badge
              variant="outline"
              className={`mt-4 ${getSeverityBgColor(severity)}`}
            >
              Severity: {capitalize(severity)}
            </Badge>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

// Helper function to get background color based on severity
const getSeverityBgColor = (severity: SeverityLevel): string => {
  const bgColors: Record<SeverityLevel, string> = {
    low: 'bg-green-100 text-green-700',
    moderate: 'bg-yellow-100 text-yellow-700',
    high: 'bg-red-100 text-red-700',
  };
  return bgColors[severity];
};

// Helper function to get icon color based on severity
const getSeverityIconColor = (severity: SeverityLevel): string => {
  const iconColors: Record<SeverityLevel, string> = {
    low: 'green',
    moderate: 'yellow',
    high: 'red',
  };
  return iconColors[severity];
};

// Helper function to get card border color based on severity
const getSeverityColor = (severity: SeverityLevel): string => {
  const borderColors: Record<SeverityLevel, string> = {
    low: 'border-green-500',
    moderate: 'border-yellow-500',
    high: 'border-red-500',
  };
  return borderColors[severity];
};

// Helper function to capitalize the first letter of a string
const capitalize = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1);

export default HealthInsight;
