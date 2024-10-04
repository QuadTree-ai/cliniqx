import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { CustomerInfo } from '@/types/customer';

interface PatientInfoCardProps {
  customerInfo: CustomerInfo | null;
  isLoading?: boolean;
}

const PatientInfoCard: React.FC<PatientInfoCardProps> = ({ customerInfo, isLoading = false }) => {
  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Patient Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-slate-200 h-16 w-16"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-slate-200 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                  <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-slate-200 rounded"></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!customerInfo) return null;

  const infoTextClass = "text-sm text-gray-500";

  return (
    <Card>
      <CardHeader>
        <CardTitle>Patient Information</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src={customerInfo.image} alt={customerInfo.name} />
            <AvatarFallback>{customerInfo.name?.charAt(0) ?? 'U'}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold">{customerInfo.name}</h3>
            <p className="text-sm text-gray-500">Age: {customerInfo.age}</p>
            <p className="text-sm text-gray-500">Diseases: {customerInfo.diseases?.join(', ') ?? 'None'}</p>
            <p className="text-sm text-gray-500">Location: {customerInfo.location}</p>
            {customerInfo.phone && <p className={infoTextClass}>Phone: {customerInfo.phone}</p>}
            {customerInfo.cliniqx && <p className={infoTextClass}>CliniQX Card: {customerInfo.cliniqx}</p>}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PatientInfoCard;
