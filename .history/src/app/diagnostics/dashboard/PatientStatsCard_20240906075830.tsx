import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PatientStats } from './types';

interface PatientStatsCardProps {
  stats: PatientStats;
}

const PatientStatsCard: React.FC<PatientStatsCardProps> = ({ stats }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Patient Statistics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-medium text-gray-500">Tests Conducted</p>
            <p className="text-2xl font-semibold">{stats.testsConducted}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Patients Seen</p>
            <p className="text-2xl font-semibold">{stats.patientsSeen}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PatientStatsCard;