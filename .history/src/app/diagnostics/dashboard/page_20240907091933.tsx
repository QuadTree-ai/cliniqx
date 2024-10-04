"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import Analytics from './ButtonMenu/analytics';
import {
  getRecentTests,
  getPatientInfo,
  getTestTypeDistributionData,
  getRevenueData,
  getPatientAgeDistributionData,
  getInvoicesData,
  getPatientStats
} from './data/datafetch';
import { TestData, PatientInfo, ChartData, Invoice, PatientStats } from './types';
import UploadReportCard from './share';

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

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
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