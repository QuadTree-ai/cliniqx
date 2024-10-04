import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PHONE_REGEX, CLINIQX_CARD_REGEX } from './constant';

const UploadReportCard: React.FC = () => {
  const [identifier, setIdentifier] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleIdentifierChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (PHONE_REGEX.test(value) || CLINIQX_CARD_REGEX.test(value) || value === '') {
      setIdentifier(value);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (file && identifier) {
      console.log(`Uploading ${file.name} for ${identifier}`);
      // Implement the actual upload logic here
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upload Report</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Input
            type="text"
            placeholder="Phone Number or CliniQX Card Number"
            value={identifier}
            onChange={handleIdentifierChange}
          />
          <Input
            type="file"
            onChange={handleFileChange}
          />
          <Button 
            onClick={handleUpload}
            disabled={!file || !identifier}
            className="w-full"
          >
            Upload Report
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default UploadReportCard;