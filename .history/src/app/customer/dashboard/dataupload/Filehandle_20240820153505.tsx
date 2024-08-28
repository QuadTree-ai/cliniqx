import { toast } from '@/components/ui/use-toast';

type FileHandleOptions = {
  file: File | null;
  onUploadSuccess: (insights: Array<{ part: string; problem: string; severity: 'low' | 'moderate' | 'high' }>) => void;
  onUploadStart: () => void;
  onUploadEnd: () => void;
  onError: (errorMessage: string) => void;
};

export const handleFileUpload = async ({
  file,
  onUploadSuccess,
  onUploadStart,
  onUploadEnd,
  onError,
}: FileHandleOptions) => {
  if (!file) {
    toast({
      title: "No file selected",
      description: "Please select a file to upload.",
      variant: "destructive",
    });
    return;
  }

  onUploadStart();

  try {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('/api/upload-and-analyze', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error from API:', errorData);
      onError(errorData.message || 'Failed to upload and analyze the file.');
      return;
    }

    const data = await response.json();
    onUploadSuccess(data.insights); // Pass the extracted insights to the parent component

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred during upload.';
    console.error('Error during file upload:', errorMessage);
    onError(errorMessage);
  } finally {
    onUploadEnd();
  }
};
