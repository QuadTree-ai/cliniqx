"use client";

import React, { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
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
import { NavigationMenu, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent } from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface DashboardData {
  recentTests: TestData[];
  patientInfo: PatientInfo;
  testTypeDistribution: ChartData[];
  revenue: ChartData[];
  patientAgeDistribution: ChartData[];
  invoices: Invoice[];
  patientStats: PatientStats;
}

const NavButton = ({ href, children, className }) => (
  <Link href={href} passHref>
    <Button className={`rounded-md py-2 px-4 transition-colors duration-200 ${className}`}>
      {children}
    </Button>
  </Link>
);

const DashboardNavItem = ({ title, content }) => (
  <NavigationMenuItem>
    <NavigationMenuTrigger className="rounded-md py-2 px-4 text-black bg-gray-200 hover:bg-gray-300 transition-colors duration-200">
      {title}
    </NavigationMenuTrigger>
    <NavigationMenuContent className="p-4 bg-white rounded shadow-lg mt-2">
      {content}
    </NavigationMenuContent>
  </NavigationMenuItem>
);

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
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white fixed w-full z-10 top-0 shadow-md">
        <div className="container mx-auto px-4 py-3">
          <NavigationMenu className="flex space-x-4">
            <DashboardNavItem 
              title="Analytics" 
              content={
                <NavButton 
                  href="#" 
                  className="w-full text-left text-black bg-gray-200 hover:bg-gray-300"
                  onClick={() => setActiveSection('Analytics')}
                >
                  View Analytics
                </NavButton>
              }
            />
            <DashboardNavItem 
              title="Share" 
              content={
                <NavButton 
                  href="#" 
                  className="w-full text-left text-black bg-gray-200 hover:bg-gray-300"
                  onClick={() => setActiveSection('Share')}
                >
                  Upload Report
                </NavButton>
              }
            />
          </NavigationMenu>
        </div>
      </nav>

      <main className="pt-24 flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
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
            ) : (
              <Card className="container mx-auto text-center p-6 transition-all duration-300 bg-white rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold text-gray-700 mb-2">Welcome to Your Dashboard</h2>
                <p className="text-sm text-gray-500 mb-4">
                  Please choose an option from the menu above to view analytics or share reports.
                </p>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;