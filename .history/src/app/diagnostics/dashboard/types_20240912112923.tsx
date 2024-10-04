import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface TestData {
  testId: string;
  cliniqxNumber: string;
  testName: string;
  date: string;
  status: string;
  patientName: string;
  patientPhone: string;
}

export interface PatientInfo {
  name: string;
  id: string;
  age: number;
  gender: string;
  bloodType: string;
}

export interface ChartData {
  [key: string]: string | number;
}

export interface DashboardData {
  recentTests: TestData[];
  patientInfo: PatientInfo | null;
  testTypeDistribution: ChartData[];
  revenue: ChartData[];
  patientAgeDistribution: ChartData[];
  invoices: Invoice[];
  patientStats: PatientStats | null;
}

export interface ServiceCard {
  image: StaticImageData;
  title: string;
  description: string;
  subServices: { text: string }[];
}

export interface NavMenuItem {
  label: string;
  sections: {
    title: string;
    description: string;
    href: string;
  }[];
}

export type SeverityLevel = 'low' | 'moderate' | 'high';

export interface Insight {
  part: string;
  problem: string;
  severity: SeverityLevel;
}

export interface FormData {
  [key: string]: string | string[] | File | undefined;
}

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
  hospitalType: string;
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
    role: string;
    contactNumber: string;
    email: string;
    relationship?: string;
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
  licenses: File[];
  uploadedFiles: {
    affiliations: File[];
    certifications: File[];
  };
  establishedYear: number;
  patientCapacity: number;
  availableSpecialties: string[];
  ambulanceServices: boolean;
  telemedicineServices: boolean;
}

export interface ChartConfig {
  [key: string]: {
    label: string;
    color?: string;
    theme?: {
      [key: string]: string;
    };
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  };
}

export interface Invoice {
  id: string;
  patientName: string;
  amount: number;
  status: 'Paid' | 'Pending' | 'Overdue';
  date: string; // Add this line
}

export interface PatientStats {
  testsConducted: number;
  patientsSeen: number;
}

export interface CustomerInfo {
  name: string;
  image: string;
  age: number;
  diseases: string[];
  location: string;
  phone: string;
  cliniqx: string;
}

export interface Identifier {
  phone: string;
  cliniqx: string;
}

export interface SearchPatientProps {
  identifier: Identifier;
  handleIdentifierChange: (e: React.ChangeEvent<HTMLInputElement>, type: keyof Identifier) => void;
  handleSearch: () => void;
  isLoading: boolean;
  onAddNewPatient: () => void;
}

export interface PatientInfoCardProps {
  customerInfo: CustomerInfo | null;
  isLoading?: boolean;
}

export interface UploadReportsCardProps {
  onShareReport: () => void;
  onFileDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  onFileInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  files: File[];
  previews: string[];
  uploadProgress: number;
}

export interface AddCustomerFormProps {
  onClose: () => void;
  onAdd: (customer: CustomerInfo) => void;
}