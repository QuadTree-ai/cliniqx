"use client";

import React, { ReactNode } from 'react';
import { Toaster } from "@/components/ui/toaster";
import Navbar from "./navbar/navbar";
import TopButtons from "./navbar/utilButtons";
import { useDashboardData } from './hooks/useDashboardData';
import DashboardContent from './components/DashboardContent';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const { dashboardData, isLoading, error, activeSection, setActiveSection } = useDashboardData();

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <div className="flex-1 flex flex-col">
        <TopButtons setActiveSection={setActiveSection} initialActiveSection={activeSection} />
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <DashboardContent
            dashboardData={dashboardData}
            isLoading={isLoading}
            error={error}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          >
            {children}
          </DashboardContent>
        </main>
      </div>
      <Toaster />
    </div>
  );
}