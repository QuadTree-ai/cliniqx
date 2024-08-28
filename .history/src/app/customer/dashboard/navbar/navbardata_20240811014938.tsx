// src/app/customer/dashboard/navbar/navbardata.tsx

import {
  Home,
  StickyNote,
  FileText,
  Image,
  MessageSquare,
} from "lucide-react";

import { createIcons, icons } from 'lucide';

export const navLinks = [
  { href: "/customer/dashboard/overview", label: "Overview", icon: Home },
  { href: "/customer/dashboard/notes", label: "Notes", icon: StickyNote },
  { href: "/customer/dashboard/docs", label: "Docs", icon: FileText },
  { href: "/customer/dashboard/labs", label: "Labs", icon: flask-conical },
  { href: "/customer/dashboard/imagines", label: "Imagines", icon: Image },
  { href: "/customer/dashboard/communication", label: "Communication", icon: MessageSquare },
];
