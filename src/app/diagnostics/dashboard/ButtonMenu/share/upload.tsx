import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import Image from 'next/image';

export interface UploadReportCardProps {
  files: File[];
  handleShareReport: () => void;
  handleFileDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  handleFileInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  previews: string[];
  uploadProgress: number;
}

const UploadReportCard: React.FC<UploadReportCardProps> = ({ 
  files,
  handleShareReport,
  handleFileDrop,
  handleFileInput,
  previews,
  uploadProgress
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upload Report</CardTitle>
      </CardHeader>
      <CardContent>
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleFileDrop}
          className="border-2 border-dashed border-gray-300 p-4 text-center cursor-pointer"
        >
          <input
            type="file"
            multiple
            onChange={handleFileInput}
            className="hidden"
            id="file-input"
          />
          <label htmlFor="file-input" className="cursor-pointer">
            Drag and drop files here or click to select files
          </label>
        </div>
        {files.length > 0 && (
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Uploaded Files:</h3>
            <div className="grid grid-cols-3 gap-2">
              {files.map((file, index) => (
                <div key={index} className="text-center">
                  {file.type.startsWith('image/') ? (
                    <Image src={previews[index]} alt={file.name} width={100} height={96} className="w-full h-24 object-cover rounded" />
                  ) : (
                    <div className="w-full h-24 bg-gray-200 flex items-center justify-center rounded">
                      <span className="text-sm">{file.name}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        {uploadProgress > 0 && (
          <div className="mt-4">
            <progress value={uploadProgress} max="100" className="w-full" />
            <p className="text-center mt-1">{uploadProgress}% uploaded</p>
          </div>
        )}
        <Button onClick={handleShareReport} className="mt-4 w-full">Share Report</Button>
      </CardContent>
    </Card>
  );
};

export default UploadReportCard;
