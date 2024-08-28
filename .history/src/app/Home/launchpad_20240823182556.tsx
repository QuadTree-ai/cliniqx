import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from "@/components/ui/button";

const HealthLaunchpad = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Card className="w-11/12 sm:w-4/5 lg:w-3/5 xl:w-2/5 h-auto p-10 shadow-2xl flex flex-col justify-center items-center bg-gray-100 rounded-xl">
        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-3xl font-semibold mb-8">
            Your health is an investment, not an expense.
          </h3>
          <Button variant="default" color="blue" size="lg" className="px-10 py-4">Get started today</Button>
        </div>
      </Card>
    </div>
  );
};

export default HealthLaunchpad;
