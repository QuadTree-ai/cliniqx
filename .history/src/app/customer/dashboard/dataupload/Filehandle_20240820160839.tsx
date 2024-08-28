import { toast } from '@/components/ui/use-toast';

export const handleFileUpload = async (file: File, onUploadSuccess: (insights: any) => void, onError: (message: string) => void, onLoading: (isLoading: boolean) => void) => {
  if (!file) {
    toast({ title: "No file selected", description: "Please select a file to upload.", variant: "destructive" });
    return;
  }
  
  onLoading(true);

  const formData = new FormData();
  formData.append('file', file);

  fetch('/api/upload-and-analyze', {
    method: 'POST',
    body: formData,
  })
  .then(response => response.json().then(data => ({ status: response.status, body: data })))
  .then(({ status, body }) => {
    if (status !== 200) {
      throw new Error(body.message || 'Failed to upload and analyze the file.');
    }
    onUploadSuccess(body.insights);
  })
  .catch(error => {
    onError(error.message);
  })
  .finally(() => {
    onLoading(false);
  });
};
