// src/app/customer/dashboard/page.tsx
"use client";

import React from "react";
import DataUpload from "./dataupload/uploadfile";
import AnatomyFront from "./humanmodel/model/anatomyFront";

const Dashboard: React.FC = () => {
  const handleOrganClick = (organId: string) => {
    console.log(`Clicked on ${organId}`);
    // Add your logic here for what should happen when an organ is clicked
  };

  return (
    <div className="flex flex-row items-center justify-center min-h-screen p-4 space-x-8">
      <DataUpload onUploadSuccess={function (uploadedInsights: Array<{ part: string; problem: string; severity: "low" | "moderate" | "high"; }>): void {
        throw new Error("Function not implemented.");
      } }/>
      <AnatomyFront />
    </div>
  );
};

export default Dashboard;
