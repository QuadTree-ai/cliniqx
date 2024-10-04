import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PHONE_REGEX, CLINIQX_CARD_REGEX } from './constant';

const ShareReportCard: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [cliniqxCardNumber, setCliniqxCardNumber] = useState("");

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (PHONE_REGEX.test(e.target.value) || e.target.value === '') {
      setPhoneNumber(e.target.value);
    }
  };

  const handleCliniqxCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (CLINIQX_CARD_REGEX.test(e.target.value) || e.target.value === '') {
      setCliniqxCardNumber(e.target.value);
    }
  };

  const handleShareReport = () => {
    console.log("Sharing report data to:", phoneNumber || cliniqxCardNumber);
    // Implement the actual sharing logic here
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Share Report</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Input
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
          <Input
            type="text"
            placeholder="Cliniqx Card Number"
            value={cliniqxCardNumber}
            onChange={handleCliniqxCardNumberChange}
          />
          <Button 
            onClick={handleShareReport}
            disabled={!phoneNumber && !cliniqxCardNumber}
            className="w-full"
          >
            Share Report
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
export default ShareReportCard;