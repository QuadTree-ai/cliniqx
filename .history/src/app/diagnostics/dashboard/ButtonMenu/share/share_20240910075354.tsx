import React from 'react';
import AddCustomerForm from './newcustomer';
import SearchPatient from './searchpaitent';
import PatientInfoCard from './PatientInfoCard';
import UploadReportCard from './upload';
import { useHandlers } from './handle';
import { Card, CardContent } from "@/components/ui/card";

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
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="col-span-1 md:col-span-2">
          <CardContent className="p-6">
            <SearchPatient
              identifier={identifier}
              handleIdentifierChange={handleIdentifierChange}
              handleSearch={handleSearchCustomer}
              isLoading={isLoading}
              onAddNewPatient={() => setShowAddCustomerForm(true)}
            />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <PatientInfoCard customerInfo={customerInfo} isLoading={isLoading} />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <UploadReportCard
              files={files}
              handleShareReport={handleShareReport}
              handleFileDrop={handleFileDrop}
              handleFileInput={handleFileInput}
              previews={previews}
              uploadProgress={uploadProgress}
            />
          </CardContent>
        </Card>
      </div>
      {showAddCustomerForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <AddCustomerForm
            onClose={() => setShowAddCustomerForm(false)}
            onAdd={handleAddCustomer}
          />
        </div>
      )}
    </div>
  );
};

export default ShareComponent;
