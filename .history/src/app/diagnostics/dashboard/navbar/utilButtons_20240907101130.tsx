import React from 'react';
import { Button } from "@/components/ui/button";
import { Share, BarChart2, TestTube, FileText, Calendar, MessageSquare, CreditCard } from 'lucide-react';

interface TopButtonsProps {
  setActiveSection: (section: string | null) => void;
}

const TopButtons: React.FC<TopButtonsProps> = ({ setActiveSection }) => {
  return (
    <div className="flex justify-center space-x-4 p-6">
      <Button onClick={() => setActiveSection('share')} className="px-6 py-3"><Share className="mr-2 h-5 w-5" />Share</Button>
      <Button onClick={() => setActiveSection('analytics')} className="px-6 py-3"><BarChart2 className="mr-2 h-5 w-5" />Analytics</Button>
      <Button onClick={() => setActiveSection('tests')} className="px-6 py-3"><TestTube className="mr-2 h-5 w-5" />Tests</Button>
      <Button onClick={() => setActiveSection('reports')} className="px-6 py-3"><FileText className="mr-2 h-5 w-5" />Reports</Button>
      <Button onClick={() => setActiveSection('appointments')} className="px-6 py-3"><Calendar className="mr-2 h-5 w-5" />Appointments</Button>
      <Button onClick={() => setActiveSection('patientMessages')} className="px-6 py-3"><MessageSquare className="mr-2 h-5 w-5" />Messages</Button>
      <Button onClick={() => setActiveSection('patientBilling')} className="px-6 py-3"><CreditCard className="mr-2 h-5 w-5" />Billing</Button>
      <Button onClick={() => setActiveSection('invoices')} className="px-6 py-3"><FileText className="mr-2 h-5 w-5" />Invoices</Button>
    </div>
  );
};

export default TopButtons;