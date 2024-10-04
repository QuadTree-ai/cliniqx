import React from 'react';
import { Button } from "@/components/ui/button";
import { Share, BarChart, FileText, Bell } from "lucide-react";

const TopButtons: React.FC = () => {
  const buttons = [
    { icon: Share, label: "Share", onClick: () => console.log("Share clicked") },
    { icon: BarChart, label: "Analytics", onClick: () => console.log("Analytics clicked") },
    { icon: FileText, label: "Reports", onClick: () => console.log("Reports clicked") },
    { icon: Bell, label: "Notifications", onClick: () => console.log("Notifications clicked") },
    { icon: FileText, label: "Invoices", onClick: () => console.log("Invoices clicked") },
  ];

  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex flex-wrap justify-center gap-4">
        {buttons.map(({ icon: Icon, label, onClick }) => (
          <Button key={label} onClick={onClick} variant="outline" size="lg" className="flex items-center">
            <Icon className="mr-2 h-5 w-5" />
            {label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default TopButtons;
