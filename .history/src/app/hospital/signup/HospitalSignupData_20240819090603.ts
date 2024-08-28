// src/app/hospital/signup/HospitalSignupData.ts

export const initialSignupData: HospitalSignupData = {
  hospitalName: "",
  address: {
    street: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  },
  contact: {
    phoneNumber: "",
    email: "",
    fax: "",
    tollFreeNumber: "",
  },
  website: "",
  hospitalType: "",
  accreditation: "",
  services: [],
  numberOfBeds: 0,
  departments: [],
  medicalEquipment: [],
  administrator: {
    name: "",
    role: "",
    contactNumber: "",
    email: "",
    yearsOfExperience: undefined,
  },
  emergencyContact: {
    name: "",
    phoneNumber: "",
    email: "",
    relationship: "",
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
  establishedYear: 0,
  patientCapacity: 0,
  availableSpecialties: [],
  ambulanceServices: false,
  telemedicineServices: false,
};

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
    tollFreeNumber?: string;
  };
  website?: string;
  hospitalType: string; // This will be dynamically filled from JSON options
  accreditation: string;
  services: string[]; // Dynamically filled from JSON options
  numberOfBeds: number;
  departments: string[]; // Dynamically filled from JSON options
  medicalEquipment: string[]; // Dynamically filled from JSON options
  administrator: {
    name: string;
    role: string;
    contactNumber: string;
    email: string;
    yearsOfExperience?: number;
  };
  emergencyContact: {
    name: string;
    phoneNumber: string;
    email?: string;
    relationship?: string; // Dynamically filled from JSON options
  };
  insuranceProviders: string[]; // Dynamically filled from JSON options
  hospitalFacilities: string[]; // Dynamically filled from JSON options
  staffCapacity: {
    doctors: number;
    nurses: number;
    technicians: number;
    adminStaff: number;
  };
  affiliations: string[]; // Dynamically filled from JSON options
  certifications: string[]; // Dynamically filled from JSON options
  establishedYear: number;
  patientCapacity: number;
  availableSpecialties: string[]; // Dynamically filled from JSON options
  ambulanceServices: boolean;
  telemedicineServices: boolean;
}
