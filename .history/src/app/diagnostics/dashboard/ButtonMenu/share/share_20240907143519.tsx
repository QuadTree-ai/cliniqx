import React, { useState, useCallback } from 'react';
import { CustomerInfo } from '@/types/customer';
import AddCustomerForm from './newcustomer';
import SearchPatient from './searchpaitent';
import PatientInfoCard from './PatientInfoCard';
import UploadReportCard from './upload';
import { showCustomerAddedAlert, showInvalidInputAlert, useHandlers } from './handlersAndAlerts';
import { Identifier } from './types';

const ShareComponent: React.FC = () => {
  const [showAddCustomerForm, setShowAddCustomerForm] = useState(false);
  const [identifier, setIdentifier] = useState<Identifier>({ phone: '', cliniqx: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo | null>(null);
  const [error, setError] = useState<string | null>(null);

  const { 
    handleSearch, 
    handleFileDrop, 
    handleFileInput, 
    files,
    previews,
    uploadProgress
  } = useHandlers();

  const handleIdentifierChange = useCallback((e: React.ChangeEvent<HTMLInputElement>, type: keyof Identifier) => {
    setIdentifier(prev => ({ ...prev, [type]: e.target.value }));
  }, []);

  const handleSearchWrapper = useCallback(async () => {
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
    } else {
      showCustomerAddedAlert();
      setShowAddCustomerForm(false);
    }
  }, []);

  const handleShareReport = () => {
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
          handleSearch={handleSearchWrapper}
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
