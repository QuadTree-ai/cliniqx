import React from 'react';
import { toast } from "@/components/ui/use-toast";
import { PHONE_REGEX, CLINIQX_CARD_REGEX } from '../../constant';
import { fetchCustomerInfo } from '@/utils/api';
import { CustomerInfo as UICustomerInfo } from '@/types/customer';

export const useHandlers = () => {
  const handleIdentifierChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'phone' | 'cliniqx', setIdentifier: React.Dispatch<React.SetStateAction<{ phone: string; cliniqx: string }>>) => {
    const value = e.target.value;
    setIdentifier(prev => ({ ...prev, [type]: value }));
  };

  const isValidIdentifier = (identifier: { phone: string; cliniqx: string }) => {
    return (PHONE_REGEX.test(identifier.phone) || CLINIQX_CARD_REGEX.test(identifier.cliniqx));
  };

  const handleSearch = async (identifier: { phone: string; cliniqx: string }, setCustomerInfo: React.Dispatch<React.SetStateAction<UICustomerInfo | null>>) => {
    if (!isValidIdentifier(identifier)) {
      toast({
        title: "Invalid Input",
        description: "Please enter a valid phone number or CliniQX card number.",
        variant: "destructive",
      });
      return;
    }
  
    try {
      const id = identifier.phone || identifier.cliniqx;
      const customerData = await fetchCustomerInfo(id);
      if (customerData) {
        setCustomerInfo(customerData as unknown as UICustomerInfo);
      } else {
        toast({
          title: "Customer Not Found",
          description: "No customer found with the provided identifier.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error fetching customer data:", error);
      toast({
        title: "Error",
        description: "An error occurred while fetching customer data.",
        variant: "destructive",
      });
    }
  };

  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>, setFiles: React.Dispatch<React.SetStateAction<File[]>>, generatePreviews: (files: File[]) => void, simulateUpload: () => void) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles(prevFiles => [...prevFiles, ...droppedFiles]);
    generatePreviews(droppedFiles);
    simulateUpload();
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>, setFiles: React.Dispatch<React.SetStateAction<File[]>>, generatePreviews: (files: File[]) => void, simulateUpload: () => void) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      setFiles(prevFiles => [...prevFiles, ...selectedFiles]);
      generatePreviews(selectedFiles);
      simulateUpload();
    }
  };

  const handleShareReport = (customerInfo: CustomerInfo | null) => {
    const customerName = customerInfo?.name || "Customer";
    const now = new Date();
    const formattedDate = now.toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });
    const shortDate = now.toLocaleDateString('en-US', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit'
    });

    console.log("Sharing report:", customerName, shortDate, formattedDate);
    toast({
      title: "Report Shared",
      description: `${customerName} has been notified on ${shortDate}, ${formattedDate}.`,
    });
  };

  return {
    handleIdentifierChange,
    isValidIdentifier,
    handleSearch,
    handleFileDrop,
    handleFileInput,
    handleShareReport
  };
};
