// src/app/hospital/signup/signHandle.tsx
import { useState, ChangeEvent, FormEvent } from 'react';
import { HospitalSignupData, defaultHospitalSignupData } from './signupData';

export const useHospitalSignupHandlers = () => {
  const [signupData, setSignupData] = useState<HospitalSignupData>(defaultHospitalSignupData);

  // Handle text-based input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, section?: keyof HospitalSignupData) => {
    const { name, value, type } = e.target;
    setSignupData(prevData => ({
      ...prevData,
      [section ?? name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  // Handle array-based input changes (for services, affiliations, etc.)
  const handleArrayChange = (name: keyof HospitalSignupData, value: string) => {
    setSignupData(prevData => ({
      ...prevData,
      [name]: value.split(', ').filter(Boolean),
    }));
  };

  // Handle boolean changes (specifically for checkboxes)
  const handleBooleanChange = (name: keyof HospitalSignupData, value: boolean) => {
    setSignupData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Signup Data:', signupData);
  };

  return {
    signupData,
    handleChange,
    handleArrayChange,
    handleBooleanChange,
    handleSubmit,
  };
};
