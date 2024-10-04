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

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [dashboardData, setDashboardData] = useState<DashboardData>({
    recentTests: [],
    patientInfo: {} as DashboardData['patientInfo'],
    testTypeDistribution: [],
    revenue: [],
    patientAgeDistribution: [],
    invoices: [],
    patientStats: {} as DashboardData['patientStats']
  });

  const fetchData = useCallback(async () => {
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
      // Handle error state here
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const renderActiveSection = useCallback(() => {
    switch (activeSection) {
      case 'share':
        return <Share />;
      case 'analytics':
        return <Analytics recentTests={dashboardData.recentTests} invoices={dashboardData.invoices} />;
      default:
        return React.cloneElement(children as React.ReactElement, { dashboardData });
    }
  }, [activeSection, children, dashboardData]);

  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Navbar />
        <div className="flex-1 flex flex-col">
          <TopButtons setActiveSection={setActiveSection} />
          <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {renderActiveSection()}
          </main>
        </div>
        <Toaster />
      </div>
    </>
  );
}