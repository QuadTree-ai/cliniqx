import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from "@/components/ui/button";

const HealthLaunchpad = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-center items-center mb-12">
        <Card className="p-8 max-w-4xl shadow-2xl">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Your health is an investment, not an expense.</h3>
            <Button variant="default" color="blue" size="lg" className="px-8 py-3">Explore Solutions</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default HealthLaunchpad;
