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
    <div className="w-full max-w-6xl mx-auto px-4 py-6">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-3">
        {buttons.map(({ icon: Icon, label, onClick }) => (
          <Button 
            key={label} 
            onClick={onClick} 
            variant="outline" 
            size="sm"
            className="flex flex-col items-center justify-center h-20 w-full"
          >
            <Icon className="h-6 w-6 mb-1" />
            <span className="text-xs text-center">{label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default TopButtons;