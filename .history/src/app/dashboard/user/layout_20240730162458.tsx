// src/app/dashboard/user/layout.tsx

import React from 'react';

const DashboardLayout: React.FC = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <header className="dashboard-header">
        <h1>User Dashboard</h1>
      </header>
      <aside className="dashboard-sidebar">
        <ul>
          <li>Home</li>
          <li>Profile</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      </aside>
      <main className="dashboard-content">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;