import React from 'react';
import { Card } from "@/components/ui/card";
import { Wifi } from "lucide-react";
import Image from 'next/image';
import LogoMain from '/public/Logo_main.svg';

const CliniQXCard = () => {
  return (
    <div className="flex flex-col items-center space-y-8">
      <Card className="w-96 h-56 bg-black text-white rounded-lg shadow-lg relative p-4 flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <Image src={LogoMain} alt="Logo Main" width={50} height={50} className="object-contain" />
          <Wifi className="w-6 h-6" />
        </div>
        <div className="absolute bottom-4 left-4 text-xl">122032</div>
      </Card>
      <Card className="w-96 h-56 bg-black text-white rounded-lg shadow-lg relative p-4 flex flex-col justify-center">
        <div className="text-2xl text-center">Pritesh Raj</div>
        <div className="absolute bottom-4 right-4 text-sm">QuadTree.ai</div>
      </Card>
    </div>
  );
};

export default CliniQXCard;