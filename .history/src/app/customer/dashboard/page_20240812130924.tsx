// src/app/customer/dashboard/page.tsx
"use client";

import React from "react";
import HumanModel from "./humanmodel/page";
import DataUpload from "./dataupload/page"; 

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-row items-center justify-center min-h-screen p-4 space-x-8">
      <HumanModel />
      <DataUpload />
    </div>
  );
};

export default Dashboard;
