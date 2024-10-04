import { useToast } from "@/components/ui/use-toast";

export const useAlerts = () => {
  const { toast } = useToast();

  return {
    showInvalidInputAlert: () => {
      toast({
        title: "Invalid Input",
        description: "Please enter a valid phone number or CliniQX card number.",
      });
    },
    showCustomerNotFoundAlert: () => {
      toast({
        title: "Patient Not Found",
        description: "No patient found with the provided identifier. You can add a new patient.",
      });
    },
    showErrorFetchingDataAlert: () => {
      toast({
        title: "Error",
        description: "An error occurred while fetching patient data.",
      });
    },
    showUploadCompleteAlert: () => {
      toast({
        title: "Upload Complete",
        description: "Files have been successfully uploaded.",
      });
    },
    showReportSharedAlert: () => {
      toast({
        title: "Report Shared",
        description: "The report has been successfully shared.",
      });
    },
    showCustomerAddedAlert: () => {
      toast({
        title: "Customer Added",
        description: "New customer has been successfully added.",
      });
    },
  };
};
