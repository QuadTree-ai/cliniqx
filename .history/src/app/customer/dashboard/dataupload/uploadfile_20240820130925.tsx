import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { toast } from '@/components/ui/use-toast';
import { CheckCircle, Loader } from 'lucide-react';

// Define the props type for newDataUpload
type NewDataUploadProps = {
  onUploadSuccess: (uploadedInsights: Array<{ part: string; problem: string; severity: 'low' | 'moderate' | 'high' }>) => void;
};

export default function NewDataUpload({ onUploadSuccess }: NewDataUploadProps) {
  const [file, setFile] = useState<File | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      setUploadSuccess(false);
      setError(null); // Reset error when a new file is selected
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
    setError(null); // Reset error

    try {
      const response = await fetch('/api/new-upload', { // Make sure this endpoint exists
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
        onUploadSuccess(data.insights); // Pass the uploaded insights to the parent component
        setFile(null); // Reset file after successful upload
      } else {
        throw new Error(data.message || "Upload failed");
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message || "There was an error uploading the file.");
        toast({
          title: "Upload failed",
          description: error.message || "There was an error uploading the file.",
          variant: "destructive",
        });
      } else {
        setError("An unknown error occurred.");
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
          disabled={loading} // Disable file input while uploading
        />

        {uploadSuccess && (
          <Alert variant="default" className="mt-4 bg-green-100 text-green-800 border-green-200" aria-live="polite">
            <CheckCircle className="text-green-500 w-6 h-6 mr-2" />
            <div>
              <AlertTitle>Upload Successful</AlertTitle>
              <AlertDescription>
                Your file was uploaded successfully.
              </AlertDescription>
            </div>
          </Alert>
        )}

        {error && (
          <Alert variant="destructive" className="mt-4 bg-red-100 text-red-800 border-red-200" aria-live="polite">
            <div>
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </div>
          </Alert>
        )}
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button
          onClick={handleUpload}
          disabled={loading || !file} // Disable upload button if no file is selected or if uploading
          className="bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
        >
          {loading ? <Loader className="animate-spin w-5 h-5 mr-2" /> : 'Upload'}
        </Button>
      </CardFooter>
    </Card>
  );
}
