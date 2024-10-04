import React, { Suspense, lazy, useMemo } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { DashboardData } from '../types';
import { LoadingFallback, ErrorFallback } from './Fallbacks';

const Analytics = lazy(() => import('../ButtonMenu/analytics/analytics'));
const Share = lazy(() => import('../ButtonMenu/share/share'));
const Tests = lazy(() => import('../ButtonMenu/Tests/tests'));
const Invoices = lazy(() => import('../ButtonMenu/Invoices/Invoices'));

interface DashboardContentProps {
  dashboardData: DashboardData;
  isLoading: boolean;
  error: Error | null;
  activeSection: string;
  setActiveSection: (section: string) => void;
  children: React.ReactNode;
}

const DEFAULT_SECTION = 'default';

type ActiveSection = 'analytics' | 'share' | 'tests' | 'invoices' | typeof DEFAULT_SECTION;

const DashboardContent: React.FC<DashboardContentProps> = ({
  dashboardData,
  isLoading,
  error,
  activeSection,
  setActiveSection,
  children
}) => {
  const renderActiveSection = useMemo(() => {
    const section = activeSection as ActiveSection;
    switch (section) {
      case 'analytics':
        return (
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Analytics 
              recentTests={dashboardData.recentTests} 
              invoices={dashboardData.invoices}
              setActiveSection={setActiveSection}
            />
          </ErrorBoundary>
        );
      case 'share':
        return (
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Share />
          </ErrorBoundary>
        );
      case 'tests':
        return (
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Tests tests={dashboardData.recentTests} />
          </ErrorBoundary>
        );
      case 'invoices':
        return (
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Invoices invoices={dashboardData.invoices} />
          </ErrorBoundary>
        );
      default:
        return React.cloneElement(children as React.ReactElement, { dashboardData });
    }
  }, [activeSection, dashboardData, setActiveSection, children]);

  if (isLoading) return <LoadingFallback />;
  if (error) return <ErrorFallback error={error} />;

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<LoadingFallback />}>
        {renderActiveSection}
      </Suspense>
    </ErrorBoundary>
  );
};

export default DashboardContent;
