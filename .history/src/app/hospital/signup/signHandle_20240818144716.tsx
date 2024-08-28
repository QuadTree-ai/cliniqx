"use client";

import { useState } from "react";
import { HospitalSignupData, defaultHospitalSignupData } from "./signupData";

export const useHospitalSignupHandlers = () => {
  const [signupData, setSignupData] = useState<HospitalSignupData>(defaultHospitalSignupData);

  // Generalized handler for text, checkbox, and textarea inputs
  const handleFieldChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    section?: keyof HospitalSignupData
  ) => {
    const { name, value, type, checked } = event.target as HTMLInputElement;
    const updatedValue = type === "checkbox" ? checked : value;

    setSignupData(prevData => ({
      ...prevData,
      [section ?? name]: section ? {
        ...(prevData[section] as Record<string, any>),
        [name]: updatedValue,
      } : updatedValue,
    }));
  };

  // Specific handler for array fields (e.g., services, departments)
  const handleArrayFieldChange = (name: keyof HospitalSignupData, value: string) => {
    const newValues = value.split(",").map(item => item.trim()).filter(Boolean);
    setSignupData(prevData => ({
      ...prevData,
      [name]: newValues,
    }));
  };

  // Specific handler for document uploads
  const handleDocumentUpload = (
    fieldName: keyof HospitalSignupData["documentUploads"],
    file: File | null
  ) => {
    setSignupData(prevData => ({
      ...prevData,
      documentUploads: {
        ...prevData.documentUploads,
        [fieldName]: file,
      },
    }));
  };

  // Form submission handler
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Submitted Signup Data:", signupData);
  };

  return {
    signupData,
    handleFieldChange,
    handleArrayFieldChange,
    handleDocumentUpload,
    handleSubmit,
  };
};
