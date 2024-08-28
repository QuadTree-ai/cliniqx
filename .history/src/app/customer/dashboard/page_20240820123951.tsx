"use client";

import React, { useState } from "react";
import DataUpload from "./dataupload/uploadfile"; // Import the DataUpload component
import HealthInsight from "./dataupload/healthinsight"; // Import the HealthInsight component

type Insight = {
  part: string;
  problem: string;
  severity: 'low' | 'moderate' | 'high';
};

const Dashboard: React.FC = () => {
  const [insights, setInsights] = useState<Insight[] | null>(null);

  // Callback to handle successful file upload
  const handleUploadSuccess = (uploadedInsights: Insight[]) => {
    setInsights(uploadedInsights); // Store the insights received from the server
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 space-y-8">
      {!insights ? (
        // Render DataUpload component until we receive insights
        <DataUpload onUploadSuccess={handleUploadSuccess} />
      ) : (
        // Render HealthInsight component after successful upload
        <HealthInsight insights={insights} />
      )}
    </div>
  );
};

export default Dashboard;
