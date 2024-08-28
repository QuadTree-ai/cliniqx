"use client";

import React, { useEffect, useState } from "react";
import CardDemo from "./data";

const initialStatistics = [
  { name: "Heart Disease", ratePerSecond: 0.033, image: "/Problems/HeartDisease.jpg" },
  // ...other statistics
];

const getCurrentDayCount = (rate: number) => {
  const now = new Date();
  const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const secondsSinceStart = (now.getTime() - startOfDay.getTime()) / 1000;
  return Math.floor(rate * secondsSinceStart);
};

export function CardsContainer() {
  const [statistics, setStatistics] = useState(initialStatistics.map(stat => ({
    ...stat,
    value: getCurrentDayCount(stat.ratePerSecond),
  })));

  useEffect(() => {
    const interval = setInterval(() => {
      setStatistics(currentStats =>
        currentStats.map(stat => ({
          ...stat,
          value: getCurrentDayCount(stat.ratePerSecond),
        }))
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="text-center py-12">
        <h1 className="text-5xl font-bold text-white mb-8">Health Impact Statistics</h1>
        <p className="text-lg text-gray-400 mb-12">Overview of current health challenges and live updates on health-related incidents</p>
      </div>
      <div className="flex flex-wrap justify-center gap-8 p-12">
        {statistics.map((stat, index) => (
          <CardDemo
            key={index}
            title={stat.name}
            description="This card shows live statistics based on real-time data analysis."
            author="Health Research"
            readTime="Dynamic Data"
            image={stat.image}
            number={stat.value}
          />
        ))}
      </div>
    </>
  );
}

export default CardsContainer;
