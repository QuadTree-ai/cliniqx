"use client";

import React from "react";
import {
  HeartPulse,
  Activity,
  Wind,
  Hospital,
  Radiation,
  Thermometer,
  Brain,
  Headset,
  AlertCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

// Initial data set for statistics, representing different health metrics
const initialStatistics = [
  { name: "Heart Disease", ratePerSecond: 0.033, icon: HeartPulse, description: "Cases per second globally" },
  { name: "Injury", ratePerSecond: 0.05, icon: Activity, description: "Injury reports per second" },
  { name: "Respiratory Disease", ratePerSecond: 0.025, icon: Wind, description: "Respiratory cases detected per second" },
  { name: "Hospital Admission", ratePerSecond: 0.067, icon: Hospital, description: "Hospital admissions per second" },
  { name: "Cancer Detected", ratePerSecond: 0.0083, icon: Radiation, description: "New cancer cases per second" },
  { name: "Diabetes", ratePerSecond: 0.02, icon: Thermometer, description: "Diabetes diagnoses per second" },
  { name: "Emergency Visits", ratePerSecond: 0.1, icon: AlertCircle, description: "Emergency department visits per second" },
  { name: "Mental Health Issues", ratePerSecond: 0.042, icon: Headset, description: "Mental health issue reports per second" },
];

// Calculates counts based on the rate and the time elapsed since the start of the day
const getCurrentDayCount = (rate) => {
  const now = new Date();
  const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const secondsSinceStart = (now.getTime() - startOfDay.getTime()) / 1000;
  return Math.floor(rate * secondsSinceStart);
};

// Main component to display statistics
const Statistics = () => {
  const [statistics, setStatistics] = React.useState(initialStatistics.map(stat => ({
    ...stat,
    value: getCurrentDayCount(stat.ratePerSecond),
  })));

  // Update statistics every second
  React.useEffect(() => {
    const interval = setInterval(() => {
      setStatistics(currentStats => currentStats.map(stat => ({
        ...stat,
        value: getCurrentDayCount(stat.ratePerSecond),
      })));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Current time display
  const currentTime = new Date().toLocaleTimeString();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-black via-gray-900 to-black p-8">
      <h1 className="text-5xl font-bold text-white mb-12 text-center">Today&apos;s Healthcare Impact</h1>
      <p className="text-lg text-gray-300 text-center mb-6">Last updated at {currentTime}</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center mb-8">
        {statistics.map((stat, index) => (
          <motion.div key={index} className="py-6" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: index * 0.1 } }}>
            <stat.icon className="mx-auto text-cyan-400 text-8xl mb-3" />
            <h2 className="text-2xl font-semibold text-white mb-1">{stat.name}</h2>
            <p className="text-md text-gray-400 mb-2">{stat.description}</p>
            <p className="text-4xl font-bold" style={{ background: 'linear-gradient(to right, #6ee7b7, #3b82f6)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
              {stat.value.toLocaleString()}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
