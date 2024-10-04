"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Menu } from 'lucide-react';
import { getRecentTests, getPatientInfo, getTestTypeDistributionData, 
  getRevenueData,
  getPatientAgeDistributionData,
} from './datafetch';
import { DiagnosticChart } from './datachart';
import Sidebar from './Sidebar';
import ProfileButton from './profilebutton';
import RecentTestsCard from './RecentTestsCard';
import PatientInfoCard from './PatientInfoCard';
import ShareReportCard from './ShareReportCard';

const Dashboard: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [dashboardData, setDashboardData] = useState<{
    recentTests: any[];
    patientInfo: any;
    testTypeDistribution: any[];
    revenue: any[];
    patientAgeDistribution: any[];
  }>({
    recentTests: [],
    patientInfo: {},
    testTypeDistribution: [],
    revenue: [],
    patientAgeDistribution: []
  });

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [recentTests, patientInfo, testTypeDistribution, revenue, patientAgeDistribution] = await Promise.all([
          getRecentTests(),
          getPatientInfo(),
          getTestTypeDistributionData(),
          getRevenueData(),
          getPatientAgeDistributionData()
        ]);

        setDashboardData({
          recentTests,
          patientInfo,
          testTypeDistribution,
          revenue,
          patientAgeDistribution
        });
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
        // Handle error state here
      }
    };

    fetchDashboardData();
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />

      <div className="flex-1 overflow-x-hidden overflow-y-auto">
        <header className="bg-white shadow-sm sticky top-0 z-10">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Diagnostics Center Dashboard</h1>
            <Button variant="ghost" onClick={toggleSidebar} className="lg:hidden"><Menu /></Button>
            <ProfileButton />
          </div>
        </header>

        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <RecentTestsCard recentTests={dashboardData.recentTests} />
            <PatientInfoCard patientInfo={dashboardData.patientInfo} />
            <ShareReportCard />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <DiagnosticChart />
            <Card>
              <CardHeader>
                <CardTitle>Test Type Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <PieChart data={dashboardData.testTypeDistribution} />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <LineChart data={dashboardData.revenue} />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Patient Age Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <BarChart data={dashboardData.patientAgeDistribution} />
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;