// src/app/dashboard/user/page.tsx

import React from 'react';
import DashboardLayout from './layout';

const UserDashboardPage: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="p-10">
        <h1 className="text-3xl font-bold mb-4">Dashboard Home</h1>
        <p>Welcome to your dashboard. Here, you can manage your medical records, view upcoming appointments, and much more.</p>
      </div>
    </DashboardLayout>
  );
};

export default UserDashboardPage;