"use client"

/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
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
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

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

// Calculate per-minute statistics based on research
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

const calculatePerSecond = (stats: Statistics): Statistics => {
  return {
    heartDisease: stats.heartDisease / 60,
    injury: stats.injury / 60,
    respiratoryDisease: stats.respiratoryDisease / 60,
    hospitalAdmit: stats.hospitalAdmit / 60,
    cancerDetected: stats.cancerDetected / 60,
    diabetes: stats.diabetes / 60,
    stroke: stats.stroke / 60,
    mentalHealth: stats.mentalHealth / 60,
  };
};

const Statistics = () => {
  const [currentStats, setCurrentStats] = useState<Statistics>(statisticsPerMinute);

  useEffect(() => {
    const perSecondStats = calculatePerSecond(statisticsPerMinute);
    const intervalId = setInterval(() => {
      setCurrentStats(prevStats => ({
        heartDisease: prevStats.heartDisease + perSecondStats.heartDisease,
        injury: prevStats.injury + perSecondStats.injury,
        respiratoryDisease: prevStats.respiratoryDisease + perSecondStats.respiratoryDisease,
        hospitalAdmit: prevStats.hospitalAdmit + perSecondStats.hospitalAdmit,
        cancerDetected: prevStats.cancerDetected + perSecondStats.cancerDetected,
        diabetes: prevStats.diabetes + perSecondStats.diabetes,
        stroke: prevStats.stroke + perSecondStats.stroke,
        mentalHealth: prevStats.mentalHealth + perSecondStats.mentalHealth,
      }));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const statsData = [
    { name: "Heart Disease", value: currentStats.heartDisease, icon: <HeartPulse /> },
    { name: "Injury", value: currentStats.injury, icon: <Activity /> },
    { name: "Respiratory Disease", value: currentStats.respiratoryDisease, icon: <Wind /> },
    { name: "Hospital Admission", value: currentStats.hospitalAdmit, icon: <Hospital /> },
    { name: "Cancer Detected", value: currentStats.cancerDetected, icon: <Radiation /> },
    { name: "Diabetes", value: currentStats.diabetes, icon: <Thermometer /> },
    { name: "Stroke", value: currentStats.stroke, icon: <Brain /> },
    { name: "Mental Health Issues", value: currentStats.mentalHealth, icon: <Smile /> },
  ];

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center mb-6">Today's Healthcare Impact</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((item, index) => (
          <Card key={index} className="transition duration-300 hover:scale-105 shadow-lg">
            <CardHeader className="flex items-center space-x-4 bg-gradient-to-r from-indigo-500 to-purple-500 p-4 text-white">
              {item.icon}
              <CardTitle>{item.name}</CardTitle>
            </CardHeader>
            <CardContent className="p-4 bg-gray-100">
              <motion.div
                className="text-xl font-bold"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                {Math.round(item.value).toLocaleString()}
              </motion.div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
