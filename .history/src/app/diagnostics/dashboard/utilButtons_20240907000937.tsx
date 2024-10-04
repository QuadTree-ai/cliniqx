import React from 'react';
import { Button } from "@/components/ui/button";
import { Share, BarChart, FileText, Bell, Calendar, MessageCircle, CreditCard, HelpCircle } from "lucide-react";

interface TopButtonsProps {
  setActiveSection: (section: string | null) => void;
}

const TopButtons: React.FC<TopButtonsProps> = ({ setActiveSection }) => {
  const buttons = [
    { icon: Share, label: "Share", onClick: () => setActiveSection('Share') },
    { icon: BarChart, label: "Analytics", onClick: () => setActiveSection('Analytics') },
    { icon: FileText, label: "Reports", onClick: () => setActiveSection('Reports') },
    { icon: Bell, label: "Notifications", onClick: () => setActiveSection('Notifications') },
    { icon: FileText, label: "Invoices", onClick: () => setActiveSection('Invoices') },
    { icon: Calendar, label: "Appointments", onClick: () => setActiveSection('Appointments') },
    { icon: MessageCircle, label: "Messages", onClick: () => setActiveSection('Messages') },
    { icon: CreditCard, label: "Payments", onClick: () => setActiveSection('Payments') },
    { icon: HelpCircle, label: "Help", onClick: () => setActiveSection('Help') },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6">
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
        {buttons.map(({ icon: Icon, label, onClick }) => (
          <Button 
            key={label} 
            onClick={onClick} 
            variant="outline" 
            size="default"
            className="flex items-center justify-center min-w-[120px] sm:min-w-[140px]"
          >
            <Icon className="mr-2 h-5 w-5" />
            <span className="hidden sm:inline">{label}</span>
            <span className="sm:hidden">{label.slice(0, 3)}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default TopButtons;