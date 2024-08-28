import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from "@/components/ui/button";

const HealthLaunchpad = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center px-4">
      <Card className="w-5/6 h-1/2 sm:w-4/5 lg:w-3/5 sm:h-3/4 lg:h-1/2 max-w-none shadow-2xl flex flex-col justify-center items-center bg-gray-100 rounded-xl p-8">
        <div className="text-center">
          <h3 className="text-3xl font-semibold mb-8">Your health is an investment, not an expense.</h3>
          <Button variant="default" size="lg" className="px-8 py-4">
            Get started today
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default HealthLaunchpad;
