import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from "@/components/ui/button";

const HealthLaunchpad: React.FC = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center p-4">
      <Card className="w-full max-w-4xl shadow-2xl flex flex-col justify-center items-center bg-gray-100 rounded-xl p-8">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 text-center">
          Your health is an investment, not an expense.
        </h3>
        <Button variant="default" size="lg" className="px-8 py-3">
          Get started today
        </Button>
      </Card>
    </div>
  );
};

export default HealthLaunchpad;
