"use client";

import React, { useState, useEffect, Suspense, lazy } from 'react';
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

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'analytics':
        return <Analytics recentTests={dashboardData.recentTests} invoices={dashboardData.invoices} />;
      case 'share':
        return <Share />;
      case 'tests':
        return <Tests tests={dashboardData.recentTests as import('./ButtonMenu/Tests/types').TestData[]} />;
      default:
        return null;
    }
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopButtons setActiveSection={setActiveSection} initialActiveSection={activeSection} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <ErrorBoundary fallback={<div>Something went wrong</div>}>
              <Suspense fallback={<div>Loading...</div>}>
                {isLoading ? (
                  <Card>
                    <CardContent>Loading dashboard data...</CardContent>
                  </Card>
                ) : (
                  renderActiveSection()
                )}
              </Suspense>
            </ErrorBoundary>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;