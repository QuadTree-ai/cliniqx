import { z } from "zod";

export const FIELD_NAMES = {
  CENTER_NAME: 'centerName',
  OWNER_NAME: 'ownerName',
  EMAIL: 'email',
  PHONE: 'phone',
  ADDRESS: 'address',
  CITY: 'city',
  STATE: 'state',
  ZIP_CODE: 'zipCode',
  LICENSE_NUMBER: 'licenseNumber',
  SPECIALTIES: 'specialties',
  EQUIPMENT_LIST: 'equipmentList',
  ACCEPTED_INSURANCES: 'acceptedInsurances',
  OPERATING_HOURS: 'operatingHours',
  EMERGENCY_SERVICES: 'emergencyServices',
  TERMS_ACCEPTED: 'termsAccepted',
} as const;

export const VALIDATION_MESSAGES = {
  REQUIRED: 'This field is required',
  INVALID_EMAIL: 'Invalid email address',
  MIN_PHONE_LENGTH: 'Phone number must be at least 10 digits',
  MIN_ZIP_LENGTH: 'ZIP code must be at least 5 characters',
  MIN_SPECIALTIES: 'At least one specialty is required',
  TERMS_ACCEPTANCE: 'You must accept the terms and conditions',
} as const;

export const diagnosticsSignupSchema = z.object({
  [FIELD_NAMES.CENTER_NAME]: z.string().min(1, VALIDATION_MESSAGES.REQUIRED),
  [FIELD_NAMES.OWNER_NAME]: z.string().min(1, VALIDATION_MESSAGES.REQUIRED),
  [FIELD_NAMES.EMAIL]: z.string().email(VALIDATION_MESSAGES.INVALID_EMAIL),
  [FIELD_NAMES.PHONE]: z.string().min(10, VALIDATION_MESSAGES.MIN_PHONE_LENGTH),
  [FIELD_NAMES.ADDRESS]: z.string().min(1, VALIDATION_MESSAGES.REQUIRED),
  [FIELD_NAMES.CITY]: z.string().min(1, VALIDATION_MESSAGES.REQUIRED),
  [FIELD_NAMES.STATE]: z.string().min(1, VALIDATION_MESSAGES.REQUIRED),
  [FIELD_NAMES.ZIP_CODE]: z.string().min(5, VALIDATION_MESSAGES.MIN_ZIP_LENGTH),
  [FIELD_NAMES.LICENSE_NUMBER]: z.string().min(1, VALIDATION_MESSAGES.REQUIRED),
  [FIELD_NAMES.SPECIALTIES]: z.array(z.string()).min(1, VALIDATION_MESSAGES.MIN_SPECIALTIES),
  [FIELD_NAMES.EQUIPMENT_LIST]: z.array(z.string()),
  [FIELD_NAMES.ACCEPTED_INSURANCES]: z.array(z.string()),
  [FIELD_NAMES.OPERATING_HOURS]: z.string().min(1, VALIDATION_MESSAGES.REQUIRED),
  [FIELD_NAMES.EMERGENCY_SERVICES]: z.boolean(),
  [FIELD_NAMES.TERMS_ACCEPTED]: z.boolean().refine((val) => val === true, {
    message: VALIDATION_MESSAGES.TERMS_ACCEPTANCE,
  }),
});

export type DiagnosticsSignupData = z.infer<typeof diagnosticsSignupSchema>;

export const initialSignupData: DiagnosticsSignupData = {
  [FIELD_NAMES.CENTER_NAME]: "",
  [FIELD_NAMES.OWNER_NAME]: "",
  [FIELD_NAMES.EMAIL]: "",
  [FIELD_NAMES.PHONE]: "",
  [FIELD_NAMES.ADDRESS]: "",
  [FIELD_NAMES.CITY]: "",
  [FIELD_NAMES.STATE]: "",
  [FIELD_NAMES.ZIP_CODE]: "",
  [FIELD_NAMES.LICENSE_NUMBER]: "",
  [FIELD_NAMES.SPECIALTIES]: [],
  [FIELD_NAMES.EQUIPMENT_LIST]: [],
  [FIELD_NAMES.ACCEPTED_INSURANCES]: [],
  [FIELD_NAMES.OPERATING_HOURS]: "",
  [FIELD_NAMES.EMERGENCY_SERVICES]: false,
  [FIELD_NAMES.TERMS_ACCEPTED]: false,
};

export const formConfig = [
  {
    fields: [FIELD_NAMES.CENTER_NAME, FIELD_NAMES.OWNER_NAME, FIELD_NAMES.EMAIL, FIELD_NAMES.PHONE],
    title: 'Basic Information',
  },
  {
    fields: [FIELD_NAMES.ADDRESS, FIELD_NAMES.CITY, FIELD_NAMES.STATE, FIELD_NAMES.ZIP_CODE],
    title: 'Location Details',
  },
  {
    fields: [FIELD_NAMES.LICENSE_NUMBER, FIELD_NAMES.OPERATING_HOURS, FIELD_NAMES.SPECIALTIES, FIELD_NAMES.ACCEPTED_INSURANCES, FIELD_NAMES.EMERGENCY_SERVICES, FIELD_NAMES.TERMS_ACCEPTED],
    title: 'Additional Information',
  },
];
