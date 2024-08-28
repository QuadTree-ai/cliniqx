// src/app/signup/customer/FormConstants.tsx

export type FormFieldKey = 'firstName' | 'lastName' | 'email' | 'phone' | 'password' | 'terms';

type FormField = {
  id: string;
  label: string;
  placeholder?: string;
  type?: string;
  linkLabel?: string;
  buttonLabel?: string;
};

export const formFields: Record<FormFieldKey | 'submit' | 'checkbox', FormField> = {
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
    linkLabel: "terms and conditions"
  },
  checkbox: {
    id: "terms",
    label: "I agree to the Terms and Conditions."
  },
  submit: {
    id: "submit",
    buttonLabel: "Create an account",
    label: ""
  }
};
