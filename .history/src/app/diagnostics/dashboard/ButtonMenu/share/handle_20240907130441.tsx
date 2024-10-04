import React, { useCallback } from 'react';
import { showInvalidInputAlert, showCustomerNotFoundAlert, showErrorFetchingDataAlert, showReportSharedAlert, showUploadCompleteAlert } from './alerts';
import { PHONE_REGEX, CLINIQX_CARD_REGEX } from '../../constant';
import { fetchCustomerInfo } from '@/utils/api';
import { CustomerInfo, CustomerInfo as UICustomerInfo } from '@/types/customer';
import { Identifier } from './types';
import { mapAPICustomerToUICustomer } from '@/utils/customerMapper'; // Updated import

export const useHandlers = (customerInfo: CustomerInfo | null) => {
  const handleIdentifierChange = useCallback((e: React.ChangeEvent<HTMLInputElement>, type: keyof Identifier) => {
    return (prev: Identifier) => ({ ...prev, [type]: e.target.value });
  }, []);

  const isValidIdentifier = useCallback((identifier: Identifier) => {
    return PHONE_REGEX.test(identifier.phone) || CLINIQX_CARD_REGEX.test(identifier.cliniqx);
  }, []);

  const handleSearch = useCallback(async (
    identifier: Identifier,
    onSuccess: (customerInfo: CustomerInfo) => boolean,
    onLoading: () => void
  ) => {
    if (!isValidIdentifier(identifier)) {
      showInvalidInputAlert();
      return;
    }

    onLoading();
    try {
      const id = identifier.phone || identifier.cliniqx;
      const customerData = await fetchCustomerInfo(id);
      if (customerData) {
        const mappedCustomer = mapAPICustomerToUICustomer(customerData);
        onSuccess(mappedCustomer);
      } else {
        showCustomerNotFoundAlert();
      }
    } catch (error) {
      console.error("Error fetching customer data:", error);
      showErrorFetchingDataAlert();
    }
  }, [isValidIdentifier]);

  const handleFiles = useCallback((newFiles: File[], setFiles: React.Dispatch<React.SetStateAction<File[]>>, generatePreviews: (files: File[]) => void, simulateUpload: () => void) => {
    setFiles(prevFiles => [...prevFiles, ...newFiles]);
    generatePreviews(newFiles);
    simulateUpload();
  }, []);

  const handleFileDrop = useCallback((e: React.DragEvent<HTMLDivElement>, setFiles: React.Dispatch<React.SetStateAction<File[]>>, generatePreviews: (files: File[]) => void, simulateUpload: () => void) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    handleFiles(droppedFiles, setFiles, generatePreviews, simulateUpload);
  }, [handleFiles]);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>, setFiles: React.Dispatch<React.SetStateAction<File[]>>, generatePreviews: (files: File[]) => void, simulateUpload: () => void) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      handleFiles(selectedFiles, setFiles, generatePreviews, simulateUpload);
    }
  }, [handleFiles]);

  const generatePreviews = useCallback((files: File[], setPreviews: React.Dispatch<React.SetStateAction<string[]>>) => {
    const newPreviews = files.map(file => file.type.startsWith('image/') ? URL.createObjectURL(file) : '');
    setPreviews(prevPreviews => [...prevPreviews, ...newPreviews]);
  }, []);

  const simulateUpload = useCallback((setUploadProgress: React.Dispatch<React.SetStateAction<number>>) => {
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

  const handleShareReport = useCallback(() => {
    showReportSharedAlert();
  }, []);

  return {
    handleIdentifierChange,
    isValidIdentifier,
    handleSearch,
    handleFiles,
    handleFileDrop,
    handleFileInput,
    generatePreviews,
    simulateUpload,
    handleShareReport
  };
};
