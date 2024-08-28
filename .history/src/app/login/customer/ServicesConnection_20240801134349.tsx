import React from 'react';
import { Hospital, Store, HousePlus } from 'lucide-react'; // Correct import statement
import { Card } from '@/components/ui/card'; // Ensure this path matches your project structure

const ServicesConnectionCard = () => {
  return (
    <Card className="p-6 bg-white rounded-lg shadow-md flex flex-col md:flex-row items-center justify-between space-x-4">
      <div className="flex items-center space-x-4 mb-4 md:mb-0">
        <Hospital className="h-6 w-6 text-blue-500" />
        <div className="w-8 border-t border-dashed border-gray-400" />
        <Store className="h-6 w-6 text-green-500" />
        <div className="w-8 border-t border-dashed border-gray-400" />
        <HousePlus className="h-6 w-6 text-red-500" /> {/* Corrected icon name */}
      </div>
      <p className="text-sm text-gray-600 text-center">
        Integrated healthcare services ensuring seamless connectivity and enhanced patient care.
      </p>
    </Card>
  );
};

export default ServicesConnectionCard;
