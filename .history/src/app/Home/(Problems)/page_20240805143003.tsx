// src/app/Home/(Problems)/Statistics.tsx
"use client";

import React, { useState, useEffect } from "react";
import { initialStatistics, Statistics as StatsType } from "./StatisticsData";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Statistics: React.FC = () => {
  const [statistics, setStatistics] = useState<StatsType[]>(initialStatistics);

  useEffect(() => {
    const interval = setInterval(() => {
      setStatistics((currentStats) =>
        currentStats.map((stat) => ({
          ...stat,
          value: Math.floor(stat.value + Math.random() * 10 - 5),
        }))
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen p-4 md:p-8 lg:p-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Healthcare Statistics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statistics.map((stat, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex items-center space-x-3 p-4">
              <stat.icon className="text-3xl text-blue-600" />
              <CardTitle className="text-lg font-semibold">{stat.name}</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <p className="text-xl font-bold">{stat.value.toLocaleString()}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
