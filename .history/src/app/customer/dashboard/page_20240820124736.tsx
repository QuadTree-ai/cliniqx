"use client";

import React, { useState } from "react";
import DataUpload from "./dataupload/uploadfile";
import HealthInsight from "./dataupload/healthinsight"; // Import the HealthInsight component

type Insight = {
  part: keyof typeof iconsMap;
  problem: string;
  severity: 'low' | 'moderate' | 'high';
};

const Dashboard: React.FC = () => {
  const [insights, setInsights] = useState<Insight[] | null>(null);

  // Callback to handle successful file upload and analysis
  const handleUploadSuccess = (uploadedInsights: Insight[]) => {
    setInsights(uploadedInsights); // Store the insights received from the server
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 space-y-8">
      {!insights ? (
        <DataUpload onUploadSuccess={handleUploadSuccess} />
      ) : (
        <HealthInsight insights={insights} />
      )}
    </div>
  );
};

export default Dashboard;
