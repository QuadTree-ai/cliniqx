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
    <div className="flex flex-col items-center justify-center p-12 bg-gradient-to-bl from-cyan-500 to-blue-700 text-white w-full h-screen">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-white shadow-lg">
          Unify Your Healthcare Experience
        </h1>
        <p className="mt-2 text-lg font-light text-white">
          Explore how our integrated network of hospitals, pharmacies, and clinics enhances your healthcare management.
        </p>
      </div>
      <Card className="w-full max-w-4xl bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="grid grid-cols-3 divide-x divide-gray-200 text-center">
          <ServiceCard icon={<Hospital className="h-12 w-12 text-blue-600 mx-auto" />} title="Hospital" />
          <ServiceCard icon={<Store className="h-12 w-12 text-green-600 mx-auto" />} title="Pharmacy" />
          <ServiceCard icon={<HousePlus className="h-12 w-12 text-red-600 mx-auto" />} title="Clinic" />
        </div>
        <p className="text-sm text-gray-600 py-4 px-6 text-center">
          Our services are seamlessly connected, offering a unified approach to healthcare that ensures quick access, better coordination, and superior patient outcomes.
        </p>
      </Card>
    </div>
  );
};

const ServiceCard = ({ icon, title }: ServiceCardProps) => (
  <div className="py-4">
    {icon}
    <h3 className="mt-2 font-semibold text-gray-800">{title}</h3>
  </div>
);

export default ServicesConnectionCard;
