import React, { useState } from 'react';
import { DiagnosticChart } from './datachart';
import RecentTestsCard from './RecentTestsCard';
import InvoicesCard from './InvoicesCard';
import { TestData, Invoice } from '../../types';
import Tests from '../Tests/tests';
import TopButtons from '../navbar/utilButtons';

interface AnalyticsProps {
  recentTests: TestData[];
  invoices: Invoice[];
}

const Analytics: React.FC<AnalyticsProps> = ({ recentTests, invoices }) => {
  const [showAllTests, setShowAllTests] = useState(false);
  const [activeSection, setActiveSection] = useState('analytics');

  const handleSeeAllClick = () => {
    setShowAllTests(true);
    setActiveSection('tests');
  };

  if (showAllTests) {
    return (
      <>
        <TopButtons setActiveSection={setActiveSection} initialActiveSection={activeSection} />
        <Tests tests={recentTests.map(test => ({
          ...test,
          patientName: typeof test.patientName === 'string' ? test.patientName : '',
          patientPhone: typeof test.patientPhone === 'string' ? test.patientPhone : ''
        }))} />
      </>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4">
      <TopButtons setActiveSection={setActiveSection} initialActiveSection={activeSection} />
      <DiagnosticChart />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <RecentTestsCard tests={recentTests} onSeeAllClick={handleSeeAllClick} />
        <InvoicesCard invoices={invoices} />
      </div>
    </div>
  );
};

export default Analytics;
