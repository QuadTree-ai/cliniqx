import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PHONE_REGEX, CLINIQX_CARD_REGEX } from './constant';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const UploadReportCard: React.FC = () => {
  const [identifier, setIdentifier] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [customerName, setCustomerName] = useState("");
  const [customerImage, setCustomerImage] = useState("");

  const handleIdentifierChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (PHONE_REGEX.test(value) || CLINIQX_CARD_REGEX.test(value) || value === '') {
      setIdentifier(value);
    }
  };

  const handleSearch = () => {
    // Implement the search logic here
    // For demonstration, we'll just set dummy data
    setCustomerName("John Doe");
    setCustomerImage("/path-to-customer-image.jpg");
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
              <div className="flex items-center space-x-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={customerImage} alt={customerName} />
                  <AvatarFallback>{customerName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold">{customerName}</h3>
                  <p className="text-sm text-gray-500">Patient</p>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

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