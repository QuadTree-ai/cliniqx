import React from 'react';
import { Button } from "@/components/ui/button";
import { BadgePercent, ArrowRight } from 'lucide-react';

const DiscountCard = () => {
  return (
    <div className="relative p-8 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg w-full max-w-3xl mx-auto">
      <div className="flex items-center space-x-4 mb-6">
        <BadgePercent className="w-12 h-12 text-blue-600" />
        <h2 className="text-3xl font-bold text-gray-800">Special Discount</h2>
      </div>
      <p className="text-xl text-gray-700 mb-8">
        88% Mavericks improved their mental health with our 12-week program. Get started with your personalized program now.
      </p>
      <Button className="w-40 flex items-center justify-center space-x-2 py-2 text-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 rounded-full">
        <span>Try Now</span>
        <ArrowRight className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default DiscountCard;
