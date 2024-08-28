import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from "@/components/ui/button";

const HealthLaunchpad = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
      <Card className="w-11/12 h-auto max-w-3xl p-8 shadow-2xl flex flex-col justify-center items-center bg-white rounded-lg">
        <div className="text-center">
          <h3 className="text-3xl font-semibold mb-8">Your health is an investment, not an expense.</h3>
          <Button variant="default" color="blue" size="lg" className="px-10 py-4">Explore Solutions</Button>
        </div>
      </Card>
    </div>
  );
};

export default HealthLaunchpad;
