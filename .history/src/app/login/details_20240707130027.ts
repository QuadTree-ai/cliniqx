// src/login/details.ts

interface FormField {
    label: string;
    name: string;
    type: string;
    required: boolean;
}

export const fields: FormField[] = [
    { label: 'Email', name: 'email', type: 'email', required: true },
    { label: 'Password', name: 'password', type: 'password', required: true },
];
