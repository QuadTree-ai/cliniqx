import React from 'react';
import { Card } from "@/components/ui/card";
import { Wifi } from "lucide-react";

const CliniQXCard = () => {
  return (
    <div className="flex flex-col items-center space-y-8">
      <Card className="w-96 h-56 bg-black text-white rounded-lg shadow-lg relative flex flex-col justify-center items-center">
        <div className="absolute top-4 right-4 transform -rotate-90">
          <Wifi className="w-8 h-8" />
        </div>
        <div className="flex items-center space-x-2">
          <span className="font-capriola text-4xl font-medium">cliniQ</span>
          <span className="font-baumans text-5xl">X</span>
        </div>
        <div className="absolute bottom-4 left-4 text-xl">122032</div>
      </Card>
      <Card className="w-96 h-56 bg-black text-white rounded-lg shadow-lg relative flex flex-col justify-center items-center">
        <div className="text-3xl">Pritesh Raj</div>
        <div className="absolute bottom-4 right-4 text-sm">QuadTree.ai</div>
      </Card>
    </div>
  );
};

export default CliniQXCard;
