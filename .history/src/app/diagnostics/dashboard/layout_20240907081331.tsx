"use client";

import { Toaster } from "@/components/ui/toaster";
import Navbar from "./navbar";
import TopButtons from "./utilButtons";
import { ReactNode, useState } from 'react';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar toggleSidebar={toggleSidebar} />
      <TopButtons setActiveSection={setActiveSection} />
      <main className="flex-1 max-w-6xl mx-auto px-4 py-4">
        {children}
      </main>
      <Toaster />
    </div>
  );
}