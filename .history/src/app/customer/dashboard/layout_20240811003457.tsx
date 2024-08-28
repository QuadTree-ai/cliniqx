// src/app/customer/dashboard/layout.tsx
"use client";

import Navbar from "./navbar/page";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-black">
      <Navbar />
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
