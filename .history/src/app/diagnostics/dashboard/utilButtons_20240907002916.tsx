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
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-4">
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
        {buttons.map(({ icon: Icon, label, onClick }) => (
          <Button 
            key={label} 
            onClick={onClick} 
            variant="outline" 
            className="flex items-center justify-center px-7 py-4 h-auto"
          >
            <Icon className="h-6 w-6 mr-2" />
            <span className="text-sm font-medium">{label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default TopButtons;