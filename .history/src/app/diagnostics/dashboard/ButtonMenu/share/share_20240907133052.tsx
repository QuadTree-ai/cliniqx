import React, { useState, useCallback } from 'react';
import { CustomerInfo } from '@/types/customer';
import AddCustomerForm from './newcustomer';
import SearchPatient from './searchpaitent';
import PatientInfoCard from './PatientInfoCard';
import UploadReportCard from './upload';
import { useFileUpload } from './hooks/useFileUpload';
import { useCustomerSearch } from './hooks/useCustomerSearch';
import { toast } from "@/components/ui/use-toast";

const ShareComponent: React.FC = () => {
  const [showAddCustomerForm, setShowAddCustomerForm] = useState(false);

  const { files, previews, uploadProgress, handleFileDrop, handleFileInput } = useFileUpload();
  const { identifier, isLoading, customerInfo, error, handleIdentifierChange, handleSearch } = useCustomerSearch();

  const handleAddCustomer = useCallback((newCustomer: CustomerInfo) => {
    toast({
      title: "Customer Added",
      description: "New customer has been successfully added.",
    });
    setShowAddCustomerForm(false);
  }, []);

  const handleShareReport = () => {
    // Implement the share report functionality here
    toast({
      title: "Report Shared",
      description: "The report has been successfully shared.",
    });
  };

  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="space-y-6">
        <SearchPatient
          identifier={identifier}
          handleIdentifierChange={handleIdentifierChange}
          handleSearch={handleSearch}
          isLoading={isLoading}
          onAddNewPatient={() => setShowAddCustomerForm(true)}
        />

        {error && <div className="text-red-500">{error}</div>}

        <UploadReportCard
          files={files}
          handleShareReport={handleShareReport}
          handleFileDrop={handleFileDrop}
          handleFileInput={handleFileInput}
          previews={previews}
          uploadProgress={uploadProgress}
        />
      </div>

      <div>
        <PatientInfoCard customerInfo={customerInfo} isLoading={isLoading} />
      </div>

      {showAddCustomerForm && (
        <AddCustomerForm
          onClose={() => setShowAddCustomerForm(false)}
          onAdd={handleAddCustomer}
        />
      )}
    </div>
  );
};

export default ShareComponent;