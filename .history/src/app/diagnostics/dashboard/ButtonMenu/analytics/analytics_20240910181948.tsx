import React from 'react';
import { DiagnosticChart } from './datachart';
import RecentTestsCard from './RecentTests';
import RecentInvoicesCard from './RecentInvoices';
import { TestData, Invoice } from '../../types';
import Tests from '../Tests/tests';

interface AnalyticsProps {
  recentTests?: TestData[];
  invoices?: Invoice[];
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Analytics: React.FC<AnalyticsProps> = ({ recentTests = [], invoices = [], activeSection, setActiveSection }) => {
  const handleSeeAllClick = () => {
    setActiveSection('tests');
  };

  const handleSeeAllInvoicesClick = () => {
    setActiveSection('invoices');
  };

  if (activeSection === 'tests') {
    return <Tests tests={recentTests} />;
  }

  return (
    <div className="grid grid-cols-1 gap-4">
      <DiagnosticChart />
      <RecentTestsCard tests={recentTests} onSeeAllClick={handleSeeAllClick} />
      <RecentInvoicesCard invoices={invoices} onSeeAllClick={handleSeeAllInvoicesClick} />
    </div>
  );
};

export default Analytics;
