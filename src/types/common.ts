// src/types/common.ts
import { z } from 'zod';
import { StaticImageData } from "next/image";
import { ReactNode } from "react";

// Utility types
export type FormFieldType = 'text' | 'email' | 'tel' | 'select' | 'checkbox';
export type SeverityLevel = 'low' | 'moderate' | 'high';
export type ActiveSection = 'analytics' | 'share' | 'tests' | 'invoices';
export type InvoiceStatus = 'Paid' | 'Pending' | 'Overdue';

// Base interfaces
export interface BasePatient {
  name: string;
  age: number;
  gender: string;
}

export interface BaseIdentifier {
  phone: string;
  cliniqx: string;
}

// Form configuration interfaces
export interface FieldConfig {
  label: string;
  name: string;
  type: FormFieldType;
  placeholder: string;
  options?: string[];
  optional?: boolean;
  validation?: z.ZodTypeAny;
}

// Customer/Patient interfaces
export interface PatientInfo extends BasePatient {
  id: string;
  bloodType: string;
}

export interface CustomerInfo extends BasePatient, BaseIdentifier {
  image: string;
  diseases: string[];
  location: string;
}

// Test and Invoice interfaces
export interface TestData {
  testId: string;
  cliniqxNumber: string;
  testName: string;
  date: string;
  status: string;
  patientName: string;
  patientPhone: string;
}

export interface Invoice {
  id: string;
  patientName: string;
  amount: number;
  status: InvoiceStatus;
  date: string;
}

// Dashboard related interfaces
export interface ChartData {
  [key: string]: string | number;
}

export interface PatientStats {
  testsConducted: number;
  patientsSeen: number;
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

// UI Component interfaces
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

export interface Insight {
  part: string;
  problem: string;
  severity: SeverityLevel;
}

// Component Props interfaces
export interface HospitalFormFieldsProps {
  signupData: Record<string, string>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export interface SearchPatientProps {
  identifier: BaseIdentifier;
  handleIdentifierChange: (e: React.ChangeEvent<HTMLInputElement>, type: keyof BaseIdentifier) => void;
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

export interface ChartConfig {
  [key: string]: {
    label: string;
    color?: string;
    theme?: Record<string, string>;
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  };
}

export interface InvoicesProps {
  invoices: Invoice[];
  isLoading?: boolean;
}

export interface PaginationProps<T> {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  items: T[];
}

export interface SearchProps {
  searchTerm: string;
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
}

export interface ComponentProps {
  recentTests: TestData[];
  invoices: Invoice[];
  setActiveSection: (section: ActiveSection) => void;
}