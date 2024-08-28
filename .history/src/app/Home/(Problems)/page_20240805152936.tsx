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

// Initial data set for statistics, representing different health metrics
const initialStatistics = [
  {
    name: "Heart Disease",
    ratePerSecond: 0.033,
    icon: HeartPulse,
  },
  {
    name: "Injury",
    ratePerSecond: 0.05,
    icon: Activity,
  },
  {
    name: "Respiratory Disease",
    ratePerSecond: 0.025,
    icon: Wind,
  },
  {
    name: "Hospital Admission",
    ratePerSecond: 0.067,
    icon: Hospital,
  },
  {
    name: "Cancer Detected",
    ratePerSecond: 0.0083,
    icon: Radiation,
  },
  {
    name: "Diabetes",
    ratePerSecond: 0.02,
    icon: Thermometer,
  },
  {
    name: "Emergency Visits",
    ratePerSecond: 0.1,
    icon: AlertCircle,
  },
  {
    name: "Mental Health Issues",
    ratePerSecond: 0.042,
    icon: Headset,
  },
];

// Calculates counts based on the rate and the time elapsed since the start of the day
const getCurrentDayCount = (rate: number) => {
  const now = new Date();
  const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const secondsSinceStart = (now.getTime() - startOfDay.getTime()) / 1000;
  return Math.floor(rate * secondsSinceStart);
};

// Main component to display statistics
const Statistics = () => {
  const [statistics, setStatistics] = React.useState(
    initialStatistics.map((stat) => ({
      ...stat,
      value: getCurrentDayCount(stat.ratePerSecond),
    }))
  );

  // Update statistics every second
  React.useEffect(() => {
    const interval = setInterval(() => {
      setStatistics((currentStats) =>
        currentStats.map((stat) => ({
          ...stat,
          value: getCurrentDayCount(stat.ratePerSecond),
        }))
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Current time display
  const currentTime = new Date().toLocaleTimeString();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-black via-gray-900 to-black p-4 md:p-8">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
        Today&apos;s Healthcare Impact
      </h1>
      <p className="text-md md:text-lg text-gray-300 text-center mb-4 md:mb-6">
        Last updated at {currentTime}
      </p>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 p-2 md:p-4">
        {statistics.map((stat, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center py-4 md:py-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: index * 0.1 } }}
          >
            <stat.icon className="mx-auto text-cyan-400 text-6xl md:text-8xl mb-2 md:mb-3" />
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-1">
              {stat.name}
            </h2>
            <p className="text-3xl md:text-4xl font-bold"
              style={{
                background: "linear-gradient(to right, #6ee7b7, #3b82f6)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              {stat.value.toLocaleString()}
              <span className="text-gray-400 text-lg md:text-xl">/sec</span>
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
