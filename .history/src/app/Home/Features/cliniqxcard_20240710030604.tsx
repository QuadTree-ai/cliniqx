import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Wifi } from "lucide-react";

const CliniQXCard = () => {
  return (
    <div className="flex flex-col items-center space-y-8">
      <Card className="w-96 h-56 bg-black text-white rounded-lg shadow-lg relative p-4 flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <CardTitle className="text-2xl">cliniQX</CardTitle>
          <Wifi className="w-6 h-6" />
        </div>
        <div className="text-2xl">122032</div>
      </Card>
      <Card className="w-96 h-56 bg-black text-white rounded-lg shadow-lg relative p-4 flex flex-col justify-between">
        <div className="text-2xl text-center">Pritesh Raj</div>
        <div className="text-sm text-right">QuadTree.ai</div>
      </Card>
    </div>
  );
};

export default CliniQXCard;
