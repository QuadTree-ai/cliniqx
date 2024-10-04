import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { DiagnosticChart, DiagnosticChartProps } from './datachart';
import RecentTestsCard from './RecentTestsCard';
import InvoicesCard from './InvoicesCard';
import { TestData, Invoice } from './types';

interface AnalyticsProps {
  recentTests: TestData[];
  invoices: Invoice[];
}

const Analytics: React.FC<AnalyticsProps> = ({ recentTests, invoices }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card className="col-span-full">
        <CardContent>
          <DiagnosticChart data={patientAgeDistribution} title="Patient Age Distribution" />
        </CardContent>
      </Card>
      <RecentTestsCard tests={recentTests} />
      <InvoicesCard invoices={invoices} />
    </div>
  );
};

export default Analytics;
