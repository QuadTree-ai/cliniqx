"use client";

import React, { useCallback, Suspense, lazy, useMemo } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useDashboardData } from './hooks/useDashboardData';
import { LoadingFallback, ErrorFallback } from './components/Fallbacks';

const Analytics = lazy(() => import('./ButtonMenu/analytics/analytics'));
const Share = lazy(() => import('./ButtonMenu/share/share'));
const Tests = lazy(() => import('./ButtonMenu/Tests/tests'));
const Invoices = lazy(() => import('./ButtonMenu/Invoices/Invoices'));

const Dashboard: React.FC = () => {
  const { dashboardData, isLoading, error, activeSection, setActiveSection } = useDashboardData();

  const renderActiveSection = useCallback(() => {
    if (isLoading) return <LoadingFallback />;
    if (error) return <ErrorFallback error={error} />;

    switch (activeSection) {
      case 'analytics':
        return (
          <Analytics 
            recentTests={dashboardData.recentTests} 
            invoices={dashboardData.invoices} 
            setActiveSection={setActiveSection} 
          />
        );
      case 'share':
        return <Share />;
      case 'tests':
        return <Tests tests={dashboardData.recentTests} />;
      case 'invoices':
        return <Invoices invoices={dashboardData.invoices}/>;
      default:
        return <div>Unknown section: {activeSection}</div>;
    }
  }, [activeSection, dashboardData, setActiveSection, isLoading, error]);

  const dashboardContent = useMemo(() => (
    <ErrorBoundary 
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.reload()}
    >
      <Suspense fallback={<LoadingFallback />}>
        {renderActiveSection()}
      </Suspense>
    </ErrorBoundary>
  ), [renderActiveSection]);

  return (
    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {dashboardContent}
      </div>
    </main>
  );
};

export default Dashboard;