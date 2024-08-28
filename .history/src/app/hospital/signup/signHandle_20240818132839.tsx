"use client";

import { useState } from "react";
import { HospitalSignupData, defaultHospitalSignupData } from "./signupData";

export const useHospitalSignupHandlers = () => {
  const [signupData, setSignupData] = useState<HospitalSignupData>(defaultHospitalSignupData);

  // Generalized handler for text, checkbox, and textarea inputs
  const handleFieldChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    section?: keyof HospitalSignupData
  ) => {
    const { name, value, type } = e.target;
    const isCheckbox = type === "checkbox";
    const fieldValue = isCheckbox ? (e.target as HTMLInputElement).checked : value;

    if (section) {
      setSignupData((prevData) => ({
        ...prevData,
        [section]: {
          ...(prevData[section] as object),
          [name]: fieldValue,
        },
      }));
    } else {
      setSignupData((prevData) => ({
        ...prevData,
        [name]: fieldValue,
      }));
    }
  };

  // Specific handler for array fields (e.g., services, departments)
  const handleArrayFieldChange = (name: keyof HospitalSignupData, value: string) => {
    setSignupData((prevData) => ({
      ...prevData,
      [name]: value
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
    }));
  };

  // Specific handler for document uploads
  const handleDocumentUpload = (
    fieldName: keyof HospitalSignupData["documentUploads"],
    file: File | null
  ) => {
    setSignupData((prevData) => ({
      ...prevData,
      documentUploads: {
        ...prevData.documentUploads,
        [fieldName]: file,
      },
    }));
  };

  // Form submission handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
