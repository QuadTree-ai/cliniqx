"use client";

import React from 'react';
import { Card } from "@/components/ui/card";
import Image from "next/image";
import logo from "/public/Frame 27.png";

interface BSCliniQXCardProps {
  identifier?: string;
  className?: string;
}

const BSCliniQXCard: React.FC<BSCliniQXCardProps> = ({ identifier = "00001", className, ...props }) => {
  return (
    <div className={`flex flex-col items-center space-y-8 ${className}`} {...props}>
      <Card className="w-96 h-56 bg-black text-white rounded-2xl shadow-lg relative p-4 flex flex-col justify-center items-center">
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <Image src={logo} alt="QuadTree.ai" className="w-24 h-24 mb-4" />
          <div className="text-center">
            <p className="text-xl font-semibold">Pritesh Raj</p>
            <p className="text-sm mt-2">Founder & CEO</p>
            <p className="text-xs mt-1">QuadTree.ai</p>
          </div>
        </div>
        <div className="absolute bottom-4 left-4 text-sm">{identifier}</div>
      </Card>
    </div>
  );
};

export default BSCliniQXCard;
