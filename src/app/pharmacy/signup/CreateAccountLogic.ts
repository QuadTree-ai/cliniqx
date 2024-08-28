import { useState } from 'react';
import axios from 'axios';

interface FormData {
  storeName: string;
  licenseNumber: string;
  gstNumber: string;
  latitude: string;
  longitude: string;
  deliverySystem: string;
  ownerName: string;
  contactNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
  storeImage: File | null;
  address: string;
  pinCode: string;
  area: string;
  city: string;
  country: string;
}

export const useCreateAccount = () => {
  const [formData, setFormData] = useState<FormData>({
    storeName: '',
    licenseNumber: '',
    gstNumber: '',
    latitude: '',
    longitude: '',
    deliverySystem: 'Yes', // Set a default value for the delivery system
    ownerName: '',
    contactNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    storeImage: null,
    address: '',
    pinCode: '',
    area: '',
    city: '',
    country: 'India',
  });

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isNotSuccessModalOpen, setIsNotSuccessModalOpen] = useState(false);
  const [accountNumber, setAccountNumber] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, files } = e.target as HTMLInputElement;
    if (files) {
      setFormData((prev) => ({ ...prev, storeImage: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return { success: false, message: 'Passwords do not match' };
    }

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key as keyof FormData] as string | Blob);
    });

    setLoading(true);
    setError(null);

    try {
      console.log('Submitting form data:', formDataToSend);
      const response = await axios.post('/api/users/sign-up', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Response from server:', response);

      if (response.status === 201) {
        setAccountNumber(response.data.accountNumber);
        setIsSuccessModalOpen(true);
        return { success: true, accountNumber: response.data.accountNumber };
      } else {
        setError(response.data.message || 'Failed to create account. Please try again.');
        setIsNotSuccessModalOpen(true);
        return { success: false, message: 'Failed to create account. Please try again.' };
      }
    } catch (error) {
      console.error('Account creation error:', error);
      setError('Failed to create account. Please try again.');
      setIsNotSuccessModalOpen(true);
      return { success: false, message: 'Failed to create account. Please try again.' };
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    error,
    loading,
    handleChange,
    handleSubmit,
    isReviewModalOpen,
    setIsReviewModalOpen,
    isSuccessModalOpen,
    setIsSuccessModalOpen,
    isNotSuccessModalOpen,
    setIsNotSuccessModalOpen,
    accountNumber,
  };
};
