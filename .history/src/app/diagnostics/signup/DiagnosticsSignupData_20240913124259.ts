import { z } from "zod";

export const diagnosticsSignupSchema = z.object({
  centerName: z.string().min(1, "Center name is required"),
  ownerName: z.string().min(1, "Owner name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  zipCode: z.string().min(5, "ZIP code must be at least 5 characters"),
  licenseNumber: z.string().min(1, "License number is required"),
  specialties: z.array(z.string()).min(1, "At least one specialty is required"),
  equipmentList: z.array(z.string()),
  acceptedInsurances: z.array(z.string()),
  operatingHours: z.string(),
  emergencyServices: z.boolean(),
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),
});

export type DiagnosticsSignupData = z.infer<typeof diagnosticsSignupSchema>;

export const initialSignupData: DiagnosticsSignupData = {
  centerName: "",
  ownerName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  zipCode: "",
  licenseNumber: "",
  specialties: [],
  equipmentList: [],
  acceptedInsurances: [],
  operatingHours: "",
  emergencyServices: false,
  termsAccepted: false,
};
