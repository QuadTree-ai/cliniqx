// src/app/hospital/signup/signupData.tsx

export interface HospitalSignupData {
    hospitalName: string;
    address: {
      street: string;
      city: string;
      state: string;
      postalCode: string;
      country: string;
      latitude?: string; // Optional for location tracking
      longitude?: string; // Optional for location tracking
    };
    contact: {
      phoneNumber: string;
      email: string;
      fax?: string;
      tollFreeNumber?: string; // Optional for toll-free contact
    };
    website?: string;
    hospitalType: string; // e.g., General, Specialty, Teaching, etc.
    accreditation: string;
    services: string[]; // e.g., ["Cardiology", "Orthopedics", "Radiology"]
    numberOfBeds: number;
    departments: string[]; // List of hospital departments
    medicalEquipment: string[]; // List of available medical equipment
  
    administrator: {
      name: string;
      role: string;
      contactNumber: string;
      email: string;
      yearsOfExperience?: number; // Optional to track the administrator's experience
    };
  
    emergencyContact: {
      name: string;
      phoneNumber: string;
      email?: string;
      relationship?: string; // Optional to specify relationship (e.g., Emergency Head)
    };
  
    insuranceProviders: string[]; // e.g., ["Aetna", "Cigna", "UnitedHealthcare"]
  
    hospitalFacilities: string[]; // e.g., ["ICU", "Emergency", "Neonatal Unit"]
    staffCapacity: {
      doctors: number;
      nurses: number;
      technicians: number;
      adminStaff: number;
    };
    affiliations: string[]; // List of affiliations (universities, other hospitals, etc.)
    certifications: string[]; // Additional certifications the hospital holds
    establishedYear: number; // Year the hospital was established
    patientCapacity: number; // Number of patients that can be admitted
    availableSpecialties: string[]; // List of specialties offered
    ambulanceServices: boolean; // Whether ambulance services are available
    telemedicineServices: boolean; // Whether telemedicine services are available
  
    // Added: Document uploads for specific licenses and certificates
    documentUploads: {
      certificateOfRegistration: File | null;
      license: File | null;
      pharmacyLicense: File | null;
      clinicalEstablishmentLicense: File | null;
      bioMedicalWasteAuthorization: File | null;
    };
  }
  
  export const defaultHospitalSignupData: HospitalSignupData = {
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
    },
  
    emergencyContact: {
      name: "",
      phoneNumber: "",
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
    establishedYear: new Date().getFullYear(), // Default to current year
    patientCapacity: 0,
    availableSpecialties: [],
    ambulanceServices: false,
    telemedicineServices: false,
  
    // Default document uploads as null
    documentUploads: {
      certificateOfRegistration: null,
      license: null,
      pharmacyLicense: null,
      clinicalEstablishmentLicense: null,
      bioMedicalWasteAuthorization: null,
    },
  };
  