import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PHONE_REGEX, CLINIQX_CARD_REGEX } from './constant';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface CustomerInfo {
  name: string;
  image: string;
  age: number;
  diseases: string[];
  location: string;
}

const UploadReportCard: React.FC = () => {
  const [identifier, setIdentifier] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo | null>(null);

  const handleIdentifierChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (PHONE_REGEX.test(value) || CLINIQX_CARD_REGEX.test(value) || value === '') {
      setIdentifier(value);
    }
  };

  const handleSearch = () => {
    // Implement the search logic here
    // For demonstration, we'll just set dummy data
    setCustomerInfo({
      name: "John Doe",
      image: "/path-to-customer-image.jpg",
      age: 35,
      diseases: ["Diabetes", "Hypertension"],
      location: "New York, USA"
    });
  };

  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles(prevFiles => [...prevFiles, ...droppedFiles]);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      setFiles(prevFiles => [...prevFiles, ...selectedFiles]);
    }
  };

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <Card className="lg:col-span-1 w-full">
        <CardHeader>
          <CardTitle>Search Patient</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Input
              type="text"
              placeholder="Search Phone Number or CliniQX Card Number"
              value={identifier}
              onChange={handleIdentifierChange}
            />
            <Button onClick={handleSearch} className="w-full">
              Search
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="lg:col-span-1 w-full">
        <CardHeader>
          <CardTitle>Patient Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center space-y-4">
            <Avatar className="w-32 h-32">
              {customerInfo ? (
                <AvatarImage src={customerInfo.image} alt={customerInfo.name} />
              ) : (
                <AvatarFallback>NA</AvatarFallback>
              )}
            </Avatar>
            <div className="text-center w-full">
              <h3 className="text-xl font-semibold">{customerInfo ? customerInfo.name : 'NA'}</h3>
              <p className="text-sm text-gray-500">Age: {customerInfo ? customerInfo.age : 'NA'}</p>
              <p className="text-sm text-gray-500">Diseases: {customerInfo ? customerInfo.diseases.join(', ') : 'NA'}</p>
              <p className="text-sm text-gray-500">Location: {customerInfo ? customerInfo.location : 'NA'}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="col-span-1 lg:col-span-2">
        <CardHeader>
          <CardTitle>Upload Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <div 
            className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center h-64 flex flex-col items-center justify-center"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleFileDrop}
          >
            <p className="text-lg mb-4">Drag and drop files here</p>
            <input
              type="file"
              multiple
              onChange={handleFileInput}
              className="hidden"
              id="file-input"
            />
            <label htmlFor="file-input" className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded">
              Or click to select files
            </label>
            {files.length > 0 && (
              <div className="mt-4">
                <p>Selected files:</p>
                <ul className="list-disc list-inside">
                  {files.map((file, index) => (
                    <li key={index}>{file.name}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UploadReportCard;