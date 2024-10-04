import React from 'react';
import AddCustomerForm from './newcustomer';
import SearchPatient from './searchpaitent';
import PatientInfoCard from './PatientInfoCard';
import UploadReportCard from './upload';
import { useHandlers } from './handlersAndAlerts';

const ShareComponent: React.FC = () => {
  const {
    handleFileDrop: handleFileDropOriginal,
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
    showAddCustomerForm,
    setShowAddCustomerForm
  } = useHandlers();

  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    handleFileDropOriginal(files);
  };

  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="space-y-6">
        <SearchPatient
          identifier={identifier}
          handleIdentifierChange={handleIdentifierChange}
          handleSearch={handleSearchCustomer}
          isLoading={isLoading}
          onAddNewPatient={() => setShowAddCustomerForm(true)}
        />
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
