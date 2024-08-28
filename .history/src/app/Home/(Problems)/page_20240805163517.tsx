// src/app/Home/(Problems)/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import CardDemo from "./data";

// Card data array derived from initial statistics
const initialStatistics = [
  {
    name: "Heart Disease",
    ratePerSecond: 0.033,
    image: "/Problems/Heart Disease.jpg",
  },
  {
    name: "Injury",
    ratePerSecond: 0.05,
    image: "/Problems/Injury.jpg",
  },
  {
    name: "Respiratory Disease",
    ratePerSecond: 0.025,
    image: "/Problems/Respiratory Disease.jpg",
  },
  {
    name: "Hospital Admission",
    ratePerSecond: 0.067,
    image: "/Problems/Hospital Admission.jpg",
  },
  {
    name: "Cancer Detected",
    ratePerSecond: 0.0083,
    image: "/Problems/Cancer Detected.jpg",
  },
  {
    name: "Diabetes",
    ratePerSecond: 0.02,
    image: "/Problems/Diabetes.jpg",
  },
  {
    name: "Emergency Visits",
    ratePerSecond: 0.1,
    image: "/Problems/Emergency Visits.jpg",
  },
  {
    name: "Mental Health Issues",
    ratePerSecond: 0.042,
    image: "/Problems/Mental Health Issues.jpg",
  },
];

// Function to calculate current day count based on rate
const getCurrentDayCount = (rate: number) => {
  const now = new Date();
  const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const secondsSinceStart = (now.getTime() - startOfDay.getTime()) / 1000;
  return Math.floor(rate * secondsSinceStart);
};

// Main component to render multiple cards
export function CardsContainer() {
  const [statistics, setStatistics] = useState(
    initialStatistics.map((stat) => ({
      ...stat,
      value: getCurrentDayCount(stat.ratePerSecond),
    }))
  );

  // Update statistics every second
  useEffect(() => {
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
    <div className="flex flex-wrap justify-center gap-8 p-4">
      {statistics.map((stat, index) => (
        <CardDemo
          key={index}
          title={stat.name}
          description="This card shows live statistics based on real-time data analysis."
          author="Health Research"
          readTime="Dynamic Data"
          image={stat.image}  // Using the image path directly from the stats
          avatarUrl="/avatar-placeholder.png" // Ensure this file exists in the public directory
          number={stat.value}
        />
      ))}
    </div>
  );
}

export default CardsContainer;
