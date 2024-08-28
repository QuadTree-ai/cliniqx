import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle, Loader } from "lucide-react";

type DataUploadProps = {
  onUploadSuccess: (
    uploadedInsights: Array<{
      part: string;
      problem: string;
      severity: "low" | "moderate" | "high";
    }>
  ) => void;
};

export default function DataUpload({ onUploadSuccess }: DataUploadProps) {
  const [file, setFile] = useState<File | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] ?? null; // Handle possible null
    setFile(selectedFile);
    setUploadSuccess(false);
    setError(null);
  };

  // Handle file upload
  const handleUpload = async () => {
    if (!file) {
      setError("Please select a file to upload.");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/upload-and-analyze", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      onUploadSuccess(data.insights);
      setUploadSuccess(true);
      setFile(null); // Reset file after successful upload
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "An unknown error occurred."
      );
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
        <Label
          htmlFor="medical-data"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Select your medical file
        </Label>
        <Input
          id="medical-data"
          type="file"
          onChange={handleFileChange}
          accept=".pdf,.jpg,.jpeg,.HEIC"
          disabled={loading}
        />
        {error && (
          <Alert variant="destructive" className="mt-4">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        {uploadSuccess && (
          <Alert variant="default" className="mt-4">
            <CheckCircle className="text-green-500 w-6 h-6 mr-2" />
            <AlertTitle>Upload Successful</AlertTitle>
            <AlertDescription>
              Your file has been successfully uploaded and processed.
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button
          onClick={handleUpload}
          disabled={loading || !file}
          className="bg-blue-600 text-white hover:bg-blue-700"
        >
          {loading ? (
            <Loader className="animate-spin w-5 h-5 mr-2" />
          ) : (
            "Upload"
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
