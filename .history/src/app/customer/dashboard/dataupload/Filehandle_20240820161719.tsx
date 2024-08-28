// src/app/customer/dashboard/dataupload/FileHandle.tsx

import { toast } from '@/components/ui/use-toast';

export const handleFileUpload = async (
  file: File,
  onUploadSuccess: (text: string) => void,
  onError: (message: string) => void,
  onLoading: (isLoading: boolean) => void
) => {
  if (!file) {
    toast({
      title: "No file selected",
      description: "Please select a file to upload.",
      variant: "destructive",
    });
    return;
  }

  onLoading(true);

  try {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("/api/upload-and-extract", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to upload and extract the file.");
    }

    onUploadSuccess(data.text); // Pass extracted text to the next stage
  } catch (error: any) {
    onError(error.message);
  } finally {
    onLoading(false);
  }
};
