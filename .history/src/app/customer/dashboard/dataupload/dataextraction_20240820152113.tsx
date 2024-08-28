import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { toast } from '@/components/ui/use-toast';
import { Loader } from 'lucide-react';
import * as pdfjsLib from 'pdfjs-dist';
import 'pdfjs-dist/build/pdf.worker.entry'; // Ensure the worker is bundled

// Manually setting up the worker path
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

export default function DataExtraction() {
  const [file, setFile] = useState<File | null>(null);
  const [extractedData, setExtractedData] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
    setExtractedData(null);
    setError(null);
  };

  const handleFileProcessing = async () => {
    if (!file) {
      toast({
        title: 'No file selected',
        description: 'Please select a file to process.',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);

    try {
      if (file.type === 'application/pdf') {
        await extractDataFromPDF(file);
      } else {
        extractDataFromImage(file);
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
      setError(errorMessage);
      toast({
        title: 'Processing failed',
        description: errorMessage,
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

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

      if (textContent.trim()) {
        setExtractedData(textContent);
      } else {
        throw new Error('No text found in the PDF.');
      }
    };
    reader.readAsArrayBuffer(pdfFile);
  };

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
          disabled={loading}
        />

        {extractedData && (
          <div className="mt-4 p-4 border border-gray-300 rounded">
            <h3 className="font-semibold text-lg">Extracted Data:</h3>
            <p className="mt-2 text-gray-700 whitespace-pre-wrap">{extractedData}</p>
          </div>
        )}

        {error && (
          <Alert variant="destructive" className="mt-4 bg-red-100 text-red-800 border-red-200">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button
          onClick={handleFileProcessing}
          disabled={loading || !file}
          className="bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
        >
          {loading ? <Loader className="animate-spin w-5 h-5 mr-2" /> : 'Extract Data'}
        </Button>
      </CardFooter>
    </Card>
  );
}
