import React from 'react';
import { Card } from "@/components/ui/card";
import { Wifi } from "lucide-react";

const CliniQXCard = () => {
  return (
    <div className="flex flex-col items-center space-y-8">
      <Card className="w-80 h-48 bg-black text-white rounded-lg shadow-lg relative p-4 flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-1">
            <span className="font-capriola text-lg md:text-xl lg:text-2xl font-medium">
              cliniQ
            </span>
            <span className="font-baumans text-2xl md:text-3xl lg:text-4xl">
              X
            </span>
          </div>
          <Wifi className="w-6 h-6" />
        </div>
        <div className="absolute bottom-4 left-4 text-xl">122032</div>
      </Card>
      <Card className="w-80 h-48 bg-black text-white rounded-lg shadow-lg relative p-4 flex flex-col justify-center">
        <div className="text-2xl text-center">Pritesh Raj</div>
        <div className="absolute bottom-4 right-4 text-sm">QuadTree.ai</div>
      </Card>
    </div>
  );
};

export default CliniQXCard;