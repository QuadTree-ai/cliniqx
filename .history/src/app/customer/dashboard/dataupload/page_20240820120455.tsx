import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { toast } from '@/components/ui/use-toast';
import { CheckCircle, Loader } from 'lucide-react';

export default function DataUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      setUploadSuccess(false);
    }
  };

  // Handle file upload
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

    setLoading(true); // Show loading spinner

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Upload successful",
          description: `${file.name} has been uploaded successfully.`,
          variant: "default",
        });
        setUploadSuccess(true);
        setFile(null);  // Reset file after successful upload
      } else {
        throw new Error(data.message || "Upload failed");
      }
    } catch (error) {
      if (error instanceof Error) {
        toast({
          title: "Upload failed",
          description: error.message || "There was an error uploading the file.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Upload failed",
          description: "An unknown error occurred.",
          variant: "destructive",
        });
      }
    } finally {
      setLoading(false); // Hide loading spinner
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

        {uploadSuccess && (
          <Alert variant="default" className="mt-4 bg-green-100 text-green-800 border-green-200">
            <CheckCircle className="text-green-500 w-6 h-6 mr-2" />
            <div>
              <AlertTitle>Upload Successful</AlertTitle>
              <AlertDescription>
                Your file was uploaded successfully.
              </AlertDescription>
            </div>
          </Alert>
        )}
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
