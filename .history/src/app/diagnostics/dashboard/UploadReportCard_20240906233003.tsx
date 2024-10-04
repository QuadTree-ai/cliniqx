import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PHONE_REGEX, CLINIQX_CARD_REGEX } from './constant';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const UploadReportCard: React.FC = () => {
  const [identifier, setIdentifier] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [customerInfo, setCustomerInfo] = useState<{
    name: string;
    image: string;
    age: number;
    diseases: string[];
    location: string;
  } | null>(null);

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
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <Card className="md:col-span-1">
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

      {customerInfo && (
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Patient Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center space-y-4">
              <Avatar className="w-32 h-32">
                <AvatarImage src={customerInfo.image} alt={customerInfo.name} />
                <AvatarFallback>{customerInfo.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <h3 className="text-xl font-semibold">{customerInfo.name}</h3>
                <p className="text-sm text-gray-500">Age: {customerInfo.age}</p>
                <p className="text-sm text-gray-500">Diseases: {customerInfo.diseases.join(', ')}</p>
                <p className="text-sm text-gray-500">Location: {customerInfo.location}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <Card className="col-span-1 md:col-span-2">
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