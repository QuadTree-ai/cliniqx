// src/types/schemas.ts
export const patientSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    age: z.number().min(0).max(150),
    gender: z.enum(["male", "female", "other"]),
    bloodType: z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]),
  });
  
  export const identifierSchema = z.object({
    phone: z.string().regex(/^\+?[\d\s-]{10,}$/, "Invalid phone number"),
    cliniqx: z.string().min(5, "Invalid Cliniqx number"),
  });
  
  export const customerSchema = patientSchema.extend({
    phone: z.string().regex(/^\+?[\d\s-]{10,}$/, "Invalid phone number"),
    cliniqx: z.string().min(5, "Invalid Cliniqx number"),
    image: z.string().url().optional(),
    diseases: z.array(z.string()),
    location: z.string().min(1, "Location is required"),
  });
  
  export const testSchema = z.object({
    testId: z.string().uuid(),
    cliniqxNumber: z.string(),
    testName: z.string(),
    date: z.string().datetime(),
    status: z.string(),
    patientName: z.string(),
    patientPhone: z.string(),
  });
  
  export const invoiceSchema = z.object({
    id: z.string().uuid(),
    patientName: z.string(),
    amount: z.number().positive(),
    status: z.enum(["Paid", "Pending", "Overdue"]),
    date: z.string().datetime(),
  });
  
  // Type guards
  export const isCustomerInfo = (obj: any): obj is CustomerInfo => {
    return customerSchema.safeParse(obj).success;
  };
  
  export const isTestData = (obj: any): obj is TestData => {
    return testSchema.safeParse(obj).success;
  };
  
  export const isInvoice = (obj: any): obj is Invoice => {
    return invoiceSchema.safeParse(obj).success;
  };