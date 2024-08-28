// src/app/customer/dashboard/dataupload/uploadfile.tsx

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
import { Progress } from "@/components/ui/progress";

type Insight = {
  part: string;
  problem: string;
  severity: "low" | "moderate" | "high";
};

type DataUploadProps = {
  onUploadSuccess: (insights: Insight[]) => void;
};

export default function DataUpload({ onUploadSuccess }: DataUploadProps) {
  const [file, setFile] = useState<File | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState<number>(0);

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] ?? null;
    setFile(selectedFile);
    setUploadSuccess(false);
    setError(null);
    setProgress(0); // Reset progress when a new file is selected
  };

  // Handle file upload
  const handleUpload = async () => {
    if (!file) {
      setError("Please select a file to upload.");
      return;
    }

    setLoading(true);
    setProgress(0); // Reset progress on upload start
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

      console.log('Upload initiated, response:', response);

      // Poll the server for progress updates
      const intervalId = setInterval(async () => {
        try {
          console.log('Polling for progress...');
          const progressResponse = await fetch("/api/progress");
          if (!progressResponse.ok) {
            throw new Error(`HTTP error! Status: ${progressResponse.status}`);
          }
          const progressData = await progressResponse.json();
          console.log('Progress Data:', progressData);
          setProgress(progressData.progress);

          if (progressData.progress >= 100) {
            clearInterval(intervalId);
            const data = await response.json();
            console.log('Upload successful, insights:', data.insights);

            if (Array.isArray(data.insights)) {
              onUploadSuccess(data.insights);
              setUploadSuccess(true);
              setFile(null); // Reset file after successful upload
            } else {
              throw new Error("Invalid response format.");
            }
          }
        } catch (error) {
          console.error('Polling error:', error);
          setError(error instanceof Error ? error.message : "An unknown error occurred.");
        }
      }, 1000);

    } catch (error) {
      console.error('Upload error:', error);
      setError(error instanceof Error ? error.message : "An unknown error occurred.");
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
        {loading && (
          <div className="mt-4">
            <Progress value={progress} max={100} className="h-2" />
            <p className="text-center mt-2">{progress}%</p>
          </div>
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
