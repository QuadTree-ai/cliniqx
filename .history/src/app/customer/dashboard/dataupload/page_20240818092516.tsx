// src/app/customer/dashboard/dataupload/page.tsx
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';
import { CheckCircle } from 'lucide-react';

// Define the component
export default function DataUpload() {
  // Properly type the file state to be File or null
  const [file, setFile] = useState<File | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);  // e.target.files[0] is a File object
      setUploadSuccess(false);
    }
  };

  // Handle file upload
  const handleUpload = () => {
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      fetch('http://localhost:3000/upload', {
        method: 'POST',
        body: formData,
      })
      .then(response => response.json())
      .then(data => {
        toast({
          title: "Upload successful",
          description: `${file.name} has been uploaded successfully.`,
          variant: "default",
        });
        setUploadSuccess(true);
        setFile(null);  // Reset file after successful upload
      })
      .catch(error => {
        toast({
          title: "Upload failed",
          description: "There was an error uploading the file.",
          variant: "destructive",
        });
      });
    } else {
      toast({
        title: "No file selected",
        description: "Please select a file to upload.",
        variant: "destructive",
      });
    }
  };

  // Component layout
  return (
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
          accept=".pdf,.jpg,.jpeg,.jpg,.HEIC"
          aria-label="Upload medical data file"
        />
        {uploadSuccess && (
          <div className="flex items-center mt-4">
            <CheckCircle className="text-green-500 w-6 h-6 mr-2" />
            <span className="text-green-500 font-semibold">Upload successful</span>
          </div>
        )}
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
  );
}
