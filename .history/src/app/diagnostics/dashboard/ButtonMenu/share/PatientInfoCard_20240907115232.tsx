import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { CustomerInfo } from '@/types/customer';

interface PatientInfoCardProps {
  customerInfo: CustomerInfo | null;
}

const PatientInfoCard: React.FC<PatientInfoCardProps> = ({ customerInfo }) => {
  if (!customerInfo) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Patient Information</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src={customerInfo.image} alt={customerInfo.name} />
            <AvatarFallback>{customerInfo.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-lg font-semibold">{customerInfo.name}</h3>
            <p>Age: {customerInfo.age}</p>
            <p>Diseases: {customerInfo.diseases.join(', ')}</p>
            <p>Location: {customerInfo.location}</p>
            {customerInfo.phone && <p>Phone: {customerInfo.phone}</p>}
            <p>CliniQX Card: {customerInfo.cliniqx}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PatientInfoCard;
