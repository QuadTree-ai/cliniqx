// src/app/hospital/signup/signupData.tsx

export interface HospitalSignupData {
    hospitalName: string;
    address: {
      street: string;
      city: string;
      state: string;
      postalCode: string;
      country: string;
      latitude?: string;  // Added for location tracking
      longitude?: string; // Added for location tracking
    };
    contact: {
      phoneNumber: string;
      email: string;
      fax?: string;
      tollFreeNumber?: string; // Optional field for toll-free contact
    };
    website?: string;
    hospitalType: string; // e.g., General, Specialty, Teaching, etc.
    accreditation: string;
    services: string[]; // e.g., ["Cardiology", "Orthopedics", "Radiology"]
    numberOfBeds: number;
    departments: string[]; // Added field for specifying hospital departments
    medicalEquipment: string[]; // Added field for listing medical equipment available
  
    administrator: {
      name: string;
      role: string;
      contactNumber: string;
      email: string;
      yearsOfExperience?: number; // Added to track the experience of the administrator
    };
  
    emergencyContact: {
      name: string;
      phoneNumber: string;
      email?: string;
      relationship?: string; // Added to specify the relationship to the hospital (e.g., Emergency Head)
    };
  
    insuranceProviders: string[]; // e.g., ["Aetna", "Cigna", "UnitedHealthcare"]
    
    // Added new fields
    hospitalFacilities: string[]; // e.g., ["ICU", "Emergency", "Neonatal Unit"]
    staffCapacity: {
      doctors: number;
      nurses: number;
      technicians: number;
      adminStaff: number;
    };
    affiliations: string[]; // Added to track hospital affiliations with universities or other hospitals
    certifications: string[]; // Additional certifications the hospital holds
    establishedYear: number; // Added field for the year the hospital was established
    patientCapacity: number; // Added field to define the number of patients that can be admitted
    availableSpecialties: string[]; // List of specialties offered in the hospital
    ambulanceServices: boolean; // Added a boolean field to check if ambulance service is available
    telemedicineServices: boolean; // Added a boolean field to check if telemedicine services are available
  }
  
  export const defaultHospitalSignupData: HospitalSignupData = {
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
    departments: [], // Initialized as empty
    medicalEquipment: [], // Initialized as empty
  
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
    
    // Default values for new fields
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
  };
  