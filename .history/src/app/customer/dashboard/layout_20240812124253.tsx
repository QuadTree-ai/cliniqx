// src/app/customer/dashboard/layout.tsx
"use client";

import Navbar from "./navbar/page";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-400">
      <Navbar />
      <main className="flex-1">{children}</main>
    </div>
  );
}
