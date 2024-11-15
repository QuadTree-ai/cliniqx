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
      const generateAlphanumeric = () => {
        return uuidv4().replace(/[^a-zA-Z0-9]/g, '').slice(0, 8);
      };

      const id = generateAlphanumeric();
      setIdentifier(id);
    }
  }, [setIdentifier]);

  return (
    <div className={`flex flex-col items-center justify-center space-y-8 ${className}`} {...props}>
      <Card className="w-[85%] max-w-xs h-[160px] sm:w-[320px] sm:h-[200px] md:w-[380px] md:h-[240px] bg-black text-white rounded-lg shadow-lg relative p-4 flex flex-col justify-center items-center">
        <div className="flex items-center justify-center">
          <span className="font-capriola text-lg sm:text-xl font-medium">cliniQ</span>
          <span className="font-baumans text-2xl sm:text-3xl">X</span>
        </div>
        <Wifi className="w-5 h-5 sm:w-6 sm:h-6 transform rotate-90 text-white absolute right-4 top-1/2 -translate-y-1/2" />
        <div className="absolute bottom-4 left-4 text-xs sm:text-sm">{identifier}</div>
      </Card>
    </div>
  );
};

export default CliniQXCard;
