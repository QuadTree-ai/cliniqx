"use client";

import React, { useCallback, Suspense, lazy, useMemo } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useDashboardData } from './hooks/useDashboardData';
import { LoadingFallback, ErrorFallback } from './components/Fallbacks';
import { TestData, Invoice } from '@/types/dashboard';

const componentMap = {
  analytics: lazy(() => import('./ButtonMenu/analytics/analytics')),
  share: lazy(() => import('./ButtonMenu/share/share')),
  tests: lazy(() => import('./ButtonMenu/Tests/tests')),
  invoices: lazy(() => import('./ButtonMenu/Invoices/Invoices')),
} as const;

type ActiveSection = keyof typeof componentMap;

type ComponentProps = {
  analytics: { recentTests: TestData[]; invoices: Invoice[]; setActiveSection: (section: ActiveSection) => void };
  tests: { tests: TestData[] };
  invoices: { invoices: Invoice[] };
  share: { setActiveSection: (section: ActiveSection) => void };
};

const DashboardContent: React.FC = () => {
  const { dashboardData, isLoading, error, activeSection, setActiveSection } = useDashboardData();

  const getProps = useCallback((section: ActiveSection): ComponentProps[ActiveSection] => {
    const props: ComponentProps = {
      analytics: {
        recentTests: dashboardData.recentTests,
        invoices: dashboardData.invoices,
        setActiveSection: (section: string) => setActiveSection(section as ActiveSection)
      },
      tests: { tests: dashboardData.recentTests },
      invoices: { invoices: dashboardData.invoices },
      share: { setActiveSection }
    };

    return props[section];
  }, [dashboardData.recentTests, dashboardData.invoices, setActiveSection]);

  const renderActiveSection = useMemo(() => {
    if (isLoading) return <LoadingFallback />;
    if (error) return <ErrorFallback error={error} />;

    const Component = componentMap[activeSection];
    if (!Component) return <div>Unknown section: {activeSection}</div>;

    const props = getProps(activeSection);

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

export default DashboardContent;