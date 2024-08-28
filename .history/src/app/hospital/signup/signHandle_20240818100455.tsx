// src/app/hospital/signup/signHandle.tsx

import { HospitalSignupData } from './signupData';
import { useState } from 'react';

export const useHospitalSignupHandlers = () => {
  const [signupData, setSignupData] = useState<HospitalSignupData>({
    hospitalName: '',
    address: {
      street: '',
      city: '',
      state: '',
      postalCode: '',
      country: '',
    },
    contact: {
      phoneNumber: '',
      email: '',
    },
    website: '',
    hospitalType: '',
    accreditation: '',
    services: [],
    numberOfBeds: 0,
    departments: [],
    medicalEquipment: [],
    administrator: {
      name: '',
      role: '',
      contactNumber: '',
      email: '',
    },
    emergencyContact: {
      name: '',
      phoneNumber: '',
    },
    insuranceProviders: [],
    hospitalFacilities: [],
    staffCapacity: {
      doctors: 0,
      nurses: 0,
      technicians: 0,
      adminStaff: 0,
    },
    affiliations: [],
    certifications: [],
    establishedYear: new Date().getFullYear(),
    patientCapacity: 0,
    availableSpecialties: [],
    ambulanceServices: false,
    telemedicineServices: false,
  });

  // Handle input changes for general fields
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setSignupData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle changes for address fields
  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupData((prevData) => ({
      ...prevData,
      address: {
        ...prevData.address,
        [name]: value,
      },
    }));
  };

  // Handle changes for contact fields
  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupData((prevData) => ({
      ...prevData,
      contact: {
        ...prevData.contact,
        [name]: value,
      },
    }));
  };

  // Handle changes for administrator data
  const handleAdministratorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupData((prevData) => ({
      ...prevData,
      administrator: {
        ...prevData.administrator,
        [name]: value,
      },
    }));
  };

  // Handle changes for emergency contact data
  const handleEmergencyContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupData((prevData) => ({
      ...prevData,
      emergencyContact: {
        ...prevData.emergencyContact,
        [name]: value,
      },
    }));
  };

  // Handle changes for services, departments, insurance providers, etc. (array data)
  const handleArrayChange = (field: keyof HospitalSignupData, newValue: string[]) => {
    setSignupData((prevData) => ({
      ...prevData,
      [field]: newValue,
    }));
  };

  // Handle changes for boolean fields (checkboxes)
  const handleBooleanChange = (field: keyof HospitalSignupData, value: boolean) => {
    setSignupData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  // Handle changes for staff capacity
  const handleStaffCapacityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupData((prevData) => ({
      ...prevData,
      staffCapacity: {
        ...prevData.staffCapacity,
        [name]: Number(value),
      },
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit the signup data to the backend or further processing
    console.log('Signup Data:', signupData);
  };

  return {
    signupData,
    handleInputChange,
    handleAddressChange,
    handleContactChange,
    handleAdministratorChange,
    handleEmergencyContactChange,
    handleArrayChange,
    handleBooleanChange,
    handleStaffCapacityChange,
    handleSubmit,
  };
};
