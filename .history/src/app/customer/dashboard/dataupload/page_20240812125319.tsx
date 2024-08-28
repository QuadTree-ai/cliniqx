// src/app/customer/dashboard/dataupload/page.tsx
"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button"
import { FileInput } from "@/components/ui/file-input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/toast";

export default function DataUpload() {
  const [file, setFile] = useState<File | null>(null);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (file) {
      // Handle file upload logic here
      toast({
        title: "Upload successful",
        description: `${file.name} has been uploaded successfully.`,
        variant: "success",
      });
    } else {
      toast({
        title: "No file selected",
        description: "Please select a file to upload.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Upload Your Medical Data</CardTitle>
        </CardHeader>
        <CardContent>
          <Label htmlFor="medical-data" className="block text-sm font-medium text-gray-700">
            Select your medical file
          </Label>
          <FileInput 
            id="medical-data" 
            className="mt-2" 
            onChange={handleFileChange} 
            accept=".pdf,.doc,.docx,.txt,.csv,.xlsx,.json"
          />
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button onClick={handleUpload} className="bg-blue-600 text-white hover:bg-blue-700">
            Upload
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
