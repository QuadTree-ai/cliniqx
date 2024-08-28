import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';
import { Loader } from 'lucide-react';
import * as pdfjsLib from 'pdfjs-dist/build/pdf'; // PDF.js library for PDF extraction
import 'pdfjs-dist/build/pdf.worker.entry'; // PDF.js worker

export default function DataExtraction() {
  const [file, setFile] = useState<File | null>(null);
  const [extractedData, setExtractedData] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      setExtractedData(null);
      setError(null);
    }
  };

  // Handle file processing
  const handleFileProcessing = async () => {
    if (!file) {
      toast({
        title: "No file selected",
        description: "Please select a file to process.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      // Check file type and process accordingly
      if (file.type === 'application/pdf') {
        await extractDataFromPDF(file);
      } else if (file.type.startsWith('image/')) {
        extractDataFromImage(file);
      } else {
        throw new Error("Unsupported file format. Only PDFs and images are supported.");
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : "Error processing file.");
      toast({
        title: "File processing failed",
        description: error instanceof Error ? error.message : "An unknown error occurred.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // Extract data from PDF using PDF.js
  const extractDataFromPDF = async (pdfFile: File) => {
    const reader = new FileReader();
    reader.onload = async function () {
      const typedArray = new Uint8Array(reader.result as ArrayBuffer);
      const pdfDocument = await pdfjsLib.getDocument(typedArray).promise;

      let textContent = '';
      for (let i = 1; i <= pdfDocument.numPages; i++) {
        const page = await pdfDocument.getPage(i);
        const text = await page.getTextContent();
        textContent += text.items.map((item: any) => item.str).join(' ');
      }

      setExtractedData(textContent);
    };
    reader.readAsArrayBuffer(pdfFile);
  };

  // Extract data from images (for demo purposes, just getting image properties)
  const extractDataFromImage = (imageFile: File) => {
    const reader = new FileReader();
    reader.onload = function () {
      const img = new Image();
      img.src = reader.result as string;
      img.onload = () => {
        const extractedInfo = `Image width: ${img.width}px, Image height: ${img.height}px`;
        setExtractedData(extractedInfo);
      };
    };
    reader.readAsDataURL(imageFile);
  };

  return (
    <Card className="w-full max-w-md shadow-lg">
      <CardHeader>
        <CardTitle className="text-center">Data Extraction from File</CardTitle>
      </CardHeader>
      <CardContent>
        <Label htmlFor="file" className="block text-sm font-medium text-gray-700 mb-2">
          Select a PDF or image file
        </Label>
        <Input
          id="file"
          type="file"
          onChange={handleFileChange}
          accept=".pdf,.jpg,.jpeg,.png,.heic"
          aria-label="Upload file for data extraction"
          disabled={loading} // Disable file input while processing
        />

        {extractedData && (
          <div className="mt-4 p-4 border border-gray-300 rounded">
            <h3 className="font-semibold text-lg">Extracted Data:</h3>
            <p className="mt-2 text-gray-700 whitespace-pre-wrap">{extractedData}</p>
          </div>
        )}

        {error && (
          <div className="mt-4 p-4 border border-red-300 rounded bg-red-50 text-red-700">
            <h3 className="font-semibold text-lg">Error:</h3>
            <p className="mt-2">{error}</p>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button
          onClick={handleFileProcessing}
          disabled={loading || !file} // Disable processing if no file or if loading
          className="bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
        >
          {loading ? <Loader className="animate-spin w-5 h-5 mr-2" /> : 'Extract Data'}
        </Button>
      </CardFooter>
    </Card>
  );
}
