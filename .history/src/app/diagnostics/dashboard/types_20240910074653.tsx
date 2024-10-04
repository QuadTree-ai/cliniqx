import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface TestData {
  patientName: ReactNode;
  patientPhone: ReactNode;
  testName: string;
  date: string;
  status: string;
  testId: string;
  cliniqxNumber: string;
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
  patientInfo: PatientInfo;
  testTypeDistribution: ChartData[];
  revenue: ChartData[];
  patientAgeDistribution: ChartData[];
  invoices: Invoice[];
  patientStats: PatientStats;
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
}

export interface PatientStats {
  testsConducted: number;
  patientsSeen: number;
}