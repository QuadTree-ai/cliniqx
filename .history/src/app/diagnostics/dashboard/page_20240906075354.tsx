"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import RecentTestsCard from './RecentTestsCard';
import ShareReportCard from './ShareReportCard';
import { DiagnosticChart } from './datachart';
import ProfileButton from './profilebutton';
import {
  getRecentTests,
  getPatientInfo,
  getTestTypeDistributionData,
  getRevenueData,
  getPatientAgeDistributionData
} from './datafetch';
import { TestData, PatientInfo, ChartData } from './types'; // Add this import

// Define the interface for your dashboard data
interface DashboardData {
  recentTests: TestData[];
  patientInfo: PatientInfo;
  testTypeDistribution: ChartData[];
  revenue: ChartData[];
  patientAgeDistribution: ChartData[];
}

const Dashboard: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [dashboardData, setDashboardData] = useState<DashboardData>({
    recentTests: [],
    patientInfo: {} as PatientInfo,
    testTypeDistribution: [],
    revenue: [],
    patientAgeDistribution: []
  });

  useEffect(() => {
    const fetchData = async () => {
      const recentTests = getRecentTests();
      const patientInfo = getPatientInfo();
      const testTypeDistribution = getTestTypeDistributionData();
      const revenue = getRevenueData();
      const patientAgeDistribution = getPatientAgeDistributionData();

      setDashboardData({
        recentTests,
        patientInfo,
        testTypeDistribution,
        revenue,
        patientAgeDistribution
      });
    };

    fetchData();
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm z-10">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <Button variant="ghost" size="icon" onClick={toggleSidebar}>
              <Menu className="h-6 w-6" />
            </Button>
            <h1 className="text-2xl font-semibold text-gray-900">Diagnostic Dashboard</h1>
            <ProfileButton />
          </div>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="col-span-full">
                <CardHeader>
                </CardHeader>
                <CardContent>
                  <DiagnosticChart />
                </CardContent>
              </Card>
              <RecentTestsCard />
              <ShareReportCard />
              {/* Add more cards for other dashboard components */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
