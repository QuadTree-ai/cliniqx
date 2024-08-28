// src/app/Home/(Problems)/Statistics.tsx
"use client";

import React from "react";
import { initialStatistics, Statistics as StatsType } from "./StatisticsData";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const getCurrentDayCount = (rate: number) => {
  const now = new Date();
  const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const secondsSinceStart = (now.getTime() - startOfDay.getTime()) / 1000;
  return Math.floor(rate * secondsSinceStart);
};

const Statistics: React.FC = () => {
  const [statistics, setStatistics] = React.useState<StatsType[]>(() =>
    initialStatistics.map((stat) => ({
      ...stat,
      value: getCurrentDayCount(stat.ratePerSecond),
    }))
  );

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

  return (
    <div className="bg-gray-50 min-h-screen p-4 md:p-8 lg:p-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Todays Healthcare Impact</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statistics.map((stat, index) => (
          <motion.div key={index} className="col-span-1" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.5 } }}>
            <Card className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex items-center space-x-3 bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white">
                <stat.icon className="text-3xl" />
                <CardTitle>{stat.name}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 bg-gray-50">
                <motion.p className="text-xl font-bold" animate={{ scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 2 } }}>
                  {stat.value?.toLocaleString()}
                </motion.p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
