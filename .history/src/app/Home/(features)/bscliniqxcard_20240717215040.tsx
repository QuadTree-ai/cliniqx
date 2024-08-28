"use client";

import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Card } from "@/components/ui/card";
import { Wifi } from "lucide-react";
import './fonts.css'; // Make sure to include the CSS for the fonts

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
        <div className="text-center">
          <p className="text-xl font-semibold">Pritesh Raj</p>
          <p className="text-sm mt-2">Founder & CEO</p>
          <p className="text-xs mt-1">QuadTree.ai</p>
        </div>
        <div className="absolute bottom-4 left-4 text-sm">{identifier}</div>
      </Card>
      <style jsx>{`
        .text-xs {
          font-family: 'Poppins', sans-serif;
        }
        .text-sm {
          font-family: 'Poppins', sans-serif;
        }
        .text-xl {
          font-family: 'Poppins', sans-serif;
        }
        .by {
          font-family: 'Lovers Quarrel', cursive;
        }
      `}</style>
    </div>
  );
};

export default BSCliniQXCard;
