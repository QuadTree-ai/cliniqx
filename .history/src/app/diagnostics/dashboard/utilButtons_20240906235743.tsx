import React from 'react';
import { Button } from "@/components/ui/button";
import { Share, BarChart, FileText, Bell, Settings, Invoice } from "lucide-react";

const TopButtons: React.FC = () => {
  const buttons = [
    { icon: Share, label: "Share", onClick: () => console.log("Share clicked") },
    { icon: BarChart, label: "Analytics", onClick: () => console.log("Analytics clicked") },
    { icon: FileText, label: "Reports", onClick: () => console.log("Reports clicked") },
    { icon: Bell, label: "Notifications", onClick: () => console.log("Notifications clicked") },
    { icon: Invoice, label: "Invoices", onClick: () => console.log("Invoices clicked") },
  ];

  return (
    <div className="flex space-x-2">
      {buttons.map(({ icon: Icon, label, onClick }) => (
        <Button key={label} onClick={onClick} variant="outline" size="sm" className="flex items-center">
          <Icon className="mr-2 h-4 w-4" />
          {label}
        </Button>
      ))}
    </div>
  );
};

export default TopButtons;
