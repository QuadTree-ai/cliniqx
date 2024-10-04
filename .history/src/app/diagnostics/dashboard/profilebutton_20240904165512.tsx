import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { User, CreditCard, Settings, LogOut, LifeBuoy } from "lucide-react";
import Link from "next/link";

const profileMenuItems = [
  {
    label: "User Profile",
    icon: User,
    href: "/diagnostics/dashboard/user-profile",
  },
  {
    label: "Billing",
    icon: CreditCard,
    href: "/diagnostics/dashboard/billing",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/diagnostics/dashboard/settings",
  },
  {
    label: "Support",
    icon: LifeBuoy,
    href: "/diagnostics/dashboard/support",
  },
  {
    label: "Log out",
    icon: LogOut,
    href: "/logout",
  },
];

const ProfileButton: React.FC = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="w-10 h-10 cursor-pointer">
          <AvatarImage src="/path-to-user-image.jpg" alt="User" />
          <AvatarFallback>US</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {profileMenuItems.map((item) => (
            <DropdownMenuItem key={item.label} asChild>
              <Link href={item.href}>
                <div className="flex items-center space-x-2">
                  <item.icon className="mr-2 h-4 w-4" />
                  <span>{item.label}</span>
                </div>
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default ProfileButton;