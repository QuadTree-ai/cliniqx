import React from 'react';
import { Card } from "@/components/ui/card";
import { Wifi } from "lucide-react";

const CliniQXCard = () => {
  return (
    <div className="flex flex-col items-center space-y-8">
      <Card className="w-96 h-56 bg-black text-white rounded-lg shadow-lg relative p-4 flex flex-col justify-center items-center">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-1 mx-auto">
            <span className="font-capriola text-xl font-medium">cliniQ</span>
            <span className="font-baumans text-2xl">X</span>
          </div>
          <Wifi className="w-6 h-6 transform rotate-90 text-white" />
        </div>
        <div className="absolute bottom-4 left-4 text-sm">122032</div>
      </Card>
    </div>
  );
};

export default CliniQXCard;
