import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';
import { CheckCircle, Loader } from 'lucide-react';

type DataUploadProps = {
  onUploadSuccess: (insights: any[]) => void;
};

export default function DataUpload({ onUploadSuccess }: DataUploadProps) {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      toast({
        title: "No file selected",
        description: "Please select a file to upload.",
        variant: "destructive",
      });
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    setLoading(true);

    try {
      const response = await fetch('/api/upload-and-analyze', {
        method: 'POST',
        body: formData,
      });

      // Check if the response is JSON
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const data = await response.json();

        if (response.ok) {
          toast({
            title: "Upload successful",
            description: `${file.name} has been uploaded and analyzed successfully.`,
            variant: "default",
          });

          onUploadSuccess(data.insights); // Pass the insights to the parent component
        } else {
          throw new Error(data.message || "Upload failed");
        }
      } else {
        // If response is not JSON, throw an error
        throw new Error("Unexpected non-JSON response");
      }
    } catch (error) {
      toast({
        title: "Upload failed",
        description: error instanceof Error ? error.message : "An error occurred during the upload process.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md shadow-lg">
      <CardHeader>
        <CardTitle className="text-center">Upload Your Medical Data</CardTitle>
      </CardHeader>
      <CardContent>
        <Label htmlFor="medical-data" className="block text-sm font-medium text-gray-700 mb-2">
          Select your medical file
        </Label>
        <Input
          id="medical-data"
          type="file"
          onChange={handleFileChange}
          accept=".pdf,.jpg,.jpeg,.HEIC"
          aria-label="Upload medical data file"
        />
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button
          onClick={handleUpload}
          disabled={loading}
          className="bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
        >
          {loading ? <Loader className="animate-spin w-5 h-5 mr-2" /> : 'Upload'}
        </Button>
      </CardFooter>
    </Card>
  );
}
