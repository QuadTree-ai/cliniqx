import React, { useState } from 'react';
import { DiagnosticChart } from './datachart';
import RecentTestsCard from './RecentTestsCard';
import InvoicesCard from './InvoicesCard';
import { TestData, Invoice } from '../../types';
import Tests from '../Tests/tests';

interface AnalyticsProps {
  recentTests: TestData[];
  invoices: Invoice[];
}

const Analytics: React.FC<AnalyticsProps> = ({ recentTests, invoices }) => {
  const [showAllTests, setShowAllTests] = useState(false);

  const handleSeeAllClick = () => {
    setShowAllTests(true);
  };

  if (showAllTests) {
    return <Tests tests={recentTests} />;
  }

  return (
    <div className="grid grid-cols-1 gap-4">
      <DiagnosticChart />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <RecentTestsCard tests={recentTests} onSeeAllClick={handleSeeAllClick} />
        <InvoicesCard invoices={invoices} />
      </div>
    </div>
  );
};

export default Analytics;
