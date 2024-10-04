import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PHONE_REGEX, CLINIQX_CARD_REGEX } from './constant';

const UploadReportCard: React.FC = () => {
  const [identifier, setIdentifier] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [customerName, setCustomerName] = useState("");

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

  const handleSearch = () => {
    // Implement the search logic here
    // For demonstration, we'll just set a dummy name
    setCustomerName("John Doe");
  };

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Search Patient</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Search Phone Number or CliniQX Card Number"
                value={identifier}
                onChange={handleIdentifierChange}
              />
              <Button onClick={handleSearch} className="mt-2 w-full">
                Search
              </Button>
            </div>
            {customerName && (
              <div className="text-sm font-medium">
                Customer: {customerName}
              </div>
            )}
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

      <Card>
        <CardHeader>
          <CardTitle>Drop Files</CardTitle>
        </CardHeader>
        <CardContent>
          <div 
            className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center"
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              const droppedFile = e.dataTransfer.files[0];
              setFile(droppedFile);
            }}
          >
            <p>Drag and drop files here</p>
            {file && <p className="mt-2 text-sm">File: {file.name}</p>}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UploadReportCard;