// src/app/hospital/signup/types.ts

export type FormFieldType = 'text' | 'email' | 'tel' | 'select' | 'checkbox';

// Interface for a single field configuration
export interface FieldConfig {
  label: string;
  name: string;
  type: FormFieldType;
  placeholder: string;
  options?: string[];
  optional?: boolean;
}

// Props for the HospitalFormFields component
export interface HospitalFormFieldsProps {
  signupData: Record<string, any>; // This can be a more specific type if you have it
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}
