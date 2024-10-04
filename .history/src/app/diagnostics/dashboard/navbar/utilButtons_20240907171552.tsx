import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Share, BarChart2, TestTube, FileText, Calendar, MessageSquare, CreditCard } from 'lucide-react';

const buttonConfig = [
  { icon: BarChart2, label: 'Analytics', section: 'analytics' },
  { icon: Share, label: 'Share', section: 'share' },
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

const TopButtons: React.FC<TopButtonsProps> = ({ setActiveSection }) => {
  const [activeButton, setActiveButton] = useState('analytics');

  React.useEffect(() => {
    setActiveSection('analytics');
  }, [setActiveSection]);

  const handleButtonClick = (section: string) => {
    setActiveButton(section);
    setActiveSection(section);
  };

  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 p-3 sm:p-4 md:p-6 bg-white">
      {buttonConfig.map(({ icon: Icon, label, section }) => (
        <Button
          key={section}
          onClick={() => handleButtonClick(section)}
          variant={activeButton === section ? "default" : "ghost"}
          className={`flex-1 min-w-[100px] sm:min-w-[120px] md:min-w-[150px] h-14 sm:h-16 ${
            activeButton === section
              ? "bg-gray-400 text-gray-900 hover:text-white"
              : "bg-white text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          } transition-colors duration-200 ease-in-out rounded-lg border border-gray-200`}
        >
          <Icon className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
          <span className="text-xs sm:text-sm font-medium">{label}</span>
        </Button>
      ))}
    </div>
  );
};

export default TopButtons;