// src/app/customer/dashboard/navbar/navbardata.tsx

import {
  Home,
  Clipboard,
  Calendar,
  User,
  FolderOpen,
  MessageSquare,
  Stethoscope,
} from "lucide-react";

export const navLinks = [
  { href: "/customer/dashboard/overview", label: "Dashboard", icon: Home },
  { href: "/customer/dashboard/patients", label: "Patients", icon: User },
  { href: "/customer/dashboard/appointments", label: "Appointments", icon: Calendar },
  { href: "/customer/dashboard/records", label: "Medical Records", icon: Clipboard },
  { href: "/customer/dashboard/labs", label: "Lab Results", icon: Stethoscope },
  { href: "/customer/dashboard/docs", label: "Documents", icon: FolderOpen },
  { href: "/customer/dashboard/communication", label: "Messages", icon: MessageSquare },
];
