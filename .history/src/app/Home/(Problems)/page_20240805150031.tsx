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
  Smile,
} from "lucide-react";
import { motion } from "framer-motion";

const initialStatistics = [
  { name: "Heart Disease", ratePerSecond: 0.033, icon: HeartPulse },
  { name: "Injury", ratePerSecond: 0.05, icon: Activity },
  { name: "Respiratory Disease", ratePerSecond: 0.025, icon: Wind },
  { name: "Hospital Admission", ratePerSecond: 0.067, icon: Hospital },
  { name: "Cancer Detected", ratePerSecond: 0.0083, icon: Radiation },
  { name: "Diabetes", ratePerSecond: 0.02, icon: Thermometer },
  { name: "Stroke", ratePerSecond: 0.013, icon: Brain },
  { name: "Mental Health Issues", ratePerSecond: 0.042, icon: Smile },
];

const getCurrentDayCount = (rate: number) => {
  const now = new Date();
  const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const secondsSinceStart = (now.getTime() - startOfDay.getTime()) / 1000;
  return Math.floor(rate * secondsSinceStart);
};

const Statistics = () => {
  const [statistics, setStatistics] = React.useState(initialStatistics.map(stat => ({
    ...stat,
    value: getCurrentDayCount(stat.ratePerSecond),
  })));

  React.useEffect(() => {
    const interval = setInterval(() => {
      setStatistics(currentStats => currentStats.map(stat => ({
        ...stat,
        value: getCurrentDayCount(stat.ratePerSecond),
      })));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-black min-h-screen p-4 md:p-8 lg:p-12 text-white">
      <h1 className="text-4xl font-bold mb-6 text-center">Today&apos;s Healthcare Impact</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-4 text-center">
        {statistics.map((stat, index) => (
          <motion.div key={index} className="py-4" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: index * 0.1 } }}>
            <stat.icon className="mx-auto text-blue-500 text-5xl" />
            <h2 className="text-xl font-semibold mt-3">{stat.name}</h2>
            <p className="text-3xl font-bold">{stat.value.toLocaleString()}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
