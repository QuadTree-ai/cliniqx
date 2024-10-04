import React from 'react';
import { DiagnosticChart } from './datachart';
import RecentTestsCard from './RecentTests';
import RecentInvoicesCard from './RecentInvoices';
import { TestData, Invoice } from '@/types/dashboard';

interface AnalyticsProps {
  dashboardData: {
    testTypeDistribution: Array<{ name: string; tests: number; patients: number }>;
    recentTests: TestData[];
    invoices: Invoice[];
  };
}

const Analytics: React.FC<AnalyticsProps> = ({ dashboardData }) => {
  const { testTypeDistribution, recentTests, invoices } = dashboardData;

  const handleSeeAllClick = () => {
    // TODO: Implement the logic for seeing all tests
    console.log('See all tests clicked');
  };

  const handleSeeAllInvoicesClick = () => {
    // TODO: Implement the logic for seeing all invoices
    console.log('See all invoices clicked');
  };

  return (
    <div className="space-y-6">
      {testTypeDistribution.length > 0 ? (
        <DiagnosticChart chartData={testTypeDistribution} />
      ) : (
        <p className="text-center text-gray-500">No test type distribution data available.</p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <RecentTestsCard 
          tests={recentTests} 
          onSeeAllClick={handleSeeAllClick} 
        />
        <RecentInvoicesCard 
          invoices={invoices} 
          onSeeAllClick={handleSeeAllInvoicesClick} 
        />
      </div>
    </div>
  );
};

export default Analytics;
