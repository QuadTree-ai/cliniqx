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
    label: "CliniQX Membership",
    sections: [
      {
        title: "Program Benefits",
        description: "Discover the advantages of joining our program.",
        href: "/program/benefits",
      },
      {
        title: "Membership",
        description: "Learn about the membership process.",
        href: "/program/membership",
      },
    ],
  },
  {
    label: "Medical Access",
    sections: [
      {
        title: "Pharmacy Access",
        description: "Join or log in to manage your pharmacy operations.",
        href: "/pharmacy",
      },
      {
        title: "Hospital Access",
        description: "Join or log in to manage your hospital EHR solutions.",
        href: "/hospital",
      },
      {
        title: "Doctor Access",
        description: "Join or log in to manage your medical practice.",
        href: "/doctor",
      },
      {
        title: "Diagnostic Center Access",
        description: "Join or log in to share the results of your lab tests.",
        href: "/diagnostics",
      },
    ],
  },
];
