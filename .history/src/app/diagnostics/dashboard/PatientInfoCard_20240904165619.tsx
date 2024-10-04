import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getPatientInfo } from './datafetch';

const PatientInfoCard: React.FC = () => {
  const patientInfo = getPatientInfo();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Patient Information</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="/avatar-placeholder.png" alt={patientInfo.name} />
            <AvatarFallback>{patientInfo.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{patientInfo.name}</p>
            <p className="text-sm text-gray-500">ID: {patientInfo.id}</p>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <p><span className="font-semibold">Age:</span> {patientInfo.age}</p>
          <p><span className="font-semibold">Gender:</span> {patientInfo.gender}</p>
          <p><span className="font-semibold">Blood Type:</span> {patientInfo.bloodType}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PatientInfoCard;