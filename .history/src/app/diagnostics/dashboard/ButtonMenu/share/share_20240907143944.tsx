import React from 'react';
import AddCustomerForm from './newcustomer';
import SearchPatient from './searchpaitent';
import PatientInfoCard from './PatientInfoCard';
import UploadReportCard from './upload';
import { useHandlers } from './handlersAndAlerts';

const ShareComponent: React.FC = () => {
  const {
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
    setShowAddCustomerForm
  } = useHandlers();

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

        {error && <div className="text-red-500">{error}</div>}

        <UploadReportCard
          files={files}
          handleShareReport={handleShareReport}
          handleFileDrop={(e) => handleFileDrop(Array.from(e.dataTransfer.files))}
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
