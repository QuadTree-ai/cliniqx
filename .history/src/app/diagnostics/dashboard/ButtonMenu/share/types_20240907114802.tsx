import { CustomerInfo } from '@/types/customer';

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
}

export interface UploadReportsCardProps {
  files: File[];
  handleShareReport: () => void;
  handleFileDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  handleFileInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  previews: string[];
  uploadProgress: number;
}

export interface AddCustomerFormProps {
  onClose: () => void;
  onAdd: (customer: CustomerInfo) => void;
}
