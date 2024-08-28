import hospitalOptions from './hospitalOptions.json';

export interface HospitalSignupData {
  hospitalName: string;
  address: { street: string; city: string; state: string; postalCode: string; country: string; };
  contact: { phoneNumber: string; email: string; fax?: string; tollFreeNumber?: string; };
  website?: string;
  hospitalType: string;
  accreditation: string;
  services: string[];
  numberOfBeds: number;
  departments: string[];
  medicalEquipment: string[];
  administrator: {
    name: string; role: string; contactNumber: string; email: string; yearsOfExperience?: number;
  };
  emergencyContact: { name: string; phoneNumber: string; email?: string; relationship?: string; };
  insuranceProviders: string[];
  hospitalFacilities: string[];
  staffCapacity: { doctors: number; nurses: number; technicians: number; adminStaff: number; };
  affiliations: string[];
  certifications: string[];
  establishedYear: number;
  patientCapacity: number;
  availableSpecialties: string[];
  ambulanceServices: boolean;
  telemedicineServices: boolean;
}

export const defaultHospitalSignupData: HospitalSignupData = {
  hospitalName: "",
  address: { street: "", city: "", state: "", postalCode: "", country: "" },
  contact: { phoneNumber: "", email: "", fax: "", tollFreeNumber: "" },
  website: "",
  hospitalType: hospitalOptions.hospitalTypes[0],
  accreditation: "",
  services: [],
  numberOfBeds: 0,
  departments: [],
  medicalEquipment: [],
  administrator: { name: "", role: "", contactNumber: "", email: "", yearsOfExperience: 0 },
  emergencyContact: { name: "", phoneNumber: "", email: "", relationship: hospitalOptions.relationships[0] },
  insuranceProviders: [],
  hospitalFacilities: [],
  staffCapacity: { doctors: 0, nurses: 0, technicians: 0, adminStaff: 0 },
  affiliations: [],
  certifications: [],
  establishedYear: new Date().getFullYear(),
  patientCapacity: 0,
  availableSpecialties: [],
  ambulanceServices: false,
  telemedicineServices: false,
};
