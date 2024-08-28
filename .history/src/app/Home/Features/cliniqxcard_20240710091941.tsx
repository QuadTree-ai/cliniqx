import React from 'react';
import { Card } from "@/components/ui/card";
import { Wifi } from "lucide-react";

const CliniQXCard = () => {
  return (
    <div className="flex flex-col items-center space-y-12">
      <Card className="w-96 h-56 bg-black text-white rounded-lg shadow-lg relative p-6 flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-1">
            <span className="font-capriola text-2xl md:text-3xl lg:text-4xl font-medium">
              cliniQ
            </span>
            <span className="font-baumans text-3xl md:text-4xl lg:text-5xl">
              X
            </span>
          </div>
          <Wifi className="w-6 h-6" />
        </div>
        <div className="absolute bottom-4 left-4 text-2xl">122032</div>
      </Card>
      <Card className="w-96 h-56 bg-black text-white rounded-lg shadow-lg relative p-6 flex flex-col justify-center">
        <div className="text-2xl text-center">Pritesh Raj</div>
        <div className="absolute bottom-4 right-4 text-sm">QuadTree.ai</div>
      </Card>
      <div className="text-center w-96">
        <p className="text-lg text-gray-700 mb-4">
          This card will help people to tap and share their data with doctors and pay from their healthcare insurance.
        </p>
      </div>
    </div>
  );
};

export default CliniQXCard;
