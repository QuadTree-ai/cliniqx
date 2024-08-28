// src/app/customer/dashboard/page.tsx
"use client";

import React from "react";
import HumanModel from "./humanmodel/page"; // Adjust the path as necessary

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <h1 className="text-4xl font-bold text-white">Welcome to Your Dashboard</h1>
      <p className="mt-4 text-xl text-gray-300">
        This is where you can manage your account, view your profile, and more.
      </p>
      
      <div className="mt-6">
        <HumanModel />
      </div>
    </div>
  );
};

export default Dashboard;
