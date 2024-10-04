"use client";

import React, { useCallback, Suspense, lazy, useMemo } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useDashboardData } from './hooks/useDashboardData';
import { LoadingFallback, ErrorFallback } from '../../../components/Fallbacks';
import { TestData, Invoice } from '@/types/dashboard';

const componentMap = {
  analytics: lazy(() => import('./ButtonMenu/analytics/analytics')),
  share: lazy(() => import('./ButtonMenu/share/share')),
  tests: lazy(() => import('./ButtonMenu/Tests/tests')),
  invoices: lazy(() => import('./ButtonMenu/Invoices/Invoices')),
} as const;

type ActiveSection = keyof typeof componentMap;

type ComponentProps = {
  [K in ActiveSection]: {
    recentTests?: TestData[];
    invoices?: Invoice[];
    setActiveSection: (section: ActiveSection) => void;
  };
};

const useComponentLoader = (activeSection: ActiveSection | null) => {
  return useMemo(() => {
    if (!activeSection) return null;
    return componentMap[activeSection];
  }, [activeSection]);
};

const DashboardContent: React.FC = () => {
  const { dashboardData, isLoading, error, activeSection, setActiveSection } = useDashboardData();
  const Component = useComponentLoader(activeSection as ActiveSection | null);

  const getProps = useCallback((section: ActiveSection): ComponentProps[ActiveSection] => ({
    recentTests: dashboardData.recentTests,
    invoices: dashboardData.invoices,
    setActiveSection: (newSection: ActiveSection) => setActiveSection(newSection),
  }), [dashboardData.recentTests, dashboardData.invoices, setActiveSection]);

  const renderContent = () => {
    if (isLoading) return <LoadingFallback />;
    if (error) return <ErrorFallback error={error} />;
    if (!Component) return <div>Unknown section</div>;

    const props = activeSection ? getProps(activeSection) : {};
    return <Component {...props} />;
  };

  return (
    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => window.location.reload()}>
          <Suspense fallback={<LoadingFallback />}>
            {renderContent()}
          </Suspense>
        </ErrorBoundary>
      </div>
    </main>
  );
};

export default DashboardContent;