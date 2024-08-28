import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Wifi } from "lucide-react";

const CliniQXCard = () => {
  return (
    <div className="flex justify-center space-x-8">
      <Card className="w-80 h-48 bg-black text-white rounded-lg shadow-lg flex items-center justify-center">
        <CardHeader>
          <CardTitle className="text-center text-2xl">cliniQX</CardTitle>
          <CardContent className="flex justify-center items-center space-x-2 mt-4">
            <Wifi className="w-6 h-6" />
          </CardContent>
        </CardHeader>
        <div className="absolute bottom-4 left-4 text-xl">122032</div>
      </Card>
      <Card className="w-80 h-48 bg-black text-white rounded-lg shadow-lg flex items-center justify-center">
        <CardHeader>
          <CardTitle className="text-center text-xl">Pritesh Raj</CardTitle>
          <CardContent className="absolute bottom-4 right-4 text-sm">QuadTree.ai</CardContent>
        </CardHeader>
      </Card>
    </div>
  );
};

export default CliniQXCard;
