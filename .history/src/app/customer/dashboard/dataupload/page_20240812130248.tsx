// src/app/customer/dashboard/dataupload/page.tsx
"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";

export default function DataUpload() {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (file) {
      // Simulate file upload logic
      toast({
        title: "Upload successful",
        description: `${file.name} has been uploaded successfully.`,
        variant: "default", // Use "default" variant for success messages
      });
      setFile(null); // Reset file after upload
    } else {
      toast({
        title: "No file selected",
        description: "Please select a file to upload.",
        variant: "destructive", // Use "destructive" variant for error messages
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-center">Upload Your Medical Data</CardTitle>
        </CardHeader>
        <CardContent>
          <Label htmlFor="medical-data" className="block text-sm font-medium text-gray-700 mb-2">
            Select your medical file
          </Label>
          <input
            id="medical-data"
            type="file"
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 cursor-pointer"
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx,.txt,.csv,.xlsx,.json"
            aria-label="Upload medical data file"
          />
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button
            onClick={handleUpload}
            className="bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
          >
            Upload
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
