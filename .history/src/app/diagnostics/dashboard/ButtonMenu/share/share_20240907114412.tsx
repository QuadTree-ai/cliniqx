import React, { useState, useCallback, useMemo } from 'react';
import { PHONE_REGEX, CLINIQX_CARD_REGEX } from '../../constant';
import { fetchCustomerInfo } from '@/utils/api';
import { CustomerInfo } from '@/types/customer';
import AddCustomerForm from './newcustomer';
import { showInvalidInputAlert, showCustomerNotFoundAlert, showErrorFetchingDataAlert, showUploadCompleteAlert, showReportSharedAlert, showCustomerAddedAlert } from './alerts';

interface Identifier {
  phone: string;
  cliniqx: string;
}

const UploadReportCard: React.FC = () => {
  const [identifier, setIdentifier] = useState<Identifier>({ phone: "", cliniqx: "" });
  const [files, setFiles] = useState<File[]>([]);
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [previews, setPreviews] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showAddCustomerForm, setShowAddCustomerForm] = useState(false);

  const isValidIdentifier = useMemo(() => {
    return PHONE_REGEX.test(identifier.phone) || CLINIQX_CARD_REGEX.test(identifier.cliniqx);
  }, [identifier]);

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

  const handleFiles = useCallback((newFiles: File[]) => {
    setFiles(prevFiles => [...prevFiles, ...newFiles]);
    generatePreviews(newFiles);
    simulateUpload();
  }, []);

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

  const generatePreviews = useCallback((files: File[]) => {
    const newPreviews = files.map(file => file.type.startsWith('image/') ? URL.createObjectURL(file) : '');
    setPreviews(prevPreviews => [...prevPreviews, ...newPreviews]);
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

  const handleShareReport = useCallback(() => {
    // Implement report sharing logic here
    showReportSharedAlert();
  }, []);

  const handleAddCustomer = useCallback((newCustomer: CustomerInfo) => {
    setCustomerInfo(newCustomer);
    setShowAddCustomerForm(false);
    showCustomerAddedAlert();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <SearchPatientCard
        identifier={identifier}
        handleIdentifierChange={handleIdentifierChange}
        handleSearch={handleSearch}
        isLoading={isLoading}
        setShowAddCustomerForm={setShowAddCustomerForm}
      />

      <PatientInfoCard customerInfo={customerInfo} />

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