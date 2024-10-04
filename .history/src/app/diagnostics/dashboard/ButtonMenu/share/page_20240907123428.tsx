import React, { useState } from 'react';
import { CustomerInfo } from '@/types/customer';
import AddCustomerForm from './newcustomer';
import SearchPatient from './searchpaitent';
import PatientInfoCard from './PatientInfoCard';
import UploadReportsCard from './upload';
import { useFileUpload } from './hooks/useFileUpload';
import { useCustomerSearch } from './hooks/useCustomerSearch';
import { useHandlers } from './handle';

const UploadReportCard: React.FC = () => {
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo | null>(null);
  const [showAddCustomerForm, setShowAddCustomerForm] = useState(false);

  const { files, previews, uploadProgress, handleFileDrop, handleFileInput } = useFileUpload();
  const { identifier, isLoading, handleIdentifierChange, handleSearch } = useCustomerSearch(setCustomerInfo);
  const { handleShareReport } = useHandlers();

  const handleAddCustomer = (newCustomer: CustomerInfo) => {
    setCustomerInfo(newCustomer);
    setShowAddCustomerForm(false);
  };

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <SearchPatient
        identifier={identifier}
        handleIdentifierChange={handleIdentifierChange}
        handleSearch={handleSearch}
        isLoading={isLoading}
        onAddNewPatient={() => setShowAddCustomerForm(true)}
      />

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