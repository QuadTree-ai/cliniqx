import React from 'react';
import { DiagnosticChart } from './datachart';
import RecentTestsCard from './RecentTestsCard';
import InvoicesCard from './InvoicesCard';
import { TestData, Invoice } from '../../types';

interface AnalyticsProps {
  recentTests: TestData[];
  invoices: Invoice[];
}

const Analytics: React.FC<AnalyticsProps> = ({ recentTests, invoices }) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <DiagnosticChart />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <RecentTestsCard tests={recentTests} />
        <InvoicesCard invoices={invoices} />
      </div>
    </div>
  );
};

export default Analytics;
