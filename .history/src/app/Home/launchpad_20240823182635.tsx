import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from "@/components/ui/button";

const HealthLaunchpad = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Card className="w-5/6 h-1/2 max-w-none shadow-2xl flex flex-col justify-center items-center bg-gray-100 rounded-xl">
        <div className="text-center px-8">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-semibold mb-8">
            Your health is an investment, not an expense.
          </h3>
          <Button variant="default" color="blue" size="lg" className="px-10 py-4">Get started today</Button>
        </div>
      </Card>
    </div>
  );
};

export default HealthLaunchpad;
