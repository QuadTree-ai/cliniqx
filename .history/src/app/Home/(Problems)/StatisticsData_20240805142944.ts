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
  value: number;
  icon: React.ElementType;
}

export const initialStatistics: Statistics[] = [
  { name: "Heart Disease", value: 2880, icon: HeartPulse },
  { name: "Injury", value: 4320, icon: Activity },
  { name: "Respiratory Disease", value: 2160, icon: Wind },
  { name: "Hospital Admission", value: 5760, icon: Hospital },
  { name: "Cancer Detected", value: 720, icon: Radiation },
  { name: "Diabetes", value: 1728, icon: Thermometer },
  { name: "Stroke", value: 1152, icon: Brain },
  { name: "Mental Health Issues", value: 3600, icon: Smile },
];
