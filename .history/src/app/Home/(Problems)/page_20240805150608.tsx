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
  Headset,  // Changed icon for mental health from Smile to Headset
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
  { name: "Mental Health Issues", ratePerSecond: 0.042, icon: Headset },  // Changed icon
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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-black via-gray-900 to-black p-8">
      <div>
        <h1 className="text-5xl font-bold text-white mb-12 text-center">Today&apos;s Healthcare Impact</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {statistics.map((stat, index) => (
            <motion.div key={index} className="py-6" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: index * 0.1 } }}>
              <stat.icon className="mx-auto text-cyan-400 text-8xl mb-5" />
              <h2 className="text-2xl font-semibold text-white mb-4">{stat.name}</h2>
              <p className="text-4xl font-bold text-white">{stat.value.toLocaleString()}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
