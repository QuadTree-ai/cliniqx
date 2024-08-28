export type FormFieldKey = 'firstName' | 'lastName' | 'email' | 'phone' | 'password' | 'terms';

export const formFields: Record<FormFieldKey, any> = {
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
  }
};
