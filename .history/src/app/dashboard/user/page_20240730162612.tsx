// src/app/dashboard/user/page.tsx

import React from 'react';
import DashboardLayout from './layout';

const UserDashboardPage: React.FC = () => {
  return (
    <DashboardLayout>
      <div>
        <h2 className="text-2xl font-bold mb-4">Welcome to Your Dashboard</h2>
        <p>This is your dashboard where you can manage your profile, settings, and more.</p>
      </div>
    </DashboardLayout>
  );
};

export default UserDashboardPage;