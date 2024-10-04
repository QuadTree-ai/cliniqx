import React, { Suspense, lazy } from 'react';
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

const DashboardContent: React.FC<DashboardContentProps> = ({
  dashboardData,
  isLoading,
  error,
  activeSection,
  setActiveSection,
  children
}) => {
  if (isLoading) return <LoadingFallback />;
  if (error) return <ErrorFallback error={error} />;

  const renderActiveSection = () => {
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
        return <Invoices invoices={dashboardData.invoices} />;
      default:
        return React.cloneElement(children as React.ReactElement, { dashboardData });
    }
  };

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<LoadingFallback />}>
        {renderActiveSection()}
      </Suspense>
    </ErrorBoundary>
  );
};

export default DashboardContent;
