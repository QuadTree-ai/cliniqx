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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <CardContent>
          <DiagnosticChart />
        </CardContent>
      <RecentTestsCard tests={recentTests} />
      <InvoicesCard invoices={invoices} />
    </div>
  );
};

export default Analytics;
