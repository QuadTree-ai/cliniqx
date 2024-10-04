import { useCallback, useState, useEffect } from 'react';
import { toast } from "sonner";
import { PHONE_REGEX, CLINIQX_CARD_REGEX } from '../../constant';
import { fetchCustomerInfo } from '@/utils/api';
import { CustomerInfo } from '@/types/customer';
import { Identifier } from './types';
import { mapAPICustomerToUICustomer } from '@/utils/customerMapper';

// Alert functions
const showAlert = (title: string, description: string) => {
  toast.success(title, { description });
};

export const showInvalidInputAlert = () => showAlert("Invalid Input", "Please enter a valid phone number or CliniQX card number.");
export const showCustomerNotFoundAlert = () => showAlert("Customer Not Found", "No customer found with the provided identifier. You can add a new customer.");
export const showErrorFetchingDataAlert = () => showAlert("Error", "An error occurred while fetching customer data.");
export const showUploadCompleteAlert = () => showAlert("Upload Complete", "Files have been successfully uploaded.");
export const showReportSharedAlert = () => showAlert("Report Shared", "The report has been successfully shared.");
export const showCustomerAddedAlert = () => showAlert("Customer Added", "New customer has been successfully added.");

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

  const isValidIdentifier = useCallback((identifier: Identifier) => {
    return PHONE_REGEX.test(identifier.phone) || CLINIQX_CARD_REGEX.test(identifier.cliniqx);
  }, []);

  const handleSearch = useCallback(async (
    identifier: Identifier,
    onSuccess: (customerInfo: CustomerInfo) => void,
    onLoading: () => void
  ): Promise<boolean> => {
    if (!isValidIdentifier(identifier)) {
      showInvalidInputAlert();
      return false;
    }

    onLoading();
    try {
      const id = identifier.phone || identifier.cliniqx;
      const customerData = await fetchCustomerInfo(id);
      if (customerData) {
        const mappedCustomer = mapAPICustomerToUICustomer(customerData);
        onSuccess(mappedCustomer);
        return true;
      } else {
        showCustomerNotFoundAlert();
        return false;
      }
    } catch (error) {
      console.error("Error fetching customer data:", error);
      showErrorFetchingDataAlert();
      return false;
    }
  }, [isValidIdentifier]);

  const handleIdentifierChange = useCallback((e: React.ChangeEvent<HTMLInputElement>, type: keyof Identifier) => {
    setIdentifier(prev => ({ ...prev, [type]: e.target.value }));
  }, []);

  const handleSearchCustomer = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    const result = await handleSearch(
      identifier,
      (customerInfo: CustomerInfo) => {
        setCustomerInfo(customerInfo);
        setIsLoading(false);
      },
      () => setIsLoading(true)
    );
    if (!result) {
      setError('Customer not found');
      setIsLoading(false);
    }
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
