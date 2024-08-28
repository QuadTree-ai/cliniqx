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
  } from "lucide-react";
  
  export const profileMenuItems = [
    {
      label: "Profile",
      icon: User,
      shortcut: "⇧⌘P",
      href: "/customer/dashboard/profile",
    },
    {
      label: "Billing",
      icon: CreditCard,
      shortcut: "⌘B",
      href: "/customer/dashboard/billing",
    },
    {
      label: "Settings",
      icon: Settings,
      shortcut: "⌘S",
      href: "/customer/dashboard/settings",
    },
    {
      label: "Keyboard shortcuts",
      icon: Keyboard,
      shortcut: "⌘K",
      href: "/customer/dashboard/shortcuts",
    },
    {
      label: "Team",
      icon: Users,
      href: "/customer/dashboard/team",
    },
    {
      label: "Invite users",
      icon: UserPlus,
      href: "/customer/dashboard/invite",
    },
    {
      label: "Email",
      icon: Mail,
      href: "/customer/dashboard/email",
    },
    {
      label: "Message",
      icon: MessageSquare,
      href: "/customer/dashboard/message",
    },
    {
      label: "More...",
      icon: PlusCircle,
      href: "/customer/dashboard/more",
    },
    {
      label: "GitHub",
      icon: Github,
      href: "https://github.com",
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
  