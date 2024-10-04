import React from 'react';
import { DiagnosticChart } from './datachart';
import RecentTestsCard from './RecentTests';
import RecentInvoicesCard from './RecentInvoices';
import { TestData, Invoice } from '../../types';

interface AnalyticsProps {
  recentTests?: TestData[];
  invoices?: Invoice[];
  setActiveSection: (section: string) => void;
}

const Analytics: React.FC<AnalyticsProps> = ({ recentTests = [], invoices = [], setActiveSection }) => {
  const handleSeeAllClick = () => {
    setActiveSection('tests');
  };

  const handleSeeAllInvoicesClick = () => {
    setActiveSection('invoices');
  };

  return (
    <div className="space-y-6">
      <DiagnosticChart />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <RecentTestsCard 
          tests={recentTests} 
          onSeeAllClick={handleSeeAllClick} 
        />
        {invoices && (
          <RecentInvoicesCard 
            invoices={invoices} 
            onSeeAllClick={handleSeeAllInvoicesClick} 
          />
        )}
      </div>
    </div>
  );
};

export default Analytics;
