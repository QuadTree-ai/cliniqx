// src/app/customer/dashboard/page.tsx
"use client";

import React from "react";
import DataUpload from "./dataupload/uploadfile";

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-row items-center justify-center min-h-screen p-4 space-x-8">
      <DataUpload onUploadSuccess={function (uploadedInsights: Array<{ part: string; problem: string; severity: "low" | "moderate" | "high"; }>): void {
        throw new Error("Function not implemented.");
      } }/>
    </div>
  );
};

export default Dashboard;
