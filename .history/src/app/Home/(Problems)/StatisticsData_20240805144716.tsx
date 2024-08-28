// src/app/Home/(Problems)/StatisticsData.tsx
import React from "react";
import { HeartPulse, Activity, Wind, Hospital, Radiation, Thermometer, Brain, Smile } from "lucide-react";

export interface StatisticsItem {
  name: string;
  ratePerSecond: number;  // Rate per second for granularity
  icon: React.ElementType;
  value?: number;  // Optional, to be calculated dynamically
}

export const initialStatistics: StatisticsItem[] = [
  { name: "Heart Disease", ratePerSecond: 0.033, icon: HeartPulse },
  { name: "Injury", ratePerSecond: 0.05, icon: Activity },
  { name: "Respiratory Disease", ratePerSecond: 0.025, icon: Wind },
  { name: "Hospital Admission", ratePerSecond: 0.067, icon: Hospital },
  { name: "Cancer Detected", ratePerSecond: 0.0083, icon: Radiation },
  { name: "Diabetes", ratePerSecond: 0.02, icon: Thermometer },
  { name: "Stroke", ratePerSecond: 0.013, icon: Brain },
  { name: "Mental Health Issues", ratePerSecond: 0.042, icon: Smile },
];
