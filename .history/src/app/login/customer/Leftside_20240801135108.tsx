import React from 'react';
import { Hospital, Store, HousePlus } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface ServiceCardProps {
  icon: React.ReactNode;  // Using ReactNode for elements
  title: string;          // Title as a string
}

const ServicesConnectionCard = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-bold text-gray-800 text-center mb-4">
        Unify Your Healthcare Experience
      </h2>
      <Card className="flex flex-col md:flex-row items-center justify-between space-x-4 rounded-lg">
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <ServiceCard icon={<Hospital className="h-10 w-10 text-blue-500" />} title="Hospital" />
          <Connector />
          <ServiceCard icon={<Store className="h-10 w-10 text-green-500" />} title="Pharmacy" />
          <Connector />
          <ServiceCard icon={<HousePlus className="h-10 w-10 text-red-500" />} title="Clinic" />
        </div>
        <p className="text-sm text-gray-600 text-center">
          Integrated healthcare services ensuring seamless connectivity and enhanced patient care.
        </p>
      </Card>
    </div>
  );
};

const ServiceCard = ({ icon, title }: ServiceCardProps) => (
  <div className="flex flex-col items-center justify-center p-4">
    {icon}
    <p className="text-xs text-gray-700 mt-2">{title}</p>
  </div>
);

const Connector = () => (
  <div className="w-8 my-2 md:my-0 border-t border-dashed border-gray-400" />
);

export default ServicesConnectionCard;
