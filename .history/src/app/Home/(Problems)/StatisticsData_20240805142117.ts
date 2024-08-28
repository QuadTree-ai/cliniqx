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
  
  // Define the type for statistics
  interface Statistics {
    heartDisease: number;
    injury: number;
    respiratoryDisease: number;
    hospitalAdmit: number;
    cancerDetected: number;
    diabetes: number;
    stroke: number;
    mentalHealth: number;
  }
  
  // Define the per-minute statistics
  const statisticsPerMinute: Statistics = {
    heartDisease: 2,
    injury: 3,
    respiratoryDisease: 1.5,
    hospitalAdmit: 4,
    cancerDetected: 0.5,
    diabetes: 1.2,
    stroke: 0.8,
    mentalHealth: 2.5,
  };
  
  // Calculate total numbers per day
  const minutesInDay = 1440;
  export const statisticsPerDay: Statistics = {
    heartDisease: Math.round(statisticsPerMinute.heartDisease * minutesInDay),
    injury: Math.round(statisticsPerMinute.injury * minutesInDay),
    respiratoryDisease: Math.round(
      statisticsPerMinute.respiratoryDisease * minutesInDay
    ),
    hospitalAdmit: Math.round(statisticsPerMinute.hospitalAdmit * minutesInDay),
    cancerDetected: Math.round(statisticsPerMinute.cancerDetected * minutesInDay),
    diabetes: Math.round(statisticsPerMinute.diabetes * minutesInDay),
    stroke: Math.round(statisticsPerMinute.stroke * minutesInDay),
    mentalHealth: Math.round(statisticsPerMinute.mentalHealth * minutesInDay),
  };
  
  // Prepare data for charts
  export const data = [
    {
      name: "Heart Disease",
      value: statisticsPerDay.heartDisease,
      icon: HeartPulse,
    },
    { name: "Injury", value: statisticsPerDay.injury, icon: Activity },
    {
      name: "Respiratory Disease",
      value: statisticsPerDay.respiratoryDisease,
      icon: Wind,
    },
    {
      name: "Hospital Admission",
      value: statisticsPerDay.hospitalAdmit,
      icon: Hospital,
    },
    {
      name: "Cancer Detected",
      value: statisticsPerDay.cancerDetected,
      icon: Radiation,
    },
    { name: "Diabetes", value: statisticsPerDay.diabetes, icon: Thermometer },
    { name: "Stroke", value: statisticsPerDay.stroke, icon: Brain },
    {
      name: "Mental Health Issues",
      value: statisticsPerDay.mentalHealth,
      icon: Smile,
    },
  ];
  