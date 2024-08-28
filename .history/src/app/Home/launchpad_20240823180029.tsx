import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from "@/components/ui/button"
import { IoIosRocket } from 'react-icons/io'; // Import a Lucid icon

const InnovationLaunchpad = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl font-semibold text-center mb-4">Explore Our Services</h2>
      <p className="text-center mb-8">Check out our latest offerings and innovative solutions tailored to meet your needs.</p>
      <div className="flex justify-center items-center mb-10">
        <Card shadow="xl" style={{ padding: '2rem', maxWidth: '600px' }}>
          <div className="flex flex-col items-center">
            <IoIosRocket className="text-4xl text-blue-500 mb-4" /> {/* Lucid icon */}
            <h3 className="text-lg font-semibold">Launch Your Project with Us</h3>
            <p>Take advantage of our expert team and cutting-edge technologies to skyrocket your business.</p>
          </div>
        </Card>
      </div>
      <div className="flex justify-center">
        <Button variant="filled" color="blue" size="large">Get Started</Button> {/* Button with shadcn */}
      </div>
    </div>
  );
};

export default InnovationLaunchpad;
