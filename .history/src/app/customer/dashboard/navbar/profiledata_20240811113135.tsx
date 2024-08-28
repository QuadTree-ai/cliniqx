// src/app/customer/dashboard/navbar/profiledata.tsx

import {
  User,
  CreditCard,
  Settings,
  Keyboard,
  Users,
  UserPlus,
  Mail,
  MessageSquare,
  PlusCircle,
  LogOut,
  LifeBuoy,
  Github,
  Calendar,
  FileText,
  Stethoscope,
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
    label: "Practice Team",
    icon: Users,
    href: "/customer/dashboard/team",
  },
  {
    label: "Add New Practitioner",
    icon: UserPlus,
    href: "/customer/dashboard/invite-practitioner",
  },
  {
    label: "Secure Messaging",
    icon: MessageSquare,
    href: "/customer/dashboard/secure-messaging",
  },
  {
    label: "Email Notifications",
    icon: Mail,
    href: "/customer/dashboard/email-notifications",
  },
  {
    label: "Patient Portal",
    icon: Stethoscope,
    href: "/customer/dashboard/patient-portal",
  },
  {
    label: "Integration Hub",
    icon: PlusCircle,
    href: "/customer/dashboard/integrations",
  },
  {
    label: "Support",
    icon: LifeBuoy,
    href: "/customer/dashboard/support",
  },
  {
    label: "Developer Portal",
    icon: Github,
    href: "https://github.com",
  },
  {
    label: "Log out",
    icon: LogOut,
    shortcut: "⇧⌘Q",
    href: "/logout",
  },
];
