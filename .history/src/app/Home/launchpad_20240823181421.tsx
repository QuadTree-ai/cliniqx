import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from "@/components/ui/button";

const HealthLaunchpad = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center p-4"> {/* Added padding for spacing */}
      <Card className="w-full max-w-3xl h-auto shadow-2xl flex flex-col justify-center items-center p-12"> {/* Adjusted max-width and padding */}
        <div className="text-center px-8">
          <h3 className="text-3xl font-semibold mb-8">Your health is an investment, not an expense.</h3>
          <Button variant="default" color="blue" size="lg" className="px-10 py-4">Explore Solutions</Button>
        </div>
      </Card>
    </div>
  );
};

export default HealthLaunchpad;
