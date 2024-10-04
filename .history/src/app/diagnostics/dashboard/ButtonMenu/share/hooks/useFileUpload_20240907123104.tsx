import { useState, useCallback } from 'react';
import { showUploadCompleteAlert } from '../alerts';

export const useFileUpload = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [uploadProgress, setUploadProgress] = useState(0);

  const generatePreviews = useCallback((newFiles: File[]) => {
    const newPreviews = newFiles.map(file => 
      file.type.startsWith('image/') ? URL.createObjectURL(file) : ''
    );
    setPreviews(prev => [...prev, ...newPreviews]);
  }, []);

  const simulateUpload = useCallback(() => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        showUploadCompleteAlert();
      }
    }, 500);
  }, []);

  const handleFiles = useCallback((newFiles: File[]) => {
    setFiles(prev => [...prev, ...newFiles]);
    generatePreviews(newFiles);
    simulateUpload();
  }, [generatePreviews, simulateUpload]);

  const handleFileDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    handleFiles(droppedFiles);
  }, [handleFiles]);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      handleFiles(selectedFiles);
    }
  }, [handleFiles]);

  return {
    files,
    previews,
    uploadProgress,
    handleFileDrop,
    handleFileInput
  };
};
