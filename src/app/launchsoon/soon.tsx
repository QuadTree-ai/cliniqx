import React from 'react';
import { Card } from '@/components/ui/card';
import { HeroHighlight } from '@/components/ui/hero-highlight'; // Import HeroHighlight

const HealthLaunchpad = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Card className="w-5/6 h-1/2 max-w-none shadow-2xl flex flex-col justify-center items-center bg-gray-100 rounded-xl relative overflow-hidden">
        <div className="text-center px-8">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-semibold mb-8">
            {/* Wrap phrases with HeroHighlight */}
            <HeroHighlight className="inline-block">Your dashboard</HeroHighlight>{' '}
            is{' '}
            <HeroHighlight className="inline-block">launching soon</HeroHighlight>.
          </h3>
        </div>
      </Card>
    </div>
  );
};

export default HealthLaunchpad;
