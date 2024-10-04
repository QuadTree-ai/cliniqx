import { toast } from "@/components/ui/use-toast";

export const showInvalidInputAlert = () => {
  toast({
    title: "Invalid Input",
    description: "Please enter a valid phone number or CliniQX card number.",
    variant: "destructive",
  });
};

export const showCustomerNotFoundAlert = () => {
  toast({
    title: "Customer Not Found",
    description: "No customer found with the provided identifier. You can add a new customer.",
    variant: "destructive",
  });
};

export const showErrorFetchingDataAlert = () => {
  toast({
    title: "Error",
    description: "An error occurred while fetching customer data.",
    variant: "destructive",
  });
};

export const showUploadCompleteAlert = () => {
  toast({
    title: "Upload Complete",
    description: "Files have been successfully uploaded.",
    variant: "success",
  });
};

export const showReportSharedAlert = () => {
  toast({
    title: "Report Shared",
    description: "The report has been successfully shared.",
    variant: "success",
  });
};

export const showCustomerAddedAlert = () => {
  toast({
    title: "Customer Added",
    description: "New customer has been successfully added.",
    variant: "success",
  });
};
