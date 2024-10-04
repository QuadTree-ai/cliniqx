import React, { useState, useCallback } from 'react';
import { CustomerInfo } from '@/types/customer';
import AddCustomerForm from './newcustomer';
import SearchPatient from './searchpaitent';
import PatientInfoCard from './PatientInfoCard';
import UploadReportsCard from './upload';
import { useFileUpload } from './hooks/useFileUpload';
import { useCustomerSearch } from './hooks/useCustomerSearch';
import { useHandlers } from './handle';
import { toast } from "@/components/ui/use-toast";

const UploadReportCard: React.FC = () => {
  const [showAddCustomerForm, setShowAddCustomerForm] = useState(false);

  const { files, previews, uploadProgress, handleFileDrop, handleFileInput } = useFileUpload();
  const { identifier, isLoading, customerInfo, error, handleIdentifierChange, handleSearch } = useCustomerSearch();
  const { handleShareReport } = useHandlers(customerInfo);

  const handleAddCustomer = useCallback((newCustomer: CustomerInfo) => {
    // Here you would typically send the new customer data to your backend
    // For now, we'll just update the local state
    toast({
      title: "Customer Added",
      description: "New customer has been successfully added.",
    });
    setShowAddCustomerForm(false);
  }, []);

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <SearchPatient
        identifier={identifier}
        handleIdentifierChange={handleIdentifierChange}
        handleSearch={handleSearch}
        isLoading={isLoading}
        onAddNewPatient={() => setShowAddCustomerForm(true)}
      />

      {error && <div className="text-red-500">{error}</div>}

      <PatientInfoCard customerInfo={customerInfo} isLoading={isLoading} />
      
      <UploadReportsCard
        files={files}
        handleShareReport={handleShareReport}
        handleFileDrop={handleFileDrop}
        handleFileInput={handleFileInput}
        previews={previews}
        uploadProgress={uploadProgress}
      />

      {showAddCustomerForm && (
        <AddCustomerForm
          onClose={() => setShowAddCustomerForm(false)}
          onAdd={handleAddCustomer}
        />
      )}
    </div>
  );
};

export default UploadReportCard;