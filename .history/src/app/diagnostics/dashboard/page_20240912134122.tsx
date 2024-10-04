"use client";

import React, { useCallback, Suspense, lazy } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useDashboardData } from './hooks/useDashboardData';
import { LoadingFallback, ErrorFallback } from './components/Fallbacks';

const componentMap = {
  analytics: lazy(() => import('./ButtonMenu/analytics/analytics')),
  share: lazy(() => import('./ButtonMenu/share/share')),
  tests: lazy(() => import('./ButtonMenu/Tests/tests')),
  invoices: lazy(() => import('./ButtonMenu/Invoices/Invoices')),
};

const Dashboard: React.FC = () => {
  const { dashboardData, isLoading, error, activeSection, setActiveSection } = useDashboardData();

  const renderActiveSection = useCallback(() => {
    if (isLoading) return <LoadingFallback />;
    if (error) return <ErrorFallback error={error} />;

    const Component = componentMap[activeSection as keyof typeof componentMap];
    if (!Component) return <div>Unknown section: {activeSection}</div>;

    const props = {
      ...(activeSection === 'analytics' && { 
        recentTests: dashboardData.recentTests, 
        invoices: dashboardData.invoices, 
        setActiveSection: (section: string) => setActiveSection(section) 
      }),
      ...(activeSection === 'tests' && { tests: dashboardData.recentTests }),
      ...(activeSection === 'invoices' && { invoices: dashboardData.invoices }),
      ...(activeSection === 'share' && { setActiveSection }),
    };

    return <Component {...props} />;
  }, [isLoading, error, activeSection, dashboardData.recentTests, dashboardData.invoices, setActiveSection]);

  return (
    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => window.location.reload()}>
          <Suspense fallback={<LoadingFallback />}>
            {renderActiveSection()}
          </Suspense>
        </ErrorBoundary>
      </div>
    </main>
  );
};

export default Dashboard;