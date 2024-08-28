// src/app/hospital/signup/signupData.tsx

export interface HospitalSignupData {
    hospitalName: string;
    address: {
      street: string;
      city: string;
      state: string;
      postalCode: string;
      country: string;
    };
    contact: {
      phoneNumber: string;
      email: string;
      fax?: string;
    };
    website?: string;
    hospitalType: string; // e.g., General, Specialty, Teaching, etc.
    accreditation: string;
    services: string[]; // e.g., ["Cardiology", "Orthopedics", "Radiology"]
    numberOfBeds: number;
    administrator: {
      name: string;
      role: string;
      contactNumber: string;
      email: string;
    };
    emergencyContact: {
      name: string;
      phoneNumber: string;
      email?: string;
    };
    insuranceProviders: string[]; // e.g., ["Aetna", "Cigna", "UnitedHealthcare"]
  }
  
  export const defaultHospitalSignupData: HospitalSignupData = {
    hospitalName: '',
    address: {
      street: '',
      city: '',
      state: '',
      postalCode: '',
      country: ''
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
    administrator: {
      name: '',
      role: '',
      contactNumber: '',
      email: ''
    },
    emergencyContact: {
      name: '',
      phoneNumber: '',
    },
    insuranceProviders: []
  };
  