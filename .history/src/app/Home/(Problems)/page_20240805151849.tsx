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
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";

const initialStatistics = [
  { name: "Heart Disease", ratePerSecond: 0.033, icon: HeartPulse },
  { name: "Injury", ratePerSecond: 0.05, icon: Activity },
  { name: "Respiratory Disease", ratePerSecond: 0.025, icon: Wind },
  { name: "Hospital Admission", ratePerSecond: 0.067, icon: Hospital },
  { name: "Cancer Detected", ratePerSecond: 0.0083, icon: Radiation },
  { name: "Diabetes", ratePerSecond: 0.02, icon: Thermometer },
  { name: "Hypertension", ratePerSecond: 0.06, icon: TrendingUp },
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
    <div className="flex flex-wrap justify-center items-center bg-gradient-to-r from-black via-gray-900 to-black min-h-screen p-4">
      <div className="text-center w-full">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-10">Today&apos;s Healthcare Impact</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {statistics.map((stat, index) => (
            <motion.div key={index} className="m-2" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: index * 0.05 } }}>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <stat.icon className="mx-auto text-cyan-400 text-5xl mb-4" />
                <h2 className="text-lg md:text-xl font-semibold text-white">{stat.name}</h2>
                <p className="text-2xl md:text-3xl font-bold" style={{ background: 'linear-gradient(to right, #6ee7b7, #3b82f6)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
                  {stat.value.toLocaleString()}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
