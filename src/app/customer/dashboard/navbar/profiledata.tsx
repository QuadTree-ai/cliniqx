// src/app/customer/dashboard/navbar/profiledata.tsx

import {
  User,
  CreditCard,
  Settings,
  LogOut,
  LifeBuoy,
} from "lucide-react";

export const profileMenuItems = [
  {
    label: "Patient Profile",
    icon: User,
    href: "/customer/dashboard/patient-profile",
  },
  {
    label: "Billing & Invoices",
    icon: CreditCard,
    href: "/customer/dashboard/billing",
  },
  {
    label: "Account Settings",
    icon: Settings,
    href: "/customer/dashboard/settings",
  },
  {
    label: "Support",
    icon: LifeBuoy,
    href: "/customer/dashboard/support",
  },
  {
    label: "Log out",
    icon: LogOut,
    href: "/logout",
  },
];
