import { z } from 'zod';

// Props interface for HospitalFormFields
export interface HospitalFormFieldsProps {
  signupData: HospitalSignupData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

// Define reusable utility types
interface Address {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

interface ContactInfo {
  phoneNumber: string;
  email: string;
  fax?: string;  // Optional field
  tollFreeNumber?: string;  // Optional field
}

interface Person {
  name: string;
  role: string;
  contactNumber: string;
  email: string;
  yearsOfExperience?: number;  // Optional field
}

// Simplified DynamicFieldConfig with explicit string for name
export type DynamicFieldConfig = {
  label: string;
  name: string;
  type: 'text' | 'email' | 'tel' | 'select' | 'checkbox' | 'array';
  placeholder: string;
  options?: string[];
  optional?: boolean;
}

// Dynamic options that can be reused across the form
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

// Form configuration structure
export interface HospitalSignupFormConfig {
  general: DynamicFieldConfig[];
  contact: DynamicFieldConfig[];
  address: DynamicFieldConfig[];
  dynamicOptions: DynamicOptions;
}

// Define the main form data structure
export interface HospitalSignupData {
  hospitalName: string;
  address: Address;
  contact: ContactInfo;
  website?: string;  // Optional field
  hospitalType: string;
  accreditation: string;
  services: string[];
  numberOfBeds: number;
  departments: string[];
  medicalEquipment: string[];
  administrator: Person;
  emergencyContact: Person & { relationship?: string };  // Optional relationship field
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
  licenses: File[];  // Array to store licenses files
  uploadedFiles: {
    affiliations: File[]; // Array to store uploaded affiliations
    certifications: File[]; // Array to store uploaded certifications
  };
  establishedYear: number;
  patientCapacity: number;
  availableSpecialties: string[];
  ambulanceServices: boolean;
  telemedicineServices: boolean;
}

// Initial data setup for form defaults
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
    fax: undefined,
    tollFreeNumber: undefined,
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
    role: "N/A",
    contactNumber: "",
    email: "",
    relationship: undefined,
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
  licenses: [], // Initialize with empty arrays
  uploadedFiles: {
    affiliations: [],
    certifications: [],
  },
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
      name: "hospitalName",  // Direct key
      type: "text",
      placeholder: "Enter Hospital Name",
    },
    {
      label: "Website",
      name: "website",  // Direct key
      type: "text",
      placeholder: "Enter Website URL",
    },
    {
      label: "Hospital Type",
      name: "hospitalType",  // Direct key
      type: "select",
      options: ["General", "Specialty", "Teaching", "Community", "Research"],
      placeholder: "Select Hospital Type",
    },
    {
      label: "Accreditation",
      name: "accreditation",  // Direct key
      type: "text",
      placeholder: "Enter Accreditation",
    },
    {
      label: "Google Map Link",
      name: "googleMapLink",
      type: "text",
      placeholder: "Enter Google Map Link",
      optional: true,
    },
  ],
  contact: [
    {
      label: "Phone Number",
      name: "contact.phoneNumber",  // Nested key
      type: "tel",
      placeholder: "Enter Phone Number",
    },
    {
      label: "Email",
      name: "contact.email",  // Nested key
      type: "email",
      placeholder: "Enter Email Address",
    },
    {
      label: "Fax",
      name: "contact.fax",  // Nested key
      type: "text",
      placeholder: "Enter Fax Number",
      optional: true,
    },
    {
      label: "Toll-Free Number",
      name: "contact.tollFreeNumber",  // Nested key
      type: "text",
      placeholder: "Enter Toll-Free Number",
      optional: true,
    },
  ],
  address: [
    {
      label: "Street",
      name: "address.street",  // Nested key
      type: "text",
      placeholder: "Enter Street",
    },
    {
      label: "City",
      name: "address.city",  // Nested key
      type: "text",
      placeholder: "Enter City",
    },
    {
      label: "State",
      name: "address.state",  // Nested key
      type: "text",
      placeholder: "Enter State",
    },
    {
      label: "Postal Code",
      name: "address.postalCode",  // Nested key
      type: "text",
      placeholder: "Enter Postal Code",
    },
    {
      label: "Country",
      name: "address.country",  // Nested key
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
    availableSpecialties: ["Cardiology", "Oncology", "Neurology", "Pediatrics", "Orthopedics", "Dermatology"],
  },
};

export const FIELD_NAMES = {
  SERVICES: 'services',
  DEPARTMENTS: 'departments',
  MEDICAL_EQUIPMENT: 'medicalEquipment',
};

export const hospitalSignupSchema = z.object({
  hospitalName: z.string().min(1, "Hospital name is required"),
  address: z.object({
    street: z.string().min(1, "Street is required"),
    city: z.string().min(1, "City is required"),
    state: z.string().min(1, "State is required"),
    postalCode: z.string().min(1, "Postal code is required"),
    country: z.string().min(1, "Country is required"),
  }),
  contact: z.object({
    phoneNumber: z.string().min(1, "Phone number is required"),
    email: z.string().email("Invalid email address"),
    fax: z.string().optional(),
    tollFreeNumber: z.string().optional(),
  }),
  website: z.string().url("Invalid website URL").optional(),
  hospitalType: z.string().min(1, "Hospital type is required"),
  accreditation: z.string().min(1, "Accreditation is required"),
  services: z.array(z.string()).min(1, "At least one service is required"),
  numberOfBeds: z.number().min(1, "Number of beds is required"),
  departments: z.array(z.string()).min(1, "At least one department is required"),
  medicalEquipment: z.array(z.string()).min(1, "At least one medical equipment is required"),
  // ... (add more fields as needed)
});

export type HospitalSignupData = z.infer<typeof hospitalSignupSchema>;

// Modify formConfig to include all steps
export const formConfig = [
  {
    title: "General Information",
    fields: hospitalFormConfig.general,
  },
  {
    title: "Contact Information",
    fields: hospitalFormConfig.contact,
  },
  {
    title: "Address",
    fields: hospitalFormConfig.address,
  },
  {
    title: "Services and Facilities",
    fields: [
      { label: "Services", name: FIELD_NAMES.SERVICES, type: "array", placeholder: "Enter services" },
      { label: "Departments", name: FIELD_NAMES.DEPARTMENTS, type: "array", placeholder: "Enter departments" },
      { label: "Medical Equipment", name: FIELD_NAMES.MEDICAL_EQUIPMENT, type: "array", placeholder: "Enter medical equipment" },
    ],
  },
  // Add more steps as needed
];
