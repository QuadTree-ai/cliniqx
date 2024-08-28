// src/app/customer/dashboard/navbar/navbardata.tsx

import {
  Home,
  Calendar,
  Clipboard,
  FileText,
  FlaskRound,
  Image,
  MessageSquare,
  BarChart2,
} from "lucide-react";

export const navLinks = [
  { href: "/customer/dashboard/overview", label: "Overview", icon: Home },
  { href: "/customer/dashboard/appointments", label: "Appointments", icon: Calendar },
  { href: "/customer/dashboard/docs", label: "Documents", icon: FileText },
  { href: "/customer/dashboard/labs", label: "Lab Results", icon: FlaskRound },
  { href: "/customer/dashboard/imaging", label: "Imaging", icon: Image },
  { href: "/customer/dashboard/communication", label: "Communication", icon: MessageSquare },
  { href: "/customer/dashboard/reports", label: "Reports", icon: BarChart2 },
];
