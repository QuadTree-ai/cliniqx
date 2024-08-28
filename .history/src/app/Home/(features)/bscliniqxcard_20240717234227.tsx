"use client";

import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Card } from "@/components/ui/card";
import { Wifi } from "lucide-react";

interface BSCliniQXCardProps {
  identifier?: string;
  setIdentifier?: (id: string) => void;
  className?: string;
}

const BSCliniQXCard: React.FC<BSCliniQXCardProps> = ({ identifier = "00001", setIdentifier, className, ...props }) => {
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
    <div className={`flex flex-col items-center space-y-8 ${className}`} {...props}>
      <Card className="w-96 h-56 bg-black text-white rounded-2xl shadow-lg relative p-4 flex flex-col justify-center items-center">
        <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
          <span className="font-baumans text-[16rem] leading-none text-gray-300">X</span>
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center z-10">
          <span className="text-lg font-medium">Pritesh Raj</span>
        </div>
        <Wifi className="w-6 h-6 transform rotate-90 text-white absolute right-4 top-1/2 -translate-y-1/2 z-10" />
        <div className="absolute bottom-4 left-4 text-sm font-poppins z-10">{identifier}</div>
        <div className="absolute bottom-4 right-4 text-right text-xs z-10">
          <div className="font-lovers-quarrel text-sm leading-none">by</div>
          <div className="font-poppins text-sm leading-none">QuadTree.ai</div>
        </div>
      </Card>
      <style jsx>{`
        .font-poppins {
          font-family: 'Poppins', sans-serif;
        }
        .font-lovers-quarrel {
          font-family: 'Lovers Quarrel', cursive;
        }
        .font-baumans {
          font-family: 'Baumans', sans-serif;
        }
      `}</style>
    </div>
  );
};

export default BSCliniQXCard;
