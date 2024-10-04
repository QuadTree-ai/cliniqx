import { useCallback, useState, useEffect } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { PHONE_REGEX, CLINIQX_CARD_REGEX } from '../../constant';
import { fetchCustomerInfo } from '@/utils/api';
import { CustomerInfo } from '@/types/customer';
import { Identifier } from './types';
import { mapAPICustomerToUICustomer } from '@/utils/customerMapper';

// Alert functions
const useAlerts = () => {
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

export { useAlerts };

// Handlers
export const useHandlers = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [identifier, setIdentifier] = useState<Identifier>({ phone: '', cliniqx: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showAddCustomerForm, setShowAddCustomerForm] = useState(false);

  const { toast } = useToast();

  const isValidIdentifier = useCallback((identifier: Identifier) => {
    return PHONE_REGEX.test(identifier.phone) || CLINIQX_CARD_REGEX.test(identifier.cliniqx);
  }, []);

  const handleSearch = useCallback(async (
    identifier: Identifier,
    onSuccess: (customerInfo: CustomerInfo) => void,
    onLoading: () => void
  ): Promise<boolean> => {
    console.log("handleSearch called with identifier:", identifier);
    if (!isValidIdentifier(identifier)) {
      toast({
        title: "Invalid Input",
        description: "Please enter a valid phone number or CliniQX card number.",
      });
      return false;
    }

    onLoading();
    try {
      const id = identifier.phone || identifier.cliniqx;
      console.log("Fetching customer info for id:", id);
      const customerData = await fetchCustomerInfo(id);
      console.log("Fetched customer data:", customerData);
      if (customerData) {
        const mappedCustomer = mapAPICustomerToUICustomer(customerData);
        onSuccess(mappedCustomer);
        return true;
      } else {
        toast({
          title: "Patient Not Found",
          description: "No patient found with the provided identifier. You can add a new patient.",
        });
        return false;
      }
    } catch (error) {
      console.error("Error fetching customer data:", error);
      toast({
        title: "Error",
        description: "An error occurred while fetching patient data.",
      });
      return false;
    }
  }, [isValidIdentifier, toast]);

  const handleIdentifierChange = useCallback((e: React.ChangeEvent<HTMLInputElement>, type: keyof Identifier) => {
    setIdentifier(prev => ({ ...prev, [type]: e.target.value }));
  }, []);

  const handleSearchCustomer = useCallback(async () => {
    console.log("handleSearchCustomer called");
    setIsLoading(true);
    setError(null);
    const result = await handleSearch(
      identifier,
      (fetchedCustomerInfo: CustomerInfo) => {
        console.log("Customer info fetched:", fetchedCustomerInfo);
        setCustomerInfo(fetchedCustomerInfo);
        setIsLoading(false);
      },
      () => setIsLoading(true)
    );
    console.log("Search result:", result);
    if (!result) {
      setError('Patient not found');
      setCustomerInfo(null);
    }
    setIsLoading(false);
  }, [identifier, handleSearch]);

  const handleAddCustomer = useCallback((newCustomer: CustomerInfo) => {
    if (!newCustomer.name || !newCustomer.phone || !newCustomer.location) {
      showInvalidInputAlert();
      return;
    }
    try {
      // Add logic to save the new customer to your backend
      showCustomerAddedAlert();
      setShowAddCustomerForm(false);
      setCustomerInfo(newCustomer);
    } catch (error) {
      console.error('Error adding customer:', error);
      setError('Failed to add customer. Please try again.');
    }
  }, []);

  const handleFileDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
    setPreviews(acceptedFiles.map(file => URL.createObjectURL(file)));
  }, []);

  const handleFileInput = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const fileList = Array.from(event.target.files);
      setFiles(fileList);
      setPreviews(fileList.map(file => URL.createObjectURL(file)));
    }
  }, []);

  const handleShareReport = useCallback(() => {
    showReportSharedAlert();
  }, []);

  // Cleanup function for file previews
  useEffect(() => {
    return () => {
      previews.forEach(URL.revokeObjectURL);
    };
  }, [previews]);

  return {
    handleSearch,
    handleFileDrop,
    handleFileInput,
    handleShareReport,
    handleIdentifierChange,
    handleSearchCustomer,
    handleAddCustomer,
    files,
    previews,
    uploadProgress,
    identifier,
    isLoading,
    customerInfo,
    error,
    showAddCustomerForm,
    setShowAddCustomerForm,
  };
};
