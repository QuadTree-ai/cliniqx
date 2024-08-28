"use client";

import React, { useState } from "react";
import DataUpload from "./dataupload/uploadfile";
import HealthInsight from "./dataupload/healthinsight"; // Import the HealthInsight component

const Dashboard: React.FC = () => {
  const [insights, setInsights] = useState<any[] | null>(null);

  // Callback to handle successful file upload and analysis
  const handleUploadSuccess = (uploadedInsights: any[]) => {
    console.log("Insights received in Dashboard:", uploadedInsights); // Log the insights received
    setInsights(uploadedInsights); // Store the insights received from the server
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 space-y-8">
      {!insights ? (
        <DataUpload onUploadSuccess={handleUploadSuccess} />
      ) : (
        insights && <HealthInsight insights={insights} /> // Render HealthInsight if insights exist
      )}
    </div>
  );
};

export default Dashboard;
