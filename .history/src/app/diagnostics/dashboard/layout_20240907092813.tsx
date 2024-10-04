"use client";

import React, { ReactNode, useState, useEffect } from 'react';
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

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [activeSection, setActiveSection] = useState<React.ReactElement | null>(null);
  const [dashboardData, setDashboardData] = useState<DashboardData>({
    recentTests: [],
    patientInfo: {} as DashboardData['patientInfo'],
    testTypeDistribution: [],
    revenue: [],
    patientAgeDistribution: [],
    invoices: [],
    patientStats: {} as DashboardData['patientStats']
  });

  useEffect(() => {
    const fetchData = async () => {
      setDashboardData({
        recentTests: await getRecentTests(),
        patientInfo: await getPatientInfo(),
        testTypeDistribution: await getTestTypeDistributionData(),
        revenue: await getRevenueData(),
        patientAgeDistribution: await getPatientAgeDistributionData(),
        invoices: await getInvoicesData(),
        patientStats: await getPatientStats()
      });
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <div className="flex-1 flex flex-col">
        <TopButtons setActiveSection={setActiveSection} />
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {React.cloneElement(children as React.ReactElement, { dashboardData, activeSection })}
        </main>
      </div>
      <Toaster />
    </div>
  );
}