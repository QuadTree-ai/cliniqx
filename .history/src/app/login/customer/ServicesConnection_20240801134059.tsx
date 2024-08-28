import React from 'react';
import { Hospital, Store, Clinic } from 'lucide-react';  // Assuming these icons are available
import { Card } from '@/components/ui/card';  // Your card component

const ServicesConnectionCard = () => {
  return (
    <Card className="p-6 bg-white rounded-lg shadow-md flex items-center justify-between space-x-4">
      <div className="flex items-center space-x-2">
        <Hospital className="h-6 w-6 text-blue-500" />
        <div className="w-8 border-t border-dashed border-gray-400" />
        <Store className="h-6 w-6 text-green-500" />
        <div className="w-8 border-t border-dashed border-gray-400" />
        <Clinic className="h-6 w-6 text-red-500" />
      </div>
      <p className="text-sm text-gray-600">
        Integrated healthcare services ensuring seamless connectivity and enhanced patient care.
      </p>
    </Card>
  );
};

export default ServicesConnectionCard;
