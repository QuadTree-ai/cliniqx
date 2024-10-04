import { Toaster } from "@/components/ui/toaster"
import Navbar from "./navbar"
import TopButtons from "./utilButtons"
import { ReactNode } from 'react';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <TopButtons setActiveSection={() => {}} />
      <main className="flex-1">
        {children}
      </main>
      <Toaster />
    </div>
  )
}