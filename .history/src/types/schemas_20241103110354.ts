// src/types/schemas.ts
import { z } from 'zod';
import { format, isValid } from 'date-fns';

// Custom Zod refinements
const phoneRegex = /^(\+\d{1,3}[-.]?)?\d{10,14}$/;
const cliniqxNumberRegex = /^CLX-\d{6}$/i;
const nameRegex = /^[a-zA-Z\s'-]{2,50}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Custom error map
const customErrorMap: z.ZodErrorMap = (issue, ctx) => {
  switch (issue.code) {
    case z.ZodIssueCode.invalid_string:
      if (issue.validation === "email") {
        return { message: "Please enter a valid email address" };
      }
      if (issue.validation === "regex") {
        return { message: "Invalid format" };
      }
      break;
    case z.ZodIssueCode.invalid_type:
      return { message: `Expected ${issue.expected}, received ${issue.received}` };
  }
  return { message: ctx.defaultError };
};

z.setErrorMap(customErrorMap);

// Reusable sub-schemas
const contactSchema = z.object({
  email: z.string().email().regex(emailRegex),
  phone: z.string().regex(phoneRegex, "Invalid phone number format"),
  alternatePhone: z.string().regex(phoneRegex, "Invalid phone number format").optional(),
});

const addressSchema = z.object({
  street: z.string().min(3, "Street address is required"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  postalCode: z.string().regex(/^\d{5,6}$/, "Invalid postal code"),
  country: z.string().min(2, "Country is required"),
}).transform(({ street, city, state, postalCode, country }) => ({
  formatted: `${street}, ${city}, ${state} ${postalCode}, ${country}`,
  components: { street, city, state, postalCode, country }
}));

// Common validation functions
const validateDate = (date: string) => {
  const parsed = new Date(date);
  return isValid(parsed);
};

const validateAge = (birthDate: Date) => {
  const today = new Date();
  const age = today.getFullYear() - birthDate.getFullYear();
  return age >= 0 && age <= 150;
};

// Enums and Constants
export const BLOOD_TYPES = [
  "A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"
] as const;

export const GENDER_TYPES = [
  "male", "female", "other", "prefer_not_to_say"
] as const;

export const TEST_STATUS = [
  "pending", "in_progress", "completed", "cancelled", "failed"
] as const;

export const INVOICE_STATUS = [
  "paid", "pending", "overdue", "cancelled", "refunded"
] as const;

// Base schemas
export const basePersonSchema = z.object({
  id: z.string().uuid(),
  firstName: z.string().regex(nameRegex, "Invalid first name"),
  lastName: z.string().regex(nameRegex, "Invalid last name"),
  birthDate: z.string().refine(validateDate, "Invalid date").transform(date => new Date(date)),
  gender: z.enum(GENDER_TYPES),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date()),
});

// Main schemas
export const patientSchema = basePersonSchema.extend({
  bloodType: z.enum(BLOOD_TYPES),
  weight: z.number().min(0).max(500).optional(),
  height: z.number().min(0).max(300).optional(),
  allergies: z.array(z.string()).default([]),
  emergencyContact: contactSchema.extend({
    name: z.string().regex(nameRegex, "Invalid contact name"),
    relationship: z.string().min(2, "Relationship is required"),
  }),
  address: addressSchema,
  medicalHistory: z.array(z.object({
    condition: z.string(),
    diagnosedDate: z.string().refine(validateDate, "Invalid date"),
    status: z.enum(["active", "resolved", "managed"]),
    notes: z.string().optional(),
  })).default([]),
}).refine(
  (data) => validateAge(data.birthDate),
  "Invalid birth date or age out of range"
);

export const doctorSchema = basePersonSchema.extend({
  specialization: z.string().min(2, "Specialization is required"),
  licenseNumber: z.string().min(5, "License number is required"),
  qualifications: z.array(z.object({
    degree: z.string(),
    institution: z.string(),
    year: z.number().min(1900).max(new Date().getFullYear()),
  })),
  contact: contactSchema,
  address: addressSchema,
  availability: z.array(z.object({
    day: z.enum(["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]),
    startTime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "Invalid time format"),
    endTime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "Invalid time format"),
  })).default([]),
});

export const testSchema = z.object({
  id: z.string().uuid(),
  patientId: z.string().uuid(),
  doctorId: z.string().uuid(),
  testType: z.string().min(2, "Test type is required"),
  cliniqxNumber: z.string().regex(cliniqxNumberRegex, "Invalid Cliniqx number"),
  status: z.enum(TEST_STATUS),
  scheduledDate: z.string().refine(validateDate, "Invalid date"),
  completedDate: z.string().refine(validateDate, "Invalid date").optional(),
  results: z.array(z.object({
    parameter: z.string(),
    value: z.union([z.string(), z.number()]),
    unit: z.string().optional(),
    referenceRange: z.string().optional(),
    interpretation: z.string().optional(),
  })).optional(),
  notes: z.string().optional(),
  attachments: z.array(z.object({
    fileName: z.string(),
    fileType: z.string(),
    fileSize: z.number(),
    uploadDate: z.date(),
    url: z.string().url(),
  })).default([]),
}).transform(({ scheduledDate, completedDate, ...rest }) => ({
  ...rest,
  scheduledDate: new Date(scheduledDate),
  completedDate: completedDate ? new Date(completedDate) : undefined,
}));

export const invoiceSchema = z.object({
  id: z.string().uuid(),
  patientId: z.string().uuid(),
  testIds: z.array(z.string().uuid()),
  amount: z.number().positive(),
  tax: z.number().min(0),
  discount: z.number().min(0).optional(),
  status: z.enum(INVOICE_STATUS),
  issuedDate: z.date(),
  dueDate: z.date(),
  paidDate: z.date().optional(),
  paymentMethod: z.enum(["cash", "card", "upi", "bank_transfer"]).optional(),
  notes: z.string().optional(),
}).refine(
  (data) => data.dueDate > data.issuedDate,
  "Due date must be after issued date"
).transform((data) => ({
  ...data,
  totalAmount: data.amount + data.tax - (data.discount || 0),
}));

// Helper functions for schema validation
export const validatePatient = (data: unknown) => {
  const result = patientSchema.safeParse(data);
  if (!result.success) {
    return {
      success: false,
      errors: result.error.format(),
    };
  }
  return {
    success: true,
    data: result.data,
  };
};

export const validateTest = (data: unknown) => {
  const result = testSchema.safeParse(data);
  if (!result.success) {
    return {
      success: false,
      errors: result.error.format(),
    };
  }
  return {
    success: true,
    data: result.data,
  };
};

export const validateInvoice = (data: unknown) => {
  const result = invoiceSchema.safeParse(data);
  if (!result.success) {
    return {
      success: false,
      errors: result.error.format(),
    };
  }
  return {
    success: true,
    data: result.data,
  };
};

// Type inference from schemas
export type Patient = z.infer<typeof patientSchema>;
export type Doctor = z.infer<typeof doctorSchema>;
export type Test = z.infer<typeof testSchema>;
export type Invoice = z.infer<typeof invoiceSchema>;
export type Contact = z.infer<typeof contactSchema>;
export type Address = z.infer<typeof addressSchema>;

// Export utility types
export type BloodType = typeof BLOOD_TYPES[number];
export type GenderType = typeof GENDER_TYPES[number];
export type TestStatus = typeof TEST_STATUS[number];
export type InvoiceStatus = typeof INVOICE_STATUS[number];