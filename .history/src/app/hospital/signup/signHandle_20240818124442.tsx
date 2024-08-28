// src/app/hospital/signup/signHandle.tsx
import { useState } from 'react';
import { HospitalSignupData, defaultHospitalSignupData } from './signupData';

export const useHospitalSignupHandlers = () => {
  const [signupData, setSignupData] = useState<HospitalSignupData>(defaultHospitalSignupData);

  // Simplified handleChange function to handle most text-based inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, section?: keyof HospitalSignupData) => {
    const { name, value, type } = e.target;
    setSignupData(prevData => ({
      ...prevData,
      [section ?? name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  // Handle changes for array fields like services and affiliations
  const handleArrayChange = (name: keyof HospitalSignupData, value: string) => {
    setSignupData(prevData => ({
      ...prevData,
      [name]: value.split(', ').filter(Boolean),
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup Data:', signupData);
  };

  return {
    signupData,
    handleChange,
    handleArrayChange,
    handleSubmit,
  };
};
