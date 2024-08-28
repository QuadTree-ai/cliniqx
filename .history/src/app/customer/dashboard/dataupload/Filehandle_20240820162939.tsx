import { toast } from '@/components/ui/use-toast';

export const handleFileUpload = async (file: File, onUploadSuccess: (insights: any) => void, onError: (message: string) => void, onLoading: (isLoading: boolean) => void) => {
  if (!file) {
    toast({ title: "No file selected", description: "Please select a file to upload.", variant: "destructive" });
    return;
  }
  
  onLoading(true);

  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await fetch('/api/upload-and-analyze', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to upload and analyze the file.');
    }

    const data = await response.json();
    onUploadSuccess(data.insights);
  } catch (error) {
    onError(error instanceof Error ? error.message : 'An unknown error occurred.');
  } finally {
    onLoading(false);
  }
};
