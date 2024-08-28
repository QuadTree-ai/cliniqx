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
    label: "About",
    sections: [
      {
        title: "Our History",
        description: "Learn more about our journey and milestones.",
        href: "/about/history",
      },
      {
        title: "Our Team",
        description: "Meet the people behind CliniQX.",
        href: "/about/team",
      },
      {
        title: "Careers",
        description: "Join our team and help us innovate.",
        href: "/about/careers",
      },
    ],
  },
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
      {
        title: "FAQs",
        description: "Frequently asked questions about our program.",
        href: "/program/faq",
      },
    ],
  },
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
