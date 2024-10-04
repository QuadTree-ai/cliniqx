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
    return <LoadingSkeleton />;
  }

  if (!customerInfo) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Patient Information</CardTitle>
        </CardHeader>
        <CardContent>
          <p>No patient information available.</p>
        </CardContent>
      </Card>
    );
  }

  const patientInfoItems = [
    { label: "Name", value: customerInfo.name },
    { label: "Age", value: customerInfo.age?.toString() },
    { label: "Diseases", value: Array.isArray(customerInfo.diseases) ? customerInfo.diseases.join(', ') : undefined },
    { label: "Location", value: customerInfo.location },
    { label: "Phone", value: customerInfo.phone },
    { label: "CliniQX Card", value: customerInfo.cliniqx },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Patient Information</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src={customerInfo.image} alt={`${customerInfo.name}'s avatar`} />
            <AvatarFallback aria-label={`${customerInfo.name}'s initials`}>
              {customerInfo.name ? customerInfo.name.charAt(0).toUpperCase() : 'U'}
            </AvatarFallback>
          </Avatar>
          <dl className="space-y-1">
            {patientInfoItems.map(({ label, value }) => (
              <PatientInfoItem key={label} label={label} value={value} />
            ))}
          </dl>
        </div>
      </CardContent>
    </Card>
  );
};

const PatientInfoItem: React.FC<{ label: string; value?: string }> = ({ label, value }) => {
  if (!value) return null;
  return (
    <div>
      <dt className="sr-only">{label}</dt>
      <dd className="text-sm text-gray-500">
        <span className="font-medium">{label}:</span> {value}
      </dd>
    </div>
  );
};

const LoadingSkeleton: React.FC = () => (
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

export default PatientInfoCard;
