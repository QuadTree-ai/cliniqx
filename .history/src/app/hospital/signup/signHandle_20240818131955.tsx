"use client";

import { useState } from "react";
import { HospitalSignupData, defaultHospitalSignupData } from "./signupData";

export const useHospitalSignupHandlers = () => {
  const [signupData, setSignupData] = useState<HospitalSignupData>(defaultHospitalSignupData);

  // Generalized handleChange to update any field within the signupData
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    section?: keyof HospitalSignupData
  ) => {
    const { name, value, type, checked } = e.target;
    setSignupData((prevData) => ({
      ...prevData,
      [section ?? name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handling changes for nested fields such as address, contact, and administrator
  const handleNestedChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    section: keyof HospitalSignupData
  ) => {
    const { name, value, type, checked } = e.target;
    setSignupData((prevData) => ({
      ...prevData,
      [section]: {
        ...(prevData[section] as object),
        [name]: type === "checkbox" ? checked : value,
      },
    }));
  };

  // Handling array fields like services, departments, and certifications
  const handleArrayChange = (name: keyof HospitalSignupData, value: string) => {
    setSignupData((prevData) => ({
      ...prevData,
      [name]: value.split(",").map((item) => item.trim()).filter(Boolean),
    }));
  };

  // Handle changes for document uploads
  const handleDocumentUpload = (fieldName: keyof HospitalSignupData["documentUploads"], file: File | null) => {
    setSignupData((prevData) => ({
      ...prevData,
      documentUploads: {
        ...prevData.documentUploads,
        [fieldName]: file,
      },
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Further processing of signupData
    console.log("Signup Data:", signupData);
  };

  return {
    signupData,
    handleChange,
    handleNestedChange,
    handleArrayChange,
    handleDocumentUpload,
    handleSubmit,
  };
};
