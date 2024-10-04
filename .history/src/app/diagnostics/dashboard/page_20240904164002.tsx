"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  getRecentTests,
  getPatientInfo,
  getTestsPerMonthData,
  getTestTypeDistributionData,
  getRevenueData,
  getPatientAgeDistributionData,
} from './datafetch';
import { DiagnosticChart } from './datachart';
import { Menu, Home, Users, FileText, Settings, LogOut } from 'lucide-react';
import { CHART_COLORS, CHART_OPTIONS, TABLE_HEADERS, SIDEBAR_ITEMS, PHONE_REGEX, CLINIQX_CARD_REGEX } from './constant';
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart";
import Sidebar from './Sidebar';
import ProfileButton from './ProfileButton';
import RecentTestsCard from './RecentTestsCard';
import PatientInfoCard from './PatientInfoCard';
import ShareReportCard from './ShareReportCard';
import PieChart from './PieChart';
import LineChart from './LineChart';
import BarChart from './BarChart';

const Dashboard: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />

      <div className="flex-1 overflow-x-hidden overflow-y-auto">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Diagnostics Center Dashboard</h1>
            <Button variant="ghost" onClick={toggleSidebar} className="lg:hidden"><Menu /></Button>
            <ProfileButton />
          </div>
        </header>

        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <RecentTestsCard />
            <PatientInfoCard />
            <ShareReportCard />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <DiagnosticChart />
            <Card>
              <CardHeader>
                <CardTitle>Test Type Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer>
                  <PieChart data={getTestTypeDistributionData()} />
                  <ChartLegend>
                    <ChartLegendContent />
                  </ChartLegend>
                </ChartContainer>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer>
                  <LineChart data={getRevenueData()} />
                  <ChartTooltip>
                    <ChartTooltipContent />
                  </ChartTooltip>
                </ChartContainer>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Patient Age Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer>
                  <BarChart data={getPatientAgeDistributionData()} />
                  <ChartTooltip>
                    <ChartTooltipContent />
                  </ChartTooltip>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;