// src/app/customer/dashboard/page.tsx
"use client";

import React from "react";
import HumanModel from "./humanmodel/page";
import DataUpload from "./dataupload/page"; 

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 space-y-8">
      <HumanModel />
      <DataUpload />
    </div>
  );
};

export default Dashboard;
