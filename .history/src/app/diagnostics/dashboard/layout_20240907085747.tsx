"use client";

import React, { ReactNode, useState, useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import Navbar from "./navbar";
import TopButtons from "./utilButtons";
import {
  getRecentTests,
  getPatientInfo,
  getTestTypeDistributionData,
  getRevenueData,
  getPatientAgeDistributionData,
  getInvoicesData,
  getPatientStats
} from './datafetch';
import { DashboardData } from './types';

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

  useEffect(() => {
    const fetchData = async () => {
      setDashboardData({
        recentTests: getRecentTests(),
        patientInfo: getPatientInfo(),
        testTypeDistribution: getTestTypeDistributionData(),
        revenue: getRevenueData(),
        patientAgeDistribution: getPatientAgeDistributionData(),
        invoices: getInvoicesData(),
        patientStats: getPatientStats()
      });
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <TopButtons setActiveSection={setActiveSection} />
      <main className="flex-1 max-w-6xl mx-auto px-4 py-8">
        {React.cloneElement(children as React.ReactElement, { dashboardData, activeSection })}
      </main>
      <Toaster />
    </div>
  );
}