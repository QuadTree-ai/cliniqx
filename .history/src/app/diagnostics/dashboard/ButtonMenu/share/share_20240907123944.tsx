import React from 'react';
import SearchPatient from './SearchPatient';
import PatientInfoCard from './PatientInfoCard';
import UploadReportsCard from './UploadReportsCard';
import AddCustomerForm from './AddCustomerForm';
import { useCustomerSearch } from './hooks/useCustomerSearch';
import { useFileUpload } from './hooks/useFileUpload';
import { useAddCustomer } from './hooks/useAddCustomer';

const UploadReportCard: React.FC = () => {
  const {
    identifier,
    customerInfo,
    isLoading,
    handleIdentifierChange,
    handleSearch,
  } = useCustomerSearch();

  const {
    files,
    previews,
    uploadProgress,
    handleFileDrop,
    handleFileInput,
    handleShareReport,
  } = useFileUpload();

  const {
    showAddCustomerForm,
    handleAddCustomer,
    setShowAddCustomerForm,
  } = useAddCustomer();

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
        onShareReport={handleShareReport}
        onFileDrop={handleFileDrop}
        onFileInput={handleFileInput}
        files={files}
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