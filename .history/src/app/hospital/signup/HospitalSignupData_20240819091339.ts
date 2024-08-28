// src/app/hospital/signup/HospitalSignupData.ts

// Define utility types for common sub-structures
type ContactInfo = {
  phoneNumber: string;
  email: string;
  fax?: string;
  tollFreeNumber?: string;
};

type Address = {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
};

type Person = {
  name: string;
  role: string;
  contactNumber: string;
  email: string;
  yearsOfExperience?: number;
};

// Define form field configuration interface
interface FormField {
  label: string;
  name: string;
  type: 'text' | 'email' | 'tel' | 'select';
  placeholder: string;
  options?: string[];
  optional?: boolean;
}

// Define sections for dynamic form field configurations
interface FormSection {
  general: FormField[];
  contact: FormField[];
  address: FormField[];
  dynamicOptions?: DynamicOptions; // Optional since not all sections might include dynamic options
}

// Define the full configuration for the signup form
interface DynamicOptions {
  hospitalTypes: string[];
  services: string[];
  departments: string[];
  medicalEquipment: string[];
  relationships: string[];
  insuranceProviders: string[];
  hospitalFacilities: string[];
  affiliations: string[];
  availableSpecialties: string[];
}

export interface HospitalSignupFormConfig {
  general: FormField[];
  contact: FormField[];
  address: FormField[];
  dynamicOptions: DynamicOptions;
}

// Define the main interface for the signup data structure
export interface HospitalSignupData {
  hospitalName: string;
  address: Address;
  contact: ContactInfo;
  website?: string;
  hospitalType: string;
  accreditation: string;
  services: string[];
  numberOfBeds: number;
  departments: string[];
  medicalEquipment: string[];
  administrator: Person;
  emergencyContact: Person & { relationship?: string };
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
}

// Initial data setup for the form
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
    fax: null,
    tollFreeNumber: null,
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
    email: null,
    relationship: null,
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

// The form field configuration data
export const hospitalFormConfig: HospitalSignupFormConfig = {
  general: [
    {
      label: "Hospital Name",
      name: "hospitalName",
      type: "text",
      placeholder: "Enter Hospital Name",
    },
    {
      label: "Website",
      name: "website",
      type: "text",
      placeholder: "Enter Website URL",
    },
    {
      label: "Hospital Type",
      name: "hospitalType",
      type: "select",
      options: ["General", "Specialty", "Teaching", "Community", "Research"],
      placeholder: "Enter hospital type"
    },
    {
      label: "Accreditation",
      name: "accreditation",
      type: "text",
      placeholder: "Enter Accreditation",
    },
  ],
  contact: [
    {
      label: "Phone Number",
      name: "phoneNumber",
      type: "tel",
      placeholder: "Enter Phone Number",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Enter Email Address",
    },
    {
      label: "Fax",
      name: "fax",
      type: "text",
      placeholder: "Enter Fax Number",
      optional: true,
    },
    {
      label: "Toll-Free Number",
      name: "tollFreeNumber",
      type: "text",
      placeholder: "Enter Toll-Free Number",
      optional: true,
    },
  ],
  address: [
    {
      label: "Street",
      name: "street",
      type: "text",
      placeholder: "Enter Street",
    },
    {
      label: "City",
      name: "city",
      type: "text",
      placeholder: "Enter City",
    },
    {
      label: "State",
      name: "state",
      type: "text",
      placeholder: "Enter State",
    },
    {
      label: "Postal Code",
      name: "postalCode",
      type: "text",
      placeholder: "Enter Postal Code",
    },
    {
      label: "Country",
      name: "country",
      type: "text",
      placeholder: "Enter Country",
    },
  ],
  dynamicOptions: {
    hospitalTypes: ["General", "Specialty", "Teaching", "Community", "Research"],
    services: ["Cardiology", "Orthopedics", "Radiology", "Pediatrics", "Oncology", "Emergency"],
    departments: ["Surgery", "Internal Medicine", "Pediatrics", "Obstetrics", "Dermatology", "Neurology"],
    medicalEquipment: ["X-Ray", "MRI", "Ultrasound", "CT Scanner", "ECG", "Defibrillator"],
    relationships: ["Emergency Head", "Medical Director", "Chief of Staff", "Nurse In-Charge", "Administrator"],
    insuranceProviders: ["Aetna", "Cigna", "UnitedHealthcare", "Humana", "Blue Cross Blue Shield", "Kaiser Permanente"],
    hospitalFacilities: ["ICU", "Emergency", "Neonatal Unit", "Operating Theater", "Laboratory", "Pharmacy"],
    affiliations: ["University Hospital", "Private Hospital", "Non-Profit Organization", "Government Health Service"],
    availableSpecialties: ["Cardiology", "Oncology", "Neurology", "Pediatrics", "Orthopedics", "Dermatology"]
  }
};
