"use client";

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { toast } from '@/components/ui/use-toast';
import { Loader } from 'lucide-react';
import HumanAnatomyIcons, { iconsMap } from '../icon/anatomyicons'; // Import anatomy icons
import * as pdfjsLib from 'pdfjs-dist';

pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

type SeverityLevel = 'low' | 'moderate' | 'high';

type Insight = {
  part: keyof typeof iconsMap;
  diseases: string[];
  severity: SeverityLevel;
};

export default function DataExtraction() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [insights, setInsights] = useState<Insight[]>([]);

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
    setError(null);
  };

  // Handle file processing
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
    setError(null);

    try {
      const extractedText = await extractDataFromFile(file);

      console.log('Extracted Text:', extractedText); // Log extracted text to troubleshoot

      const analysisResult = await sendToOpenAI(extractedText);

      console.log('Analysis Result from OpenAI:', analysisResult); // Log OpenAI response to troubleshoot

      const insights = parseOpenAIResponse(analysisResult);
      setInsights(insights);

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
      setError(errorMessage);
      console.error('Error during file processing:', errorMessage); // Log detailed error for debugging
      toast({
        title: 'Processing failed',
        description: errorMessage,
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  // Extract data from file (PDF or Image)
  const extractDataFromFile = async (file: File): Promise<string> => {
    if (file.type === 'application/pdf') {
      return extractDataFromPDF(file);
    } else {
      return 'Image extraction is not implemented'; // Placeholder for OCR logic
    }
  };

  // Extract text from PDF using PDF.js
  const extractDataFromPDF = async (pdfFile: File): Promise<string> => {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onload = async function () {
        try {
          const typedArray = new Uint8Array(reader.result as ArrayBuffer);
          const pdfDocument = await pdfjsLib.getDocument(typedArray).promise;
          let textContent = '';
          for (let i = 1; i <= pdfDocument.numPages; i++) {
            const page = await pdfDocument.getPage(i);
            const text = await page.getTextContent();
            textContent += text.items.map((item: any) => item.str).join(' ');
          }
          resolve(textContent);
        } catch (error) {
          reject('Failed to extract text from the PDF.');
        }
      };
      reader.readAsArrayBuffer(pdfFile);
    });
  };

  // Send extracted data to OpenAI for analysis
  const sendToOpenAI = async (text: string): Promise<string> => {
    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error from API:', errorData); // Log error response from the API
        throw new Error(errorData.message || 'Failed to analyze the data using OpenAI.');
      }

      const data = await response.json();
      return data.result; // Assuming OpenAI's response is in `data.result`
    } catch (error) {
      console.error('Error in sending to OpenAI:', error); // Log any network errors or response issues
      throw new Error('Error in sending data to OpenAI.');
    }
  };

  const parseOpenAIResponse = (response: string): Insight[] => {
    const insights: Insight[] = [];
    const lines = response.split('\n').filter(line => line.trim().length > 0);

    const partMap: { [key: string]: { diseases: string[], severity: SeverityLevel } } = {};

    lines.forEach(line => {
      const match = line.match(/(.*?): (.*?)(?: \((low|moderate|high)\))/i);
      if (match) {
        const [, part, disease, severity] = match;
        const validSeverity = severity as SeverityLevel; // Type assertion to ensure proper typing
        if (!partMap[part]) {
          partMap[part] = { diseases: [], severity: validSeverity };
        }
        partMap[part].diseases.push(disease);
      }
    });

    for (const part in partMap) {
      insights.push({
        part: part as keyof typeof iconsMap, // Ensure proper type casting for part
        diseases: partMap[part].diseases,
        severity: partMap[part].severity
      });
    }

    return insights;
  };

  return (
    <Card className="w-full max-w-md shadow-lg">
      <CardHeader>
        <CardTitle className="text-center">Data Extraction & Health Insights</CardTitle>
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

        {insights.length > 0 && (
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insights.map((insight, index) => (
              <div key={index} className="border p-4 rounded-lg shadow-lg flex flex-col items-center">
                <HumanAnatomyIcons icon={insight.part} size={48} color={getSeverityColor(insight.severity)} />
                <h3 className="text-xl font-semibold mt-4 capitalize">{insight.part}</h3>
                <p className="text-gray-700 text-center">
                  {insight.diseases.join(', ')}
                </p>
                <span className={`mt-2 px-3 py-1 rounded-full text-white ${getSeverityBgColor(insight.severity)}`}>
                  Severity: {capitalize(insight.severity)}
                </span>
              </div>
            ))}
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
          {loading ? <Loader className="animate-spin w-5 h-5 mr-2" /> : 'Extract & Analyze'}
        </Button>
      </CardFooter>
    </Card>
  );
}

// Helper function to determine color based on severity
const getSeverityColor = (severity: SeverityLevel): string => {
  const colors: Record<SeverityLevel, string> = {
    low: 'green',
    moderate: 'yellow',
    high: 'red',
  };
  return colors[severity];
};

// Helper function to determine background color based on severity
const getSeverityBgColor = (severity: SeverityLevel): string => {
  const bgColors: Record<SeverityLevel, string> = {
    low: 'bg-green-500',
    moderate: 'bg-yellow-500',
    high: 'bg-red-500',
  };
  return bgColors[severity];
};

// Helper function to capitalize the first letter of a string
const capitalize = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1);
