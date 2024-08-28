import { toast } from '@/components/ui/use-toast';

type FileHandleProps = {
  file: File | null;
  onUploadSuccess: (uploadedInsights: Array<{ part: string; problem: string; severity: 'low' | 'moderate' | 'high' }>) => void;
  onUploadStart: () => void;
  onUploadEnd: () => void;
  onError: (errorMessage: string) => void;
};

export const handleFileUpload = async ({ file, onUploadSuccess, onUploadStart, onUploadEnd, onError }: FileHandleProps) => {
  if (!file) {
    toast({
      title: "No file selected",
      description: "Please select a file to upload.",
      variant: "destructive",
    });
    return;
  }

  const formData = new FormData();
  formData.append('file', file);

  onUploadStart(); // Notify that the upload process has started

  try {
    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (response.ok) {
      toast({
        title: "Upload successful",
        description: `${file.name} has been uploaded successfully.`,
        variant: "default",
      });
      onUploadSuccess(data.insights); // Pass the insights to the parent
    } else {
      throw new Error(data.message || "Upload failed");
    }
  } catch (error) {
    if (error instanceof Error) {
      onError(error.message || "There was an error uploading the file.");
      toast({
        title: "Upload failed",
        description: error.message || "There was an error uploading the file.",
        variant: "destructive",
      });
    } else {
      onError("An unknown error occurred.");
      toast({
        title: "Upload failed",
        description: "An unknown error occurred.",
        variant: "destructive",
      });
    }
  } finally {
    onUploadEnd(); // Notify that the upload process has finished
  }
};
