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

export interface CustomerInfo extends Omit<PatientInfo, 'id' | 'bloodType'> {
  image: string;
  diseases: string[];
  location: string;
  phone: string;
  cliniqx: string;
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

export interface Invoice {
  id: string;
  patientName: string;
  amount: number;
  status: 'Paid' | 'Pending' | 'Overdue';
  date: string;
}

export interface PatientStats {
  testsConducted: number;
  patientsSeen: number;
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

export type ActiveSection = 'analytics' | 'share' | 'tests' | 'invoices';
export interface ComponentProps {
  recentTests: TestData[];
  invoices: Invoice[];
  setActiveSection: (section: ActiveSection) => void;
}
