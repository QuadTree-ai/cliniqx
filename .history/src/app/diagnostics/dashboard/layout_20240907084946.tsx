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
import { TestData, PatientInfo, ChartData, Invoice, PatientStats } from './types';

interface DashboardLayoutProps {
  children: ReactNode;
}

interface DashboardData {
  recentTests: TestData[];
  patientInfo: PatientInfo;
  testTypeDistribution: ChartData[];
  revenue: ChartData[];
  patientAgeDistribution: ChartData[];
  invoices: Invoice[];
  patientStats: PatientStats;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [dashboardData, setDashboardData] = useState<DashboardData>({
    recentTests: [],
    patientInfo: {} as PatientInfo,
    testTypeDistribution: [],
    revenue: [],
    patientAgeDistribution: [],
    invoices: [],
    patientStats: {} as PatientStats
  });

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  useEffect(() => {
    const fetchData = async () => {
      const recentTests = getRecentTests();
      const patientInfo = getPatientInfo();
      const testTypeDistribution = getTestTypeDistributionData();
      const revenue = getRevenueData();
      const patientAgeDistribution = getPatientAgeDistributionData();
      const invoices = getInvoicesData();
      const patientStats = getPatientStats();

      setDashboardData({
        recentTests,
        patientInfo,
        testTypeDistribution,
        revenue,
        patientAgeDistribution,
        invoices,
        patientStats
      });
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar toggleSidebar={toggleSidebar} />
      <TopButtons setActiveSection={setActiveSection} />
      <main className="flex-1 max-w-6xl mx-auto px-4 py-4 mt-4">
        {React.cloneElement(children as React.ReactElement, { dashboardData, activeSection })}
      </main>
      <Toaster />
    </div>
  );
}