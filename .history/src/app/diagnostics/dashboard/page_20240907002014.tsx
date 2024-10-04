"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import Navbar from './navbar';
import TopButtons from './utilButtons';
import Analytics from './analytics';
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
import UploadReportCard from './UploadReportCard';

interface DashboardData {
  recentTests: TestData[];
  patientInfo: PatientInfo;
  testTypeDistribution: ChartData[];
  revenue: ChartData[];
  patientAgeDistribution: ChartData[];
  invoices: Invoice[];
  patientStats: PatientStats;
}

const Dashboard: React.FC = () => {
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

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar toggleSidebar={toggleSidebar} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="mb-6">
              <TopButtons setActiveSection={setActiveSection} />
            </div>
            <div className="grid grid-cols-1 gap-6">
              {activeSection === 'Analytics' ? (
                <Analytics 
                  recentTests={dashboardData.recentTests} 
                  invoices={dashboardData.invoices}
                  testTypeDistribution={dashboardData.testTypeDistribution}
                  revenue={dashboardData.revenue}
                  patientAgeDistribution={dashboardData.patientAgeDistribution}
                />
              ) : activeSection === 'Share' ? (
                <UploadReportCard />
              ) : null}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;