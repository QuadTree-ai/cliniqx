"use client";

import React, { useState, useCallback, Suspense, lazy } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Card, CardContent } from "@/components/ui/card";
import TopButtons from './navbar/utilButtons';
import { useDashboardData } from './hooks/useDashboardData';

const Analytics = lazy(() => import('./ButtonMenu/analytics/analytics'));
const Share = lazy(() => import('./ButtonMenu/share/share'));
const Tests = lazy(() => import('./ButtonMenu/Tests/tests'));

const Dashboard: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('analytics');
  const { dashboardData, isLoading, error } = useDashboardData();

  const renderActiveSection = useCallback(() => {
    switch (activeSection) {
      case 'analytics':
        return <Analytics recentTests={dashboardData.recentTests} invoices={dashboardData.invoices} activeSection={activeSection} setActiveSection={setActiveSection} />;
      case 'share':
        return <Share />;
      case 'tests':
        return <Tests tests={dashboardData.recentTests} />;
      default:
        return null;
    }
  }, [activeSection, dashboardData]);

  if (error) {
    return (
      <Card className="m-4">
        <CardContent className="p-4">
          <h2 className="text-xl font-bold text-red-600">Error</h2>
          <p className="mt-2">{error.message}</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopButtons setActiveSection={setActiveSection} initialActiveSection={activeSection} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Suspense fallback={<LoadingFallback />}>
                {isLoading ? <LoadingFallback /> : renderActiveSection()}
              </Suspense>
            </ErrorBoundary>
          </div>
        </main>
      </div>
    </div>
  );
};

const LoadingFallback = () => (
  <Card>
    <CardContent className="p-4">
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-4 py-1">
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-300 rounded"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

const ErrorFallback = ({ error }: { error: Error }) => (
  <Card className="m-4">
    <CardContent className="p-4">
      <h2 className="text-xl font-bold text-red-600">Something went wrong</h2>
      <p className="mt-2">{error.message}</p>
    </CardContent>
  </Card>
);

export default Dashboard;