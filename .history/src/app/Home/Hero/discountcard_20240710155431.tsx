import React from 'react';
import { Button } from "@/components/ui/button";
import { BadgePercent, ArrowRight } from 'lucide-react';

const DiscountCard = () => {
  return (
    <div className="relative p-6 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg w-full max-w-lg mx-auto">
      <div className="flex items-center space-x-4 mb-4">
        <BadgePercent className="w-10 h-10 text-blue-600" />
        <h2 className="text-3xl font-bold text-gray-800">Special Discount</h2>
      </div>
      <p className="text-lg text-gray-700 mb-6">
        Get exclusive discounts on your first subscription. Limited time offer!
      </p>
      <Button className="w-full flex items-center justify-center space-x-2 py-4 text-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 rounded-lg">
        <span>Try Now</span>
        <ArrowRight className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default DiscountCard;
