// Enums for predefined categories
export enum HospitalType {
  General = "General",
  Specialty = "Specialty",
  Teaching = "Teaching",
  Community = "Community",
  Research = "Research"
}

export enum Relationship {
  EmergencyHead = "Emergency Head",
  MedicalDirector = "Medical Director",
  ChiefOfStaff = "Chief of Staff",
  NurseInCharge = "Nurse In-Charge",
  Administrator = "Administrator"
}

export enum CertificationType {
  CertificateOfRegistration = "Certificate of Registration",
  License = "License",
  PharmacyLicense = "Pharmacy License",
  ClinicalEstablishmentLicense = "Clinical Establishment License",
  BioMedicalWasteAuthorization = "Bio-medical Waste Authorization"
}

// Interface for Hospital Signup Data
export interface HospitalSignupData {
  hospitalName: string;
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    latitude?: string; 
    longitude?: string;
  };
  contact: {
    phoneNumber: string;
    email: string;
    fax?: string;
    tollFreeNumber?: string;
  };
  website?: string;
  hospitalType: HospitalType; 
  accreditation: string;
  services: string[]; 
  numberOfBeds: number;
  departments: string[]; 
  medicalEquipment: string[]; 

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
    relationship: Relationship;
  };

  insuranceProviders: string[]; 
  hospitalFacilities: string[]; 
  staffCapacity: {
    doctors: number;
    nurses: number;
    technicians: number;
    adminStaff: number;
  };
  affiliations: string[]; 
  certifications: string[]; 
  establishedYear: number;
  patientCapacity: number;
  availableSpecialties: string[]; 
  ambulanceServices: boolean;
  telemedicineServices: boolean;

  documentUploads: Record<CertificationType, File | null>;
}

// Default Data
export const defaultHospitalSignupData: HospitalSignupData = {
  hospitalName: "",
  address: {
    street: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    latitude: "",
    longitude: "",
  },
  contact: {
    phoneNumber: "",
    email: "",
    fax: "",
    tollFreeNumber: "",
  },
  website: "",
  hospitalType: HospitalType.General,
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
    yearsOfExperience: 0,
  },

  emergencyContact: {
    name: "",
    phoneNumber: "",
    email: "",
    relationship: Relationship.EmergencyHead,
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

  documentUploads: {
    [CertificationType.CertificateOfRegistration]: null,
    [CertificationType.License]: null,
    [CertificationType.PharmacyLicense]: null,
    [CertificationType.ClinicalEstablishmentLicense]: null,
    [CertificationType.BioMedicalWasteAuthorization]: null,
  },
};
