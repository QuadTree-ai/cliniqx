import React, { ReactNode } from 'react'; // Import ReactNode for typing children or node elements
import { Hospital, Store, HousePlus } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface ServiceCardProps {
  icon: ReactNode; // 'ReactNode' type is used for elements that can be rendered
  title: string;   // 'string' type for text
}

const ServicesConnectionCard = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-bold text-gray-800 text-center mb-4">
        Unify Your Healthcare Experience
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-around">
        <ServiceCard icon={<Hospital className="h-10 w-10 text-blue-500" />} title="Hospital" />
        <Connector />
        <ServiceCard icon={<Store className="h-10 w-10 text-green-500" />} title="Pharmacy" />
        <Connector />
        <ServiceCard icon={<HousePlus className="h-10 w-10 text-red-500" />} title="Clinic" />
      </div>
      <p className="text-sm text-gray-600 text-center mt-4">
        Integrated healthcare services ensuring seamless connectivity and enhanced patient care.
      </p>
    </div>
  );
};

const ServiceCard = ({ icon, title }: ServiceCardProps) => (
  <Card className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg shadow">
    {icon}
    <p className="text-xs text-gray-700 mt-2">{title}</p>
  </Card>
);

const Connector = () => (
  <div className="w-8 my-2 md:my-0 border-t border-dashed border-gray-400" />
);

export default ServicesConnectionCard;
