// src/app/login/customer/Leftside.tsx
import React from 'react';
import { Hospital, Store, HousePlus } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface ServiceCardProps {
  icon: React.ReactNode;  // Using ReactNode for elements
  title: string;          // Title as a string
}

const ServicesConnectionCard = () => {
  return (
    <div className="flex flex-col items-center justify-center p-12 bg-gradient-to-r from-green-300 to-blue-300 text-white w-full h-screen">
      <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-blue-700 mb-4">
        Unify Your Healthcare Experience
      </h2>
      <Card className="flex flex-col md:flex-row items-center justify-around space-x-4 bg-white rounded-lg shadow-md p-6">
        <ServiceCard icon={<Hospital className="h-10 w-10 text-blue-500" />} title="Hospital" />
        <Connector />
        <ServiceCard icon={<Store className="h-10 w-10 text-green-500" />} title="Pharmacy" />
        <Connector />
        <ServiceCard icon={<HousePlus className="h-10 w-10 text-red-500" />} title="Clinic" />
      </Card>
      <p className="text-center text-gray-600 mt-4">
        Integrated healthcare services ensuring seamless connectivity and enhanced patient care.
      </p>
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
