import React from 'react';
import { Card } from '@/components/ui/card';
import { Button }from "@/components/ui/button";

const Launchpad = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-center items-center mb-12">
        <Card className="p-8 max-w-4xl shadow-xl">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Launch Your Project with Us</h3>
            <p className="leading-relaxed">Take advantage of our expert team and cutting-edge technologies to skyrocket your business.</p>
            <Button variant="default" color="blue" size="lg" className="px-8 py-3">Get Started</Button>
          </div>
        </Card>
      </div>
      <div className="flex justify-center">
        
      </div>
    </div>
  );
};

export default Launchpad;