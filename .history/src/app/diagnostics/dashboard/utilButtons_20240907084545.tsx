import React from 'react';
import { Button } from "@/components/ui/button";
import { Share, BarChart, FileText, Calendar, MessageCircle, CreditCard, Clipboard, ClipboardList } from "lucide-react";

interface TopButtonsProps {
  setActiveSection: (section: string | null) => void;
}

const TopButtons: React.FC<TopButtonsProps> = ({ setActiveSection }) => {
  const buttons = [
    { icon: Share, label: "Share", onClick: () => setActiveSection('Share') },
    { icon: Clipboard, label: "Tests", onClick: () => setActiveSection('Tests') },
    { icon: BarChart, label: "Analytics", onClick: () => setActiveSection('Analytics') },
    { icon: ClipboardList, label: "Reports", onClick: () => setActiveSection('Reports') },
    { icon: Calendar, label: "Appointments", onClick: () => setActiveSection('Appointments') },
    { icon: MessageCircle, label: "Messages", onClick: () => setActiveSection('Messages') },
    { icon: CreditCard, label: "Billing", onClick: () => setActiveSection('Billing') },
    { icon: FileText, label: "Invoices", onClick: () => setActiveSection('Invoices') },
  ];

  return (
    <div className="w-full bg-white shadow-md py-4 sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4 overflow-x-auto">
        <div className="flex justify-start gap-3">
          {buttons.map(({ icon: Icon, label, onClick }) => (
            <Button 
              key={label} 
              onClick={onClick} 
              variant="outline" 
              className="flex items-center justify-center px-4 py-2 h-auto text-sm whitespace-nowrap"
            >
              <Icon className="h-5 w-5 mr-2" />
              <span className="font-medium">{label}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopButtons;