import React from 'react';
import { Button } from "@/components/ui/button";
import { Share, BarChart2, TestTube, FileText, Calendar, MessageSquare, CreditCard } from 'lucide-react';

interface TopButtonsProps {
  setActiveSection: (section: string | null) => void;
}

const TopButtons: React.FC<TopButtonsProps> = ({ setActiveSection }) => {
  return (
    <div className="flex justify-center space-x-2 p-4">
      <Button onClick={() => setActiveSection('share')}><Share className="mr-2 h-4 w-4" />Share</Button>
      <Button onClick={() => setActiveSection('analytics')}><BarChart2 className="mr-2 h-4 w-4" />Analytics</Button>
      <Button onClick={() => setActiveSection('tests')}><TestTube className="mr-2 h-4 w-4" />Tests</Button>
      <Button onClick={() => setActiveSection('reports')}><FileText className="mr-2 h-4 w-4" />Reports</Button>
      <Button onClick={() => setActiveSection('appointments')}><Calendar className="mr-2 h-4 w-4" />Appointments</Button>
      <Button onClick={() => setActiveSection('patientMessages')}><MessageSquare className="mr-2 h-4 w-4" />Messages</Button>
      <Button onClick={() => setActiveSection('patientBilling')}><CreditCard className="mr-2 h-4 w-4" />Billing</Button>
      <Button onClick={() => setActiveSection('invoices')}><FileText className="mr-2 h-4 w-4" />Invoices</Button>
    </div>
  );
};

export default TopButtons;