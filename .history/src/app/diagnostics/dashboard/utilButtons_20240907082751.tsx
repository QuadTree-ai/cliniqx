import React from 'react';
import { Button } from "@/components/ui/button";
import { Share, BarChart, FileText, Calendar, MessageCircle, CreditCard, Clipboard } from "lucide-react";

interface TopButtonsProps {
  setActiveSection: (section: string | null) => void;
}

const TopButtons: React.FC<TopButtonsProps> = ({ setActiveSection }) => {
  const buttons = [
    { icon: Share, label: "Share", onClick: () => setActiveSection('Share') },
    { icon: Clipboard, label: "Tests", onClick: () => setActiveSection('Tests') },
    { icon: BarChart, label: "Analytics", onClick: () => setActiveSection('Analytics') },
    { icon: FileText, label: "Reports", onClick: () => setActiveSection('Reports') },
    { icon: Calendar, label: "Appointments", onClick: () => setActiveSection('Appointments') },
    { icon: MessageCircle, label: "Messages", onClick: () => setActiveSection('Messages') },
    { icon: CreditCard, label: "Billing", onClick: () => setActiveSection('Billing') },
    { icon: FileText, label: "Invoices", onClick: () => setActiveSection('Invoices') },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-4">
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
        {buttons.map(({ icon: Icon, label, onClick }) => (
          <Button 
            key={label} 
            onClick={onClick} 
            variant="outline" 
            className="flex items-center justify-center px-6 py-3 h-auto"
          >
            <Icon className="h-5 w-5 mr-2" />
            <span className="text-md font-medium">{label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default TopButtons;