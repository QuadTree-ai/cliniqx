import React from 'react';
import { Button } from "@/components/ui/button";

interface TopButtonsProps {
  setActiveSection: (section: string | null) => void;
}

const TopButtons: React.FC<TopButtonsProps> = ({ setActiveSection }) => {
  return (
    <div className="flex justify-end space-x-2 p-4">
      <Button onClick={() => setActiveSection('share')}>Share</Button>
      <Button onClick={() => setActiveSection('analytics')}>Analytics</Button>
      <Button onClick={() => setActiveSection('tests')}>Tests</Button>
      <Button onClick={() => setActiveSection('reports')}>Reports</Button>
      <Button onClick={() => setActiveSection('appointments')}>Appointments</Button>
      <Button onClick={() => setActiveSection('patientMessages')}>Patient Messages</Button>
      <Button onClick={() => setActiveSection('patientBilling')}>Patient Billing</Button>
      <Button onClick={() => setActiveSection('invoices')}>Invoices</Button>
    </div>
  );
};

export default TopButtons;