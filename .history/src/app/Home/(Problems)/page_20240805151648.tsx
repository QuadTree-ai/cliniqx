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
  TrendingUp, // Assuming Pressure is the icon for Hypertension
} from "lucide-react";
import { motion } from "framer-motion";

const initialStatistics = [
  { name: "Heart Disease", ratePerSecond: 0.033, icon: HeartPulse },
  { name: "Injury", ratePerSecond: 0.05, icon: Activity },
  { name: "Respiratory Disease", ratePerSecond: 0.025, icon: Wind },
  { name: "Hospital Admission", ratePerSecond: 0.067, icon: Hospital },
  { name: "Cancer Detected", ratePerSecond: 0.0083, icon: Radiation },
  { name: "Diabetes", ratePerSecond: 0.02, icon: Thermometer },
  { name: "Hypertension", ratePerSecond: 0.06, icon: TrendingUp}, // Replaced "Emergency Visits" with "Hypertension"
  { name: "Mental Health Issues", ratePerSecond: 0.042, icon: Headset },
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
    <div className="flex flex-wrap items-center justify-center min-h-screen bg-gradient-to-r from-black via-gray-900 to-black p-8">
      <h1 className="w-full text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-12 text-center">Today&apos;s Healthcare Impact</h1>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {statistics.map((stat, index) => (
          <motion.div key={index} className="py-6 mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: index * 0.1 } }}>
            <stat.icon className="mx-auto text-cyan-400 text-6xl sm:text-7xl md:text-8xl mb-5" />
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-3">{stat.name}</h2>
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ background: 'linear-gradient(to right, #6ee7b7, #3b82f6)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
              {stat.value.toLocaleString()}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
