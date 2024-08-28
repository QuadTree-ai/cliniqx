import React, { useState } from 'react';
import HospitalDetails from './HospitalDetails';
import OwnerDetails from './OwnerDetails';
import AddressDetails from './AddressDetails';
import FileUploadSection from './FileUploadSection';
import SubmitButton from './SubmitButton';
import { Form } from '@/components/ui/form';

const HospitalSignupForm: React.FC = () => {
  const [formData, setFormData] = useState({
    hospitalName: '',
    registrationNumber: '',
    hospitalType: '',
    ownerName: '',
    email: '',
    phone: '',
    address: '',
    documents: []
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (files: FileList | null) => {
    if (files) {
      const fileArray = Array.from(files);
      setFormData({ ...formData, documents: fileArray });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add API submission logic here
    console.log(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <HospitalDetails handleChange={handleChange} />
      <OwnerDetails handleChange={handleChange} />
      <AddressDetails handleChange={handleChange} />
      <FileUploadSection handleFileChange={handleFileChange} />
      <SubmitButton />
    </Form>
  );
};

export default HospitalSignupForm;
