"use client";

import React, { useCallback, Suspense, lazy, useMemo } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import TopButtons from './navbar/utilButtons';
import { useDashboardData } from './hooks/useDashboardData';
import { LoadingFallback, ErrorFallback } from './components/Fallbacks';

const Analytics = lazy(() => import('./ButtonMenu/analytics/analytics'));
const Share = lazy(() => import('./ButtonMenu/share/share'));
const Tests = lazy(() => import('./ButtonMenu/Tests/tests'));
const Invoices = lazy(() => import('./ButtonMenu/Invoices/Invoices'));

const Dashboard: React.FC = () => {
  const { dashboardData, isLoading, error, activeSection, setActiveSection } = useDashboardData();

  const renderActiveSection = useCallback(() => {
    switch (activeSection) {
      case 'analytics':
        return <Analytics recentTests={dashboardData.recentTests} invoices={dashboardData.invoices} activeSection={activeSection} setActiveSection={setActiveSection} />;
      case 'share':
        return <Share />;
      case 'tests':
        return <Tests tests={dashboardData.recentTests} />;
      case 'invoices':
        return <Invoices invoices={dashboardData.invoices} />;
      // ... (other cases)
      default:
        return null;
    }
  }, [activeSection, dashboardData, setActiveSection]);

  const content = useMemo(() => (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<LoadingFallback />}>
        {isLoading ? <LoadingFallback /> : renderActiveSection()}
      </Suspense>
    </ErrorBoundary>
  ), [isLoading, renderActiveSection]);

  if (error) {
    return <ErrorFallback error={error} />;
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopButtons setActiveSection={setActiveSection} initialActiveSection={activeSection ?? undefined} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {content}
          </div>
        </main>
      </div>
    </div>
  );
};

export default React.memo(Dashboard);