// src/app/customer/dashboard/page.tsx
"use client";

import React from "react";
import HumanModel from "./humanmodel/page"; // Adjust the path as necessary

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <div className="mt-6">
        <HumanModel />
      </div>
    </div>
  );
};

export default Dashboard;
