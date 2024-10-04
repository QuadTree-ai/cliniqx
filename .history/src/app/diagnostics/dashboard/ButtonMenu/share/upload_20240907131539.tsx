import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useFileUpload } from './hooks/useFileUpload';

export interface UploadReportCardProps {
  files: File[];
  handleShareReport: () => void;
  handleFileDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  handleFileInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  previews: string[];
  uploadProgress: number;
}

const UploadReportCard: React.FC<UploadReportCardProps> = ({ 
  handleShareReport
}) => {
  const { files, previews, uploadProgress, handleFileDrop, handleFileInput } = useFileUpload();

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
            <h3>Uploaded Files:</h3>
            <ul>
              {files.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          </div>
        )}
        {uploadProgress > 0 && <progress value={uploadProgress} max="100" />}
        <Button onClick={handleShareReport} className="mt-4">Share Report</Button>
      </CardContent>
    </Card>
  );
};

export default UploadReportCard;
