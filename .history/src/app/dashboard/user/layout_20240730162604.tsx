// src/app/dashboard/user/layout.tsx

import React from 'react';

const DashboardLayout: React.FC = ({ children }) => {
  return (
    <div className="min-h-screen flex">
      <header className="w-full py-5 px-10 bg-gray-800 text-white text-center">
        <h1>User Dashboard</h1>
      </header>
      <aside className="w-64 bg-gray-700 text-white min-h-screen">
        <ul className="space-y-2 p-5">
          <li className="hover:bg-gray-600 p-2 rounded">Home</li>
          <li className="hover:bg-gray-600 p-2 rounded">Profile</li>
          <li className="hover:bg-gray-600 p-2 rounded">Settings</li>
          <li className="hover:bg-gray-600 p-2 rounded">Logout</li>
        </ul>
      </aside>
      <main className="flex-1 p-10 bg-gray-100 text-gray-900">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;