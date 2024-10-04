import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PHONE_REGEX, CLINIQX_CARD_REGEX } from './constant';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Bell } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

interface CustomerInfo {
  name: string;
  image: string;
  age: number;
  diseases: string[];
  location: string;
}

const UploadReportCard: React.FC = () => {
  const [identifier, setIdentifier] = useState({ phone: "", cliniqx: "" });
  const [files, setFiles] = useState<File[]>([]);
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [previews, setPreviews] = useState<string[]>([]);

  const handleIdentifierChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'phone' | 'cliniqx') => {
    const value = e.target.value;
    if (
      (type === 'phone' && (PHONE_REGEX.test(value) || value === '')) ||
      (type === 'cliniqx' && (CLINIQX_CARD_REGEX.test(value) || value === ''))
    ) {
      setIdentifier(prev => ({ ...prev, [type]: value }));
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
    generatePreviews(droppedFiles);
    simulateUpload();
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      setFiles(prevFiles => [...prevFiles, ...selectedFiles]);
      generatePreviews(selectedFiles);
      simulateUpload();
    }
  };

  const generatePreviews = (files: File[]) => {
    const newPreviews = files.map(file => {
      if (file.type.startsWith('image/')) {
        return URL.createObjectURL(file);
      }
      return '';
    });
    setPreviews(prevPreviews => [...prevPreviews, ...newPreviews]);
  };

  const simulateUpload = () => {
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  const handleShareReport = () => {
    // Implement the logic to share the report
    console.log("Sharing report with the customer");
    const now = new Date();
    const formattedDate = now.toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });
    toast({
      title: "Report Shared",
      description: `The customer has been notified on ${formattedDate}.`,
    });
  };

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <Card className="lg:col-span-1 w-full">
        <CardHeader>
          <CardTitle>Search Patient</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Input
              type="text"
              placeholder="Phone Number"
              value={identifier.phone}
              onChange={(e) => handleIdentifierChange(e, 'phone')}
            />
            <Input
              type="text"
              placeholder="CliniQX Card Number"
              value={identifier.cliniqx}
              onChange={(e) => handleIdentifierChange(e, 'cliniqx')}
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
          <div className="flex items-center space-x-4">
            <Avatar className="w-24 h-24">
              {customerInfo ? (
                <AvatarImage src={customerInfo.image} alt={customerInfo.name} />
              ) : (
                <AvatarFallback>NA</AvatarFallback>
              )}
            </Avatar>
            <div className="flex-grow">
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
            className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center flex flex-col items-center justify-center"
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
            <label htmlFor="file-input" className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
              Or click to select files
            </label>
            {files.length > 0 && (
              <div className="mt-4 w-full">
                {uploadProgress < 100 && (
                  <>
                    <Progress value={uploadProgress} className="w-full mb-2" />
                    <p>Uploading: {uploadProgress}%</p>
                  </>
                )}
                <p className="mt-2">Selected files:</p>
                <ul className="list-disc list-inside">
                  {files.map((file, index) => (
                    <li key={index} className="mb-2">
                      {file.name}
                      {previews[index] && (
                        <img src={previews[index]} alt={file.name} className="mt-2 max-w-xs max-h-32 object-contain" />
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
      {files.length > 0 && (
        <div className="col-span-1 lg:col-span-2 mt-6">
          <Button onClick={handleShareReport} className="w-full py-1 text-sm">
            Share Report
          </Button>
        </div>
      )}
    </div>
  );
};

export default UploadReportCard;