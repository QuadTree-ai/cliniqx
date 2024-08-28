// src/app/hospital/signup/types.ts
export type FormFieldType = 'text' | 'email' | 'tel' | 'select' | 'checkbox';

export interface FieldConfig {
  label: string;
  name: string;
  type: FormFieldType;
  placeholder: string;
  options?: string[];
  optional?: boolean;
}