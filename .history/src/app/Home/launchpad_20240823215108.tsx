import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from "@/components/ui/button";
import { HeroHighlight } from "@/components/ui/hero-highlight"; // Ensure proper import of HeroHighlight

const HealthLaunchpad = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <HeroHighlight containerClassName="relative w-full h-full flex justify-center items-center">
        <Card className="w-5/6 md:w-3/4 lg:w-1/2 max-w-none shadow-2xl flex flex-col justify-center items-center bg-gray-100 rounded-xl p-8">
          <div className="text-center px-8">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-semibold mb-8">
              Your health is an investment, not an expense.
            </h3>
            <Button variant="default" color="blue" size="lg" className="px-10 py-4">
              Get started today
            </Button>
          </div>
        </Card>
      </HeroHighlight>
    </div>
  );
};

export default HealthLaunchpad;
