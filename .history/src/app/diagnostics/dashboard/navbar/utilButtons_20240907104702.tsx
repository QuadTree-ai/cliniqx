import React from 'react';
import { Button } from "@/components/ui/button";
import { Share, BarChart2, TestTube, FileText, Calendar, MessageSquare, CreditCard } from 'lucide-react';

interface TopButtonsProps {
  setActiveSection: (section: string | null) => void;
}

const TopButtons: React.FC<TopButtonsProps> = ({ setActiveSection }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-6">
      <Button onClick={() => setActiveSection('share')} variant="outline" className="flex-1 min-w-[150px] h-20"><Share className="mr-2 h-6 w-6" />Share</Button>
      <Button onClick={() => setActiveSection('analytics')} variant="outline" className="flex-1 min-w-[150px] h-20"><BarChart2 className="mr-2 h-6 w-6" />Analytics</Button>
      <Button onClick={() => setActiveSection('tests')} variant="outline" className="flex-1 min-w-[150px] h-20"><TestTube className="mr-2 h-6 w-6" />Tests</Button>
      <Button onClick={() => setActiveSection('reports')} variant="outline" className="flex-1 min-w-[150px] h-20"><FileText className="mr-2 h-6 w-6" />Reports</Button>
      <Button onClick={() => setActiveSection('appointments')} variant="outline" className="flex-1 min-w-[150px] h-20"><Calendar className="mr-2 h-6 w-6" />Appointments</Button>
      <Button onClick={() => setActiveSection('patientMessages')} variant="outline" className="flex-1 min-w-[150px] h-20"><MessageSquare className="mr-2 h-6 w-6" />Messages</Button>
      <Button onClick={() => setActiveSection('patientBilling')} variant="outline" className="flex-1 min-w-[150px] h-20"><CreditCard className="mr-2 h-6 w-6" />Billing</Button>
      <Button onClick={() => setActiveSection('invoices')} variant="outline" className="flex-1 min-w-[150px] h-20"><FileText className="mr-2 h-6 w-6" />Invoices</Button>
    </div>
  );
};

export default TopButtons;