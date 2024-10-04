import React from 'react';
import { DiagnosticChart, ChartData } from './datachart';
import RecentTestsCard from './RecentTests';
import RecentInvoicesCard from './RecentInvoices';
import { useDashboardData } from '../../hooks/useDashboardData';

interface DashboardData {
  testTypeDistribution: ChartData[];
  // ... other properties ...
}

interface AnalyticsProps {
  dashboardData: DashboardData;
}

const Analytics: React.FC<AnalyticsProps> = ({ dashboardData }) => {
  return (
    <div className="space-y-6">
      {dashboardData.testTypeDistribution.length > 0 ? (
        <DiagnosticChart chartData={dashboardData.testTypeDistribution} />
      ) : (
        <p>No test type distribution data available.</p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <RecentTestsCard 
          tests={dashboardData.recentTests} 
          onSeeAllClick={handleSeeAllClick} 
        />
        <RecentInvoicesCard 
          invoices={dashboardData.invoices} 
          onSeeAllClick={handleSeeAllInvoicesClick} 
        />
      </div>
    </div>
  );
};

export default Analytics;
