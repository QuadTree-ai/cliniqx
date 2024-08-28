import React from 'react';
import { Hospital, Store, HousePlus } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  animationDelay: string;
}

const ServicesConnectionCard = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-8">
      <h2 className="text-5xl font-extrabold mb-10 text-gray-800 tracking-tight">
        Unify Your Healthcare Experience
      </h2>
      <Card className="relative w-full max-w-xl bg-white rounded-lg shadow-lg overflow-hidden">
        {/* SVG Curves */}
        <svg className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full" viewBox="0 0 200 100" preserveAspectRatio="none">
          <path d="M30,50 Q50,-20 70,50 T110,50 T150,50" stroke="#4A5568" strokeWidth="2" fill="transparent"/>
        </svg>
        <div className="flex justify-around p-8">
          <ServiceCard icon={<Hospital className="h-12 w-12 text-blue-600 animate-bounce" />} title="Hospital" animationDelay="delay-150"/>
          <ServiceCard icon={<Store className="h-12 w-12 text-green-600 animate-bounce" />} title="Pharmacy" animationDelay="delay-300"/>
          <ServiceCard icon={<HousePlus className="h-12 w-12 text-red-600 animate-bounce" />} title="Clinic" animationDelay="delay-450"/>
        </div>
        <p className="text-gray-600 text-center p-4">
          Integrated healthcare services ensuring seamless connectivity and enhanced patient care.
        </p>
      </Card>
    </div>
  );
};

const ServiceCard = ({ icon, title, animationDelay }: ServiceCardProps) => (
  <div className={`text-center animate-pulse ${animationDelay}`}>
    {icon}
    <p className="text-xl text-gray-800 mt-3">{title}</p>
  </div>
);

export default ServicesConnectionCard;
