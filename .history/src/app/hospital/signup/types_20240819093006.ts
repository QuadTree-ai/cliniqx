// src/app/hospital/signup/types.ts
import { DynamicFieldConfig, HospitalSignupFormConfig } from './HospitalSignupData';

export type FormFieldType = 'text' | 'email' | 'tel' | 'select';

export interface FieldConfig extends DynamicFieldConfig {
  type: FormFieldType;
}
