// src/app/customer/dashboard/navbar/profiledata.tsx

import {
  User,
  CreditCard,
  Settings,
  Calendar,
  FileText,
  LogOut,
  LifeBuoy,
} from "lucide-react";

export const profileMenuItems = [
  {
    label: "Patient Profile",
    icon: User,
    shortcut: "⇧⌘P",
    href: "/customer/dashboard/patient-profile",
  },
  {
    label: "Billing & Invoices",
    icon: CreditCard,
    shortcut: "⌘B",
    href: "/customer/dashboard/billing",
  },
  {
    label: "Account Settings",
    icon: Settings,
    shortcut: "⌘S",
    href: "/customer/dashboard/settings",
  },
  {
    label: "Appointment Calendar",
    icon: Calendar,
    shortcut: "⌘A",
    href: "/customer/dashboard/appointments",
  },
  {
    label: "Clinical Notes",
    icon: FileText,
    shortcut: "⌘N",
    href: "/customer/dashboard/clinical-notes",
  },
  {
    label: "Support",
    icon: LifeBuoy,
    href: "/customer/dashboard/support",
  },
  {
    label: "Log out",
    icon: LogOut,
    shortcut: "⇧⌘Q",
    href: "/logout",
  },
];
