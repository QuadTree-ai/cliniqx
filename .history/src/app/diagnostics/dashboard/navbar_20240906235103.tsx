import React from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import ProfileButton from './profilebutton';

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  return (
    <header className="bg-white shadow-sm z-10">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Button variant="ghost" size="icon" onClick={toggleSidebar}>
          <Menu className="h-6 w-6" />
        </Button>
        <h1 className="text-2xl font-semibold text-gray-900">Diagnostic Dashboard</h1>
        <ProfileButton />
      </div>
    </header>
  );
};

export default Navbar;
