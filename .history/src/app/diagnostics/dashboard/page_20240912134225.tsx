"use client";

import React, { useCallback, Suspense, lazy, useMemo } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useDashboardData } from './hooks/useDashboardData';
import { LoadingFallback, ErrorFallback } from './components/Fallbacks';

const componentMap = {
  analytics: lazy(() => import('./ButtonMenu/analytics/analytics')),
  share: lazy(() => import('./ButtonMenu/share/share')),
  tests: lazy(() => import('./ButtonMenu/Tests/tests')),
  invoices: lazy(() => import('./ButtonMenu/Invoices/Invoices')),
};

type ActiveSection = keyof typeof componentMap;

const Dashboard: React.FC = () => {
  const { dashboardData, isLoading, error, activeSection, setActiveSection } = useDashboardData();

  const getProps = useCallback((section: ActiveSection) => {
    switch (section) {
      case 'analytics':
        return {
          recentTests: dashboardData.recentTests,
          invoices: dashboardData.invoices,
          setActiveSection: (section: string) => setActiveSection(section)
        };
      case 'tests':
        return { tests: dashboardData.recentTests };
      case 'invoices':
        return { invoices: dashboardData.invoices };
      case 'share':
        return { setActiveSection };
      default:
        return {};
    }
  }, [dashboardData.recentTests, dashboardData.invoices, setActiveSection]);

  const renderActiveSection = useMemo(() => {
    if (isLoading) return <LoadingFallback />;
    if (error) return <ErrorFallback error={error} />;

    const Component = componentMap[activeSection as ActiveSection];
    if (!Component) return <div>Unknown section: {activeSection}</div>;

    const props = getProps(activeSection as ActiveSection);

    return <Component {...props} />;
  }, [isLoading, error, activeSection, getProps]);

  return (
    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => window.location.reload()}>
          <Suspense fallback={<LoadingFallback />}>
            {renderActiveSection}
          </Suspense>
        </ErrorBoundary>
      </div>
    </main>
  );
};

export default Dashboard;