import React from 'react';
import { Button } from "@/components/ui/button";
import { Share, BarChart, FileText, Bell, Calendar, MessageCircle, CreditCard, HelpCircle } from "lucide-react";

const TopButtons: React.FC = () => {
  const buttons = [
    { icon: Share, label: "Share", onClick: () => console.log("Share clicked") },
    { icon: BarChart, label: "Analytics", onClick: () => console.log("Analytics clicked") },
    { icon: FileText, label: "Reports", onClick: () => console.log("Reports clicked") },
    { icon: Bell, label: "Notifications", onClick: () => console.log("Notifications clicked") },
    { icon: FileText, label: "Invoices", onClick: () => console.log("Invoices clicked") },
    { icon: Calendar, label: "Appointments", onClick: () => console.log("Appointments clicked") },
    { icon: MessageCircle, label: "Messages", onClick: () => console.log("Messages clicked") },
    { icon: CreditCard, label: "Payments", onClick: () => console.log("Payments clicked") },
    { icon: HelpCircle, label: "Help", onClick: () => console.log("Help clicked") },
  ];

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-wrap justify-center gap-2">
        {buttons.map(({ icon: Icon, label, onClick }) => (
          <Button key={label} onClick={onClick} variant="outline" size="sm" className="flex items-center">
            <Icon className="mr-2 h-6 w-6" />
            {label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default TopButtons;