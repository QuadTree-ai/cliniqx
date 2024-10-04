"use client";

import React, { ReactNode, useState, useEffect, useCallback } from 'react';
import { Toaster } from "@/components/ui/toaster";
import Navbar from "./navbar/navbar";
import TopButtons from "./navbar/utilButtons";
import {
  getRecentTests,
  getPatientInfo,
  getTestTypeDistributionData,
  getRevenueData,
  getPatientAgeDistributionData,
  getInvoicesData,
  getPatientStats
} from './data/datafetch';
import { DashboardData } from './types';
import Share from './ButtonMenu/share/share';
import Analytics from './ButtonMenu/analytics/analytics';
import Tests from './ButtonMenu/Tests/tests';
import { ErrorBoundary } from 'react-error-boundary';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [activeSection, setActiveSection] = useState<string>('analytics');
  const [dashboardData, setDashboardData] = useState<DashboardData>(() => ({
    recentTests: [],
    patientInfo: null,
    testTypeDistribution: [],
    revenue: [],
    patientAgeDistribution: [],
    invoices: [],
    patientStats: null
  }));
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const [
        recentTests,
        patientInfo,
        testTypeDistribution,
        revenue,
        patientAgeDistribution,
        invoices,
        patientStats
      ] = await Promise.all([
        getRecentTests(),
        getPatientInfo(),
        getTestTypeDistributionData(),
        getRevenueData(),
        getPatientAgeDistributionData(),
        getInvoicesData(),
        getPatientStats()
      ]);
      setDashboardData({
        recentTests,
        patientInfo,
        testTypeDistribution,
        revenue,
        patientAgeDistribution,
        invoices,
        patientStats
      });
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      setError(error instanceof Error ? error : new Error('An unknown error occurred'));
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const renderActiveSection = useCallback(() => {
    if (isLoading) {
      return <LoadingFallback />;
    }
    if (error) {
      return <ErrorFallback error={error} />;
    }
    switch (activeSection) {
      case 'share':
        return <Share />;
      case 'analytics':
        return <Analytics recentTests={dashboardData.recentTests} invoices={dashboardData.invoices} activeSection={''} setActiveSection={function (section: string): void {
          throw new Error('Function not implemented.');
        } } />;
      case 'tests':
        return <Tests tests={dashboardData.recentTests} />;
      default:
        return React.cloneElement(children as React.ReactElement, { dashboardData });
    }
  }, [activeSection, children, dashboardData, isLoading, error]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <div className="flex-1 flex flex-col">
        <TopButtons setActiveSection={setActiveSection} initialActiveSection={activeSection} />
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            {renderActiveSection()}
          </ErrorBoundary>
        </main>
      </div>
      <Toaster />
    </div>
  );
}

const LoadingFallback = () => (
  <div className="animate-pulse flex space-x-4">
    <div className="flex-1 space-y-4 py-1">
      <div className="h-4 bg-gray-300 rounded w-3/4"></div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-300 rounded"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
      </div>
    </div>
  </div>
);

const ErrorFallback = ({ error }: { error: Error }) => (
  <div className="text-red-500">
    <h2>Something went wrong:</h2>
    <p>{error.message}</p>
  </div>
);