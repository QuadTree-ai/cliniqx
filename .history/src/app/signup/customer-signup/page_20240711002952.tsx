/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { User} from 'lucide-react';

const CustomerSignup = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Customer Section */}
      <section
        id="customer-section"
        className="min-h-screen flex flex-col items-center justify-center py-12 space-y-6 relative"
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-12 space-y-6 md:space-y-0">
          <Card className="relative overflow-hidden w-full md:w-1/2 max-w-2xl transition-transform duration-500 rounded-lg shadow-lg">
            <img
              src="/customer.jpeg"
              alt="I'm a Customer"
              className="w-full h-96 object-cover"
            />
          </Card>
          <div className="flex flex-col items-start space-y-4 max-w-lg text-center md:text-left">
            <h2 className="text-5xl font-bold text-gray-800 mb-4">I'm a Customer</h2>
            <p className="text-lg text-gray-600 mb-6">
              Join as a customer to access personalized services and exclusive offers.
            </p>
            <Link href="/customer-signup" passHref>
              <Button className="rounded-md py-3 px-8 text-white bg-gray-500 hover:bg-black transition-colors duration-200 flex items-center space-x-2">
                <User className="w-6 h-6 text-white" />
                <span>Customer Signup</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomerSignup;
