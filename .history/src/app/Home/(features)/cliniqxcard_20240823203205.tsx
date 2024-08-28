"use client";

import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Card } from "@/components/ui/card";
import { Wifi } from "lucide-react";

interface CliniQXCardProps {
  identifier?: string;
  setIdentifier?: (id: string) => void;
  className?: string;
}

const CliniQXCard: React.FC<CliniQXCardProps> = ({ identifier = "00001", setIdentifier, className, ...props }) => {
  useEffect(() => {
    if (setIdentifier) {
      const generateAlphanumeric = () => uuidv4().replace(/[^a-zA-Z0-9]/g, '').slice(0, 8);
      setIdentifier(generateAlphanumeric());
    }
  }, [setIdentifier]);

  return (
    <div className={`flex flex-col items-center space-y-6 ${className}`} {...props}>
      <Card className="w-11/12 max-w-xs md:max-w-sm lg:max-w-md h-52 bg-black text-white rounded-2xl shadow-lg relative p-4 flex flex-col justify-center items-center">
        <div className="flex items-center justify-center space-x-2">
          <span className="font-capriola text-2xl sm:text-3xl font-medium">cliniQ</span>
          <span className="font-baumans text-3xl sm:text-4xl">X</span>
        </div>
        <Wifi className="w-5 h-5 sm:w-6 sm:h-6 transform rotate-90 text-white absolute right-4 top-1/2 -translate-y-1/2" />
        <div className="absolute bottom-4 left-4 text-xs sm:text-sm">{identifier}</div>
      </Card>
    </div>
  );
};

export default CliniQXCard;
