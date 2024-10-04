import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { DiagnosticChart } from './datachart';
import RecentTestsCard from './RecentTestsCard';
import InvoicesCard from '../Invoices/InvoicesCard';
import { TestData, Invoice } from '../../types';

interface AnalyticsProps {
  recentTests: TestData[];
  invoices: Invoice[];
}

const Analytics: React.FC<AnalyticsProps> = ({ recentTests, invoices }) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <Card className="col-span-full">
        <CardContent>
          <DiagnosticChart />
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <RecentTestsCard tests={recentTests} />
        <InvoicesCard invoices={invoices} />
      </div>
    </div>
  );
};

export default Analytics;
