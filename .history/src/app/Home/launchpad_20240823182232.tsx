import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from "@/components/ui/button";

const HealthLaunchpad = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center px-4">
      <Card className="w-full sm:w-4/5 lg:w-3/5 h-auto sm:h-3/4 lg:h-1/2 max-w-none shadow-2xl flex flex-col justify-center items-center bg-gray-100 rounded-xl p-6 sm:p-8">
        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 sm:mb-8">
            Your health is an investment, not an expense.
          </h3>
          <Button variant="default" size="lg" className="px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-4">
            Get started today
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default HealthLaunchpad;
