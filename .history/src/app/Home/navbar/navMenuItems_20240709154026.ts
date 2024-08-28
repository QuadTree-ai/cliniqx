// src/data/navMenuItems.ts
import { Info, Layers, BookOpen, ClipboardList } from "lucide-react";

export type NavMenuItem = {
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  sections: {
    title: string;
    description: string;
    href: string;
  }[];
};

export const navMenuItems: NavMenuItem[] = [
  {
    label: "About",
    icon: Info,
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
    label: "CliniQX Program",
    icon: Layers,
    sections: [
      {
        title: "Program Benefits",
        description: "Discover the advantages of joining our program.",
        href: "/program/benefits",
      },
      {
        title: "How to Apply",
        description: "Learn about the application process.",
        href: "/program/apply",
      },
      {
        title: "FAQs",
        description: "Frequently asked questions about our program.",
        href: "/program/faq",
      },
    ],
  },
  {
    label: "Resources",
    icon: BookOpen,
    sections: [
      {
        title: "Blog",
        description: "Read our latest articles and updates.",
        href: "/resources/blog",
      },
      {
        title: "Guides",
        description: "Access our comprehensive guides and tutorials.",
        href: "/resources/guides",
      },
      {
        title: "Case Studies",
        description: "Explore our success stories and case studies.",
        href: "/resources/case-studies",
      },
    ],
  },
  {
    label: "Support",
    icon: ClipboardList,
    sections: [
      {
        title: "Help Center",
        description: "Find answers to common questions and issues.",
        href: "/support/help-center",
      },
      {
        title: "Contact Us",
        description: "Get in touch with our support team.",
        href: "/support/contact",
      },
      {
        title: "Community",
        description: "Join our community and connect with others.",
        href: "/support/community",
      },
    ],
  },
];
