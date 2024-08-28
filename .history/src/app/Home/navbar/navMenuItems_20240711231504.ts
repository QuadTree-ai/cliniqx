export const navMenuItems: NavMenuItem[] = [
  {
    label: "About",
    sections: [
      { title: "Our History", description: "Learn more about our journey and...", href: "/about/history" },
      { title: "Our Team", description: "Meet the people behind CliniQX.", href: "/about/team" },
      { title: "Careers", description: "Join our team and help us innovate.", href: "/about/careers" },
    ],
  },
  {
    label: "CliniQX Membership",
    sections: [
      { title: "Membership Benefits", description: "Explore the benefits of CliniQX Membership...", href: "/membership/benefits" },
      { title: "Pricing", description: "See our membership pricing plans.", href: "/membership/pricing" },
    ],
  },
  {
    label: "Medical Signup",
    sections: [
      { title: "Sign Up", description: "Join CliniQX as a medical professional.", href: "/signup/medical" },
      { title: "Learn More", description: "Discover how CliniQX can help you.", href: "/signup/info" },
    ],
  },
];

export type NavMenuItem = {
  label: string;
  sections: {
    title: string;
    description: string;
    href: string;
  }[];
};
