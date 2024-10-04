import React from 'react';
import ProfileButton from './profilebutton';
import Logo from '@/app/logos/cliniqx-invent-logo';

const Navbar: React.FC = () => {
  return (
    <header className="bg-white shadow-sm z-10">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center">
        <Logo className="h-8 w-auto mr-auto" textColor="text-gray-900" />
        <h1 className="text-2xl font-semibold text-gray-900 mx-auto">Diagnostic Dashboard</h1>
        <ProfileButton className="ml-auto" />
      </div>
    </header>
  );
};

export default Navbar;