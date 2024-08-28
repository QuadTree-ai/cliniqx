import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CheckCircle, Loader } from 'lucide-react';
import { handleFileUpload } from './Filehandle'; // Import the file handling function

type DataUploadProps = {
  onUploadSuccess: (uploadedInsights: Array<{ part: string; problem: string; severity: 'low' | 'moderate' | 'high' }>) => void;
};

export default function DataUpload({ onUploadSuccess }: DataUploadProps) {
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

  // Handle the file upload using the file handling function
  const handleUpload = async () => {
    handleFileUpload({
      file,
      onUploadSuccess: (insights) => {
        setUploadSuccess(true);
        onUploadSuccess(insights);
        setFile(null); // Reset file after successful upload
      },
      onUploadStart: () => setLoading(true),
      onUploadEnd: () => setLoading(false),
      onError: (errorMessage) => setError(errorMessage),
    });
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
