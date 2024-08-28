// src/app/dashboard/user/layout.tsx

import React, { ReactNode } from 'react';

interface DashboardLayoutProps {
  children: ReactNode;  // Define the type for children
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-800">
      <aside className="w-64 bg-gray-800 text-white">
        <ul className="space-y-2 p-5">
          <li className="hover:bg-gray-700 p-2 rounded">Home</li>
          <li className="hover:bg-gray-700 p-2 rounded">Profile</li>
          <li className="hover:bg-gray-700 p-2 rounded">Settings</li>
          <li className="hover:bg-gray-700 p-2 rounded">Logout</li>
        </ul>
      </aside>
      <main className="flex-1">
        {children} 
      </main>
    </div>
  );
};

export default DashboardLayout;