import React from 'react';
import { Card } from "@/components/ui/card";
import { Wifi } from "lucide-react";

const CliniQXCard = () => {
  return (
    <div className="flex flex-col items-center space-y-8">
      <Card className="w-96 h-56 bg-black text-white rounded-lg shadow-lg relative p-6 flex flex-col justify-between">
        <div className="flex justify-center items-center flex-grow">
          <div className="flex items-center space-x-2">
            <span className="font-capriola text-xl font-medium">cliniQ</span>
            <span className="font-baumans text-2xl">X</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="absolute bottom-4 left-4 text-sm">122032</div>
          <Wifi className="w-6 h-6 transform rotate-45 absolute bottom-4 right-4" />
        </div>
      </Card>
      <Card className="w-96 h-56 bg-black text-white rounded-lg shadow-lg relative p-6 flex flex-col justify-center">
        <div className="text-xl text-center">Pritesh Raj</div>
        <div className="absolute bottom-4 right-4 text-sm">QuadTree.ai</div>
      </Card>
    </div>
  );
};

export default CliniQXCard;
