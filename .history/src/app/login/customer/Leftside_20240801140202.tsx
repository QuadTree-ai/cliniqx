// src/app/login/customer/Leftside.tsx
import React from 'react';
import { Hospital, Store, HousePlus } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
}

const ServicesConnectionCard = () => {
  return (
    <div className="flex flex-col items-center justify-center p-12 bg-gradient-to-bl from-cyan-500 to-blue-700 text-white w-full h-full">
      <h2 className="text-3xl font-bold mb-6">
        Unify Your Healthcare Experience
      </h2>
      <Card className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex justify-around p-5">
          <ServiceCard icon={<Hospital className="h-12 w-12 text-blue-600" />} title="Hospital" />
          <ServiceCard icon={<Store className="h-12 w-12 text-green-600" />} title="Pharmacy" />
          <ServiceCard icon={<HousePlus className="h-12 w-12 text-red-600" />} title="Clinic" />
        </div>
        <p className="text-gray-600 text-center p-4">
          Integrated healthcare services ensuring seamless connectivity and enhanced patient care.
        </p>
      </Card>
    </div>
  );
};

const ServiceCard = ({ icon, title }: ServiceCardProps) => (
  <div className="text-center">
    {icon}
    <p className="text-sm text-gray-800 mt-2">{title}</p>
  </div>
);

export default ServicesConnectionCard;
