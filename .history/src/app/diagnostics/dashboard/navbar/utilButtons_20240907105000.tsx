import React from 'react';
import { Button } from "@/components/ui/button";
import { Share, BarChart2, TestTube, FileText, Calendar, MessageSquare, CreditCard } from 'lucide-react';

interface TopButtonsProps {
  setActiveSection: (section: string | null) => void;
}

const TopButtons: React.FC<TopButtonsProps> = ({ setActiveSection }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-6 bg-white">
      <Button onClick={() => setActiveSection('share')} variant="ghost" className="flex-1 min-w-[150px] h-20 bg-white text-black hover:bg-gray-100">
        <Share className="mr-2 h-6 w-6" />Share
      </Button>
      <Button onClick={() => setActiveSection('analytics')} variant="ghost" className="flex-1 min-w-[150px] h-20 bg-white text-black hover:bg-gray-100">
        <BarChart2 className="mr-2 h-6 w-6" />Analytics
      </Button>
      <Button onClick={() => setActiveSection('tests')} variant="ghost" className="flex-1 min-w-[150px] h-20 bg-white text-black hover:bg-gray-100">
        <TestTube className="mr-2 h-6 w-6" />Tests
      </Button>
      <Button onClick={() => setActiveSection('reports')} variant="ghost" className="flex-1 min-w-[150px] h-20 bg-white text-black hover:bg-gray-100">
        <FileText className="mr-2 h-6 w-6" />Reports
      </Button>
      <Button onClick={() => setActiveSection('appointments')} variant="ghost" className="flex-1 min-w-[150px] h-20 bg-white text-black hover:bg-gray-100">
        <Calendar className="mr-2 h-6 w-6" />Appointments
      </Button>
      <Button onClick={() => setActiveSection('patientMessages')} variant="ghost" className="flex-1 min-w-[150px] h-20 bg-white text-black hover:bg-gray-100">
        <MessageSquare className="mr-2 h-6 w-6" />Messages
      </Button>
      <Button onClick={() => setActiveSection('patientBilling')} variant="ghost" className="flex-1 min-w-[150px] h-20 bg-white text-black hover:bg-gray-100">
        <CreditCard className="mr-2 h-6 w-6" />Billing
      </Button>
      <Button onClick={() => setActiveSection('invoices')} variant="ghost" className="flex-1 min-w-[150px] h-20 bg-white text-black hover:bg-gray-100">
        <FileText className="mr-2 h-6 w-6" />Invoices
      </Button>
    </div>
  );
};

export default TopButtons;