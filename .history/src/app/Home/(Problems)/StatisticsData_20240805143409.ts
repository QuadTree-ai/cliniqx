// src/app/Home/(Problems)/StatisticsData.ts
import {
  HeartPulse,
  Activity,
  Wind,
  Hospital,
  Radiation,
  Thermometer,
  Brain,
  Smile,
} from "lucide-react";

export interface Statistics {
  name: string;
  ratePerMinute: number; // rate of incidents per minute
  icon: React.ElementType;
}

export const initialStatistics: Statistics[] = [
  { name: "Heart Disease", ratePerMinute: 2, icon: HeartPulse },
  { name: "Injury", ratePerMinute: 3, icon: Activity },
  { name: "Respiratory Disease", ratePerMinute: 1.5, icon: Wind },
  { name: "Hospital Admission", ratePerMinute: 4, icon: Hospital },
  { name: "Cancer Detected", ratePerMinute: 0.5, icon: Radiation },
  { name: "Diabetes", ratePerMinute: 1.2, icon: Thermometer },
  { name: "Stroke", ratePerMinute: 0.8, icon: Brain },
  { name: "Mental Health Issues", ratePerMinute: 2.5, icon: Smile },
];
