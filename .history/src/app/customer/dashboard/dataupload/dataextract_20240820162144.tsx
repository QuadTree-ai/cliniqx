import React, { useEffect, useState } from "react";

type Insight = {
  part: string;
  problem: string;
  severity: "low" | "moderate" | "high";
};

type DataExtractionProps = {
  text: string;
};

export default function DataExtraction({ text }: DataExtractionProps) {
  const [insights, setInsights] = useState<Insight[] | null>(null);

  useEffect(() => {
    // Assuming `text` contains the extracted data to be sent to the API for analysis.
    const analyzeData = async () => {
      try {
        const response = await fetch("/api/analyze", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text }),
        });

        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || "Failed to analyze the data.");
        }

        setInsights(data.insights);
      } catch (error) {
        console.error("Error analyzing data:", error);
      }
    };

    analyzeData();
  }, [text]);

  return (
    <div>
      <h2>Health Insights</h2>
      {insights ? (
        insights.map((insight, index) => (
          <div key={index}>
            <h3>{insight.part}</h3>
            <p>Problem: {insight.problem}</p>
            <p>Severity: {insight.severity}</p>
          </div>
        ))
      ) : (
        <p>Analyzing...</p>
      )}
    </div>
  );
}
