import React from 'react';
import { Button } from "@/components/ui/button";
import { Share, BarChart2, TestTube, FileText, Calendar, MessageSquare, CreditCard } from 'lucide-react';

const buttonConfig = [
  { icon: Share, label: 'Share', section: 'share' },
  { icon: BarChart2, label: 'Analytics', section: 'analytics' },
  { icon: TestTube, label: 'Tests', section: 'tests' },
  { icon: FileText, label: 'Reports', section: 'reports' },
  { icon: Calendar, label: 'Appointments', section: 'appointments' },
  { icon: MessageSquare, label: 'Messages', section: 'patientMessages' },
  { icon: CreditCard, label: 'Billing', section: 'patientBilling' },
  { icon: FileText, label: 'Invoices', section: 'invoices' },
];

interface TopButtonsProps {
  setActiveSection: (section: string) => void;
}

const TopButtons: React.FC<TopButtonsProps> = ({ setActiveSection }) => (
  <div className="flex flex-wrap justify-center gap-4 p-6 bg-white">
    {buttonConfig.map(({ icon: Icon, label, section }) => (
      <Button
        key={section}
        onClick={() => setActiveSection(section)}
        variant="ghost"
        className="flex-1 min-w-[150px] h-10 bg-white text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200 ease-in-out rounded-lg border-gray-200"
      >
        <Icon className="mr-2 h-5 w-5" />
        <span className="font-medium">{label}</span>
      </Button>
    ))}
  </div>
);

export default TopButtons;