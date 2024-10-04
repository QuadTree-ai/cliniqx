"use client";

import React, { useCallback, Suspense, lazy, useMemo } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useDashboardData } from './hooks/useDashboardData';
import { LoadingFallback, ErrorFallback } from '@/components/Fallbacks';
import { ActiveSection, ComponentProps } from '@/types/dashboard';

const componentMap: Record<ActiveSection, React.LazyExoticComponent<React.ComponentType<ComponentProps>>> = {
  analytics: lazy(() => import('./ButtonMenu/analytics/analytics')),
  share: lazy(() => import('./ButtonMenu/share/share')),
  tests: lazy(() => import('./ButtonMenu/Tests/tests')),
  invoices: lazy(() => import('./ButtonMenu/Invoices/Invoices')),
};

const useComponentLoader = (activeSection: ActiveSection | null) => {
  return useMemo(() => {
    if (!activeSection) return null;
    return componentMap[activeSection];
  }, [activeSection]);
};

const DashboardContent: React.FC = () => {
  const { dashboardData, isLoading, error, activeSection, setActiveSection } = useDashboardData();
  const Component = useComponentLoader(activeSection);

  const getProps = useCallback((): ComponentProps => ({
    recentTests: dashboardData.recentTests,
    invoices: dashboardData.invoices,
    setActiveSection,
  }), [dashboardData.recentTests, dashboardData.invoices, setActiveSection]);

  if (isLoading) return <LoadingFallback />;
  if (error) return <ErrorFallback error={error} />;
  if (!Component) return <div>Unknown section</div>;

  return (
    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => window.location.reload()}>
          <Suspense fallback={<LoadingFallback />}>
            <Component {...getProps()} />
          </Suspense>
        </ErrorBoundary>
      </div>
    </main>
  );
};

export default DashboardContent;