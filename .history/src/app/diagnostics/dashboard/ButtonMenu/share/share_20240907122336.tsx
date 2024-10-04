import React, { useState, useCallback, useMemo } from 'react';
import { PHONE_REGEX, CLINIQX_CARD_REGEX } from '../../constant';
import { fetchCustomerInfo } from '@/utils/api';
import { CustomerInfo } from '@/types/customer';
import AddCustomerForm from './newcustomer';
import SearchPatient from './searchpaitent';
import PatientInfoCard from './PatientInfoCard';
import UploadReportsCard from './upload';
import { showInvalidInputAlert, showCustomerNotFoundAlert, showErrorFetchingDataAlert, showUploadCompleteAlert, showReportSharedAlert, showCustomerAddedAlert } from './alerts';
import { Identifier } from './types';
import { UploadReportsCardProps } from './types'; // Ensure this import exists

const UploadReportCard: React.FC = () => {
  const [identifier, setIdentifier] = useState<Identifier>({ phone: "", cliniqx: "" });
  const [files, setFiles] = useState<File[]>([]);
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [previews, setPreviews] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showAddCustomerForm, setShowAddCustomerForm] = useState(false);

  const isValidIdentifier = useMemo(() => 
    PHONE_REGEX.test(identifier.phone) || CLINIQX_CARD_REGEX.test(identifier.cliniqx),
  [identifier]);

  const handleIdentifierChange = useCallback((e: React.ChangeEvent<HTMLInputElement>, type: keyof Identifier) => {
    setIdentifier(prev => ({ ...prev, [type]: e.target.value }));
  }, []);

  const handleSearch = useCallback(async () => {
    if (!isValidIdentifier) {
      showInvalidInputAlert();
      return;
    }

    setIsLoading(true);
    try {
      const id = identifier.phone || identifier.cliniqx;
      const customerData = await fetchCustomerInfo(id);
      setCustomerInfo(customerData || null);
      if (!customerData) {
        showCustomerNotFoundAlert();
      }
    } catch (error) {
      console.error("Error fetching customer data:", error);
      showErrorFetchingDataAlert();
    } finally {
      setIsLoading(false);
    }
  }, [identifier, isValidIdentifier]);

  const generatePreviews = useCallback((files: File[]) => {
    const newPreviews = files.map(file => 
      file.type.startsWith('image/') ? URL.createObjectURL(file) : ''
    );
    setPreviews(prev => [...prev, ...newPreviews]);
  }, []);

  const simulateUpload = useCallback(() => {
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

  const handleFiles = useCallback((newFiles: File[]) => {
    setFiles(prev => [...prev, ...newFiles]);
    generatePreviews(newFiles);
    simulateUpload();
  }, [generatePreviews, simulateUpload]);

  const handleFileDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    handleFiles(droppedFiles);
  }, [handleFiles]);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      handleFiles(selectedFiles);
    }
  }, [handleFiles]);

  const handleShareReport = useCallback(() => {
    showReportSharedAlert();
  }, []);

  const handleAddCustomer = useCallback((newCustomer: CustomerInfo) => {
    setCustomerInfo(newCustomer);
    setShowAddCustomerForm(false);
    showCustomerAddedAlert();
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