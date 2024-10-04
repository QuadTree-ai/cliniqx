import React from 'react';
import { Button } from "@/components/ui/button";
import { Share, BarChart, FileText, Calendar, MessageCircle, CreditCard } from "lucide-react";

interface TopButtonsProps {
  setActiveSection: (section: string | null) => void;
}

const TopButtons: React.FC<TopButtonsProps> = ({ setActiveSection }) => {
  const buttons = [
    { icon: Share, label: "Share", onClick: () => setActiveSection('Share') },
    { icon: BarChart, label: "Analytics", onClick: () => setActiveSection('Analytics') },
    { icon: FileText, label: "Reports", onClick: () => setActiveSection('Reports') },
    { icon: FileText, label: "Invoices", onClick: () => setActiveSection('Invoices') },
    { icon: Calendar, label: "Appointments", onClick: () => setActiveSection('Appointments') },
    { icon: MessageCircle, label: "Messages", onClick: () => setActiveSection('Messages') },
    { icon: CreditCard, label: "Payments", onClick: () => setActiveSection('Payments') },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {buttons.map(({ icon: Icon, label, onClick }) => (
          <Button 
            key={label} 
            onClick={onClick} 
            variant="outline" 
            size="sm"
            className="flex items-center justify-start h-12 w-full"
          >
            <Icon className="h-5 w-5 mr-2" />
            <span className="text-sm">{label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default TopButtons;