// src/app/customer/dashboard/page.tsx
"use client";

import React from "react";
import DataExtraction from "./dataupload/DataExtraction";
import DataUpload from "./dataupload/uploadfile";

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-row items-center justify-center min-h-screen p-4 space-x-8">
      <DataExtraction />
      <DataUpload/>
    </div>
  );
};

export default Dashboard;
