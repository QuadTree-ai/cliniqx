import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Share, BarChart, FileText, Bell, Calendar, MessageCircle, CreditCard, HelpCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import UploadReportCard from './UploadReportCard';

const TopButtons: React.FC = () => {
  const [isShareOpen, setIsShareOpen] = useState(false);

  const buttons = [
    { icon: Share, label: "Share", onClick: () => setIsShareOpen(true) },
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
    <div className="w-full max-w-4xl mx-auto px-4 py-6">
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
        {buttons.map(({ icon: Icon, label, onClick }) => (
          <Dialog key={label} open={label === "Share" ? isShareOpen : undefined} onOpenChange={label === "Share" ? setIsShareOpen : undefined}>
            <DialogTrigger asChild>
              <Button 
                onClick={onClick} 
                variant="outline" 
                size="default"
                className="flex items-center justify-center min-w-[120px] sm:min-w-[140px]"
              >
                <Icon className="mr-2 h-5 w-5" />
                <span className="hidden sm:inline">{label}</span>
                <span className="sm:hidden">{label.slice(0, 3)}</span>
              </Button>
            </DialogTrigger>
            {label === "Share" && (
              <DialogContent className="sm:max-w-[800px]">
                <UploadReportCard />
              </DialogContent>
            )}
          </Dialog>
        ))}
      </div>
    </div>
  );
};

export default TopButtons;