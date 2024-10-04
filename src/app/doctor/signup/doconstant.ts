"use client";

import { z } from "zod";

// Field names for the doctor signup form
export const FIELD_NAMES = {
  FIRST_NAME: "firstName",
  LAST_NAME: "lastName",
  EMAIL: "email",
  PHONE: "phone",
  PASSWORD: "password",
  SPECIALIZATION: "specialization",
  LICENSE_NUMBER: "licenseNumber",
  ACCEPTED_TERMS: "acceptedTerms",
} as const; // Use 'as const' for better type inference

// Initial signup data structure
export const initialSignupData = {
  [FIELD_NAMES.FIRST_NAME]: "",
  [FIELD_NAMES.LAST_NAME]: "",
  [FIELD_NAMES.EMAIL]: "",
  [FIELD_NAMES.PHONE]: "",
  [FIELD_NAMES.PASSWORD]: "",
  [FIELD_NAMES.SPECIALIZATION]: "",
  [FIELD_NAMES.LICENSE_NUMBER]: "",
  [FIELD_NAMES.ACCEPTED_TERMS]: false,
};

// Validation schema for doctor signup using Zod
export const doctorSignupSchema = z.object({
  [FIELD_NAMES.FIRST_NAME]: z.string().min(1, "First name is required"),
  [FIELD_NAMES.LAST_NAME]: z.string().min(1, "Last name is required"),
  [FIELD_NAMES.EMAIL]: z.string().email("Invalid email address"),
  [FIELD_NAMES.PHONE]: z.string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be at most 15 digits"),
  [FIELD_NAMES.PASSWORD]: z.string().min(6, "Password must be at least 6 characters"),
  [FIELD_NAMES.SPECIALIZATION]: z.string().min(1, "Specialization is required"),
  [FIELD_NAMES.LICENSE_NUMBER]: z.string().min(1, "License number is required"),
  [FIELD_NAMES.ACCEPTED_TERMS]: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),
});

// Form configuration for rendering fields dynamically
export const formConfig = [
  {
    name: FIELD_NAMES.FIRST_NAME,
    label: "First Name",
    required: true,
  },
  {
    name: FIELD_NAMES.LAST_NAME,
    label: "Last Name",
    required: true,
  },
  {
    name: FIELD_NAMES.EMAIL,
    label: "Email",
    required: true,
  },
  {
    name: FIELD_NAMES.PHONE,
    label: "Phone Number",
    required: true,
  },
  {
    name: FIELD_NAMES.PASSWORD,
    label: "Password",
    required: true,
  },
  {
    name: FIELD_NAMES.SPECIALIZATION,
    label: "Specialization",
    required: true,
  },
  {
    name: FIELD_NAMES.LICENSE_NUMBER,
    label: "License Number",
    required: true,
  },
  {
    name: FIELD_NAMES.ACCEPTED_TERMS,
    label: "Accept Terms and Conditions",
    required: true,
  },
];
