// src/app/Home/(Problems)/Statistics.tsx
"use client";

import React from "react";
import { initialStatistics, StatisticsItem } from "./StatisticsData";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const getCurrentDayCount = (rate: number) => {
  const now = new Date();
  const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const secondsSinceStart = (now.getTime() - startOfDay.getTime()) / 1000;
  return Math.floor(rate * secondsSinceStart);
};

const Statistics: React.FC = () => {
  const [statistics, setStatistics] = React.useState<StatisticsItem[]>(() =>
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
    }, 1000); // update every second
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen p-4 md:p-8 lg:p-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Today&apos;s Healthcare Impact</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statistics.map((stat, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex items-center space-x-3 p-4">
              <stat.icon className="text-3xl text-blue-600" />
              <CardTitle>{stat.name}</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <p className="text-xl font-bold">{stat.value?.toLocaleString()}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
