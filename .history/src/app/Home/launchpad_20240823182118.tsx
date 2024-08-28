import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from "@/components/ui/button";

const HealthLaunchpad = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Card className="w-5/6 h-2/3 max-w-none shadow-2xl flex flex-col justify-center items-center bg-neutral-100 rounded-lg">
        <div className="text-center px-8">
          <h3 className="text-3xl font-semibold mb-8">Your health is an investment, not an expense.</h3>
          <Button variant="default" color="blue" size="lg" className="px-10 py-4">Get started today</Button>
        </div>
      </Card>
    </div>
  );
};

export default HealthLaunchpad;
