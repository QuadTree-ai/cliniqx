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
    <div className="flex flex-col items-center justify-center p-12 bg-gradient-to-br from-green-500 to-blue-600 text-white w-full h-screen">
      <h2 className="text-3xl font-bold mb-6 shadow-md text-center">
        Unify Your Healthcare Experience
      </h2>
      <Card className="w-full max-w-lg p-8 bg-white rounded-xl shadow-xl opacity-95">
        <div className="grid grid-cols-3 gap-4 text-center">
          <ServiceCard icon={<Hospital className="h-12 w-12 text-blue-500" />} title="Hospital" />
          <ServiceCard icon={<Store className="h-12 w-12 text-green-500" />} title="Pharmacy" />
          <ServiceCard icon={<HousePlus className="h-12 w-12 text-red-500" />} title="Clinic" />
        </div>
        <p className="text-sm text-gray-600 mt-4 text-center">
          Seamlessly connect with a network of healthcare services to enhance your medical care.
        </p>
      </Card>
    </div>
  );
};

const ServiceCard = ({ icon, title }: ServiceCardProps) => (
  <div>
    {icon}
    <p className="text-sm text-gray-800 mt-2 font-semibold">{title}</p>
  </div>
);

export default ServicesConnectionCard;
