// src/data/navMenuItems.ts

export type NavMenuItem = {
  label: string;
  sections: {
    title: string;
    description: string;
    href: string;
  }[];
};

export const navMenuItems: NavMenuItem[] = [
  {
    label: "Medical Access",
    sections: [
      {
        title: "Pharmacy Access",
        description: "Sign up or log in to manage your pharmacy operations.",
        href: "/signup/pharmacy",
      },
      {
        title: "Hospital Access",
        description: "Sign up or log in for advanced hospital EHR solutions.",
        href: "/signup/hospital",
      },
      {
        title: "Doctor Access",
        description: "Join or log in to manage your medical practice efficiently.",
        href: "/signup/doctor",
      },
    ],
  },
];
