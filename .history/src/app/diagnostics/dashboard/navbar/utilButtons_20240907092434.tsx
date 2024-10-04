import React from 'react';
import { Button } from "@/components/ui/button";
import { Share, BarChart, FileText, Calendar, MessageCircle, CreditCard, Clipboard, ClipboardList } from "lucide-react";
import dynamic from 'next/dynamic';

interface TopButtonsProps {
  setActiveSection: (section: string | null | React.ReactElement) => void;
}

const TopButtons: React.FC<TopButtonsProps> = ({ setActiveSection }) => {
  const buttons = [
    { icon: Share, label: "Share", component: 'share' },
    { icon: Clipboard, label: "Tests", component: 'tests' },
    { icon: BarChart, label: "Analytics", component: 'analytics/analytics' },
    { icon: ClipboardList, label: "Reports", component: 'reports' },
    { icon: Calendar, label: "Appointments", component: 'appointments' },
    { icon: MessageCircle, label: "Patient Messages", component: 'patientMessages' },
    { icon: CreditCard, label: "Patient Billing", component: 'patientBilling' },
    { icon: FileText, label: "Invoices", component: 'invoices' },
  ];

  const handleButtonClick = (component: string) => {
    const DynamicComponent = dynamic(() => import(`@/app/diagnostics/dashboard/ButtonMenu/${component}`));
    setActiveSection(<DynamicComponent />);
  };

  return (
    <div className="w-full bg-white shadow-md py-4 sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {buttons.map(({ icon: Icon, label, component }) => (
            <Button 
              key={label} 
              onClick={() => handleButtonClick(component)} 
              variant="outline" 
              className="flex items-center justify-center px-2 sm:px-3 py-1 sm:py-2 h-auto text-xs sm:text-sm whitespace-nowrap"
            >
              <Icon className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
              <span className="font-medium">{label}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopButtons;