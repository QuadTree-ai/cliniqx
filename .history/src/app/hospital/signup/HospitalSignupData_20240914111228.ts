import { z } from 'zod';

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
  administrator: z.object({
    name: z.string().min(1, "Administrator name is required"),
    role: z.string().min(1, "Administrator role is required"),
    contactNumber: z.string().min(1, "Administrator contact number is required"),
    email: z.string().email("Invalid administrator email"),
    yearsOfExperience: z.number().optional(),
  }),
  emergencyContact: z.object({
    name: z.string().min(1, "Emergency contact name is required"),
    role: z.string().min(1, "Emergency contact role is required"),
    contactNumber: z.string().min(1, "Emergency contact number is required"),
    email: z.string().email("Invalid emergency contact email"),
    relationship: z.string().optional(),
  }),
  insuranceProviders: z.array(z.string()),
  hospitalFacilities: z.array(z.string()),
  staffCapacity: z.object({
    doctors: z.number().min(0),
    nurses: z.number().min(0),
    technicians: z.number().min(0),
    adminStaff: z.number().min(0),
  }),
  affiliations: z.array(z.string()),
  certifications: z.array(z.string()),
  establishedYear: z.number().min(1800).max(new Date().getFullYear()),
  patientCapacity: z.number().min(1),
  availableSpecialties: z.array(z.string()),
  ambulanceServices: z.boolean(),
  telemedicineServices: z.boolean(),
});

export type HospitalSignupData = z.infer<typeof hospitalSignupSchema>;

export const initialSignupData: HospitalSignupData = {
  hospitalName: "",
  address: { street: "", city: "", state: "", postalCode: "", country: "" },
  contact: { phoneNumber: "", email: "", fax: "", tollFreeNumber: "" },
  website: "",
  hospitalType: "",
  accreditation: "",
  services: [],
  numberOfBeds: 0,
  departments: [],
  medicalEquipment: [],
  administrator: { name: "", role: "", contactNumber: "", email: "", yearsOfExperience: 0 },
  emergencyContact: { name: "", role: "", contactNumber: "", email: "", relationship: "" },
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

export type DynamicFieldConfig = {
  label: string;
  name: string;
  type: "number" | "array" | "email" | "text" | "select" | "tel" | "checkbox";
  placeholder: string;
  optional?: boolean;
  options?: string[];
};

export const FIELD_NAMES = {
  SERVICES: 'services',
  DEPARTMENTS: 'departments',
  MEDICAL_EQUIPMENT: 'medicalEquipment',
};

export const formConfig = [
  {
    title: "General Information",
    fields: [
      { label: "Hospital Name", name: "hospitalName", type: "text", placeholder: "Enter Hospital Name" },
      { label: "Website", name: "website", type: "text", placeholder: "Enter Website URL", optional: true },
      { label: "Hospital Type", name: "hospitalType", type: "select", placeholder: "Select Hospital Type", options: ["General", "Specialty", "Teaching", "Community", "Research"] },
      { label: "Accreditation", name: "accreditation", type: "text", placeholder: "Enter Accreditation" },
      { label: "Established Year", name: "establishedYear", type: "number", placeholder: "Enter Established Year" },
    ],
  },
  {
    title: "Contact Information",
    fields: [
      { label: "Phone Number", name: "contact.phoneNumber", type: "tel", placeholder: "Enter Phone Number" },
      { label: "Email", name: "contact.email", type: "email", placeholder: "Enter Email Address" },
      { label: "Fax", name: "contact.fax", type: "text", placeholder: "Enter Fax Number", optional: true },
      { label: "Toll-Free Number", name: "contact.tollFreeNumber", type: "text", placeholder: "Enter Toll-Free Number", optional: true },
    ],
  },
  {
    title: "Address",
    fields: [
      { label: "Street", name: "address.street", type: "text", placeholder: "Enter Street" },
      { label: "City", name: "address.city", type: "text", placeholder: "Enter City" },
      { label: "State", name: "address.state", type: "text", placeholder: "Enter State" },
      { label: "Postal Code", name: "address.postalCode", type: "text", placeholder: "Enter Postal Code" },
      { label: "Country", name: "address.country", type: "text", placeholder: "Enter Country" },
    ],
  },
  {
    title: "Services and Facilities",
    fields: [
      { label: "Services", name: FIELD_NAMES.SERVICES, type: "array", placeholder: "Enter services" },
      { label: "Departments", name: FIELD_NAMES.DEPARTMENTS, type: "array", placeholder: "Enter departments" },
      { label: "Medical Equipment", name: FIELD_NAMES.MEDICAL_EQUIPMENT, type: "array", placeholder: "Enter medical equipment" },
      { label: "Number of Beds", name: "numberOfBeds", type: "number", placeholder: "Enter number of beds" },
      { label: "Patient Capacity", name: "patientCapacity", type: "number", placeholder: "Enter patient capacity" },
    ],
  },
  {
    title: "Staff and Specialties",
    fields: [
      { label: "Doctors", name: "staffCapacity.doctors", type: "number", placeholder: "Enter number of doctors" },
      { label: "Nurses", name: "staffCapacity.nurses", type: "number", placeholder: "Enter number of nurses" },
      { label: "Technicians", name: "staffCapacity.technicians", type: "number", placeholder: "Enter number of technicians" },
      { label: "Admin Staff", name: "staffCapacity.adminStaff", type: "number", placeholder: "Enter number of admin staff" },
      { label: "Available Specialties", name: "availableSpecialties", type: "array", placeholder: "Enter available specialties" },
    ],
  },
  {
    title: "Additional Services",
    fields: [
      { label: "Ambulance Services", name: "ambulanceServices", type: "checkbox", placeholder: "Ambulance Services Available" },
      { label: "Telemedicine Services", name: "telemedicineServices", type: "checkbox", placeholder: "Telemedicine Services Available" },
    ],
  },
];
