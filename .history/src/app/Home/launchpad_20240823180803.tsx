import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from "@/components/ui/button";

const HealthLaunchpad = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-center items-center mb-12">
        <Card className="p-10 max-w-6xl shadow-2xl">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-6">Revolutionize Your Health Care Services</h3> 
            <p className="text-lg leading-relaxed mb-8">
              Partner with us to leverage state-of-the-art technology that enhances patient care
              and streamlines your operations. From advanced data analytics to integrated health systems,
              our solutions are tailored to elevate the efficiency and effectiveness of your health services.
            </p>
            <Button variant="filled" color="blue" size="xl" className="px-10 py-4">Get Started Now</Button> 
          </div>
        </Card>
      </div>
    </div>
  );
};

export default HealthLaunchpad;
