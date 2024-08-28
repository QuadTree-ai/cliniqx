// Define a type for the structure of each form field for better type safety
type FormField = {
  id: string;
  label: string;
  placeholder?: string;
  type?: string;
  linkLabel?: string; // Only for terms field
};

// Enumerate field keys to ensure type safety throughout the application
export type FormFieldKey = 'firstName' | 'lastName' | 'email' | 'phone' | 'password' | 'terms';

// Define the properties for each field using the FormField type
export const formFields: Record<FormFieldKey, FormField> = {
firstName: {
  id: "first-name",
  label: "First Name",
  placeholder: "Max",
},
lastName: {
  id: "last-name",
  label: "Last Name",
  placeholder: "Robinson",
},
email: {
  id: "email",
  type: "email",
  label: "Email",
  placeholder: "m@example.com",
},
phone: {
  id: "phone",
  type: "tel",
  label: "Phone Number",
  placeholder: "123-456-7890",
},
password: {
  id: "password",
  type: "password",
  label: "Password",
},
terms: {
  id: "terms",
  label: "I accept the ",
  linkLabel: "terms and conditions" // Include hyperlink text separately for better customization
}
};
