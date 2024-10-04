import React from 'react';
import { DiagnosticChart } from './datachart';
import RecentTestsCard from './RecentTests';
import RecentInvoicesCard from './RecentInvoices';
import { useDashboardData } from '../../hooks/useDashboardData';

const Analytics: React.FC = () => {
  const { dashboardData, isLoading, error, setActiveSection } = useDashboardData();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const handleSeeAllClick = () => {
    setActiveSection('tests');
  };

  const handleSeeAllInvoicesClick = () => {
    setActiveSection('invoices');
  };

  return (
    <div className="space-y-6">
      <DiagnosticChart chartData={dashboardData.testTypeDistribution} />
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
