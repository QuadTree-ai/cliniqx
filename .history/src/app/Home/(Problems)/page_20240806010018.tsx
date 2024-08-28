// src/app/Home/(Problems)/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import CardDemo from "./data";

// Data array for health problems with statistical rates
const initialStatistics = [
  {
    name: "Heart Disease",
    ratePerSecond: 0.033,
    image: "/Problems/HeartDisease.jpg",
  },
  {
    name: "Injury",
    ratePerSecond: 0.05,
    image: "/Problems/Injury.jpg",
  },
  {
    name: "Respiratory Disease",
    ratePerSecond: 0.025,
    image: "/Problems/RespiratoryDisease.jpg",
  },
  {
    name: "Hospital Admission",
    ratePerSecond: 0.067,
    image: "/Problems/HospitalAdmission.jpg",
  },
  {
    name: "Cancer Detected",
    ratePerSecond: 0.0083,
    image: "/Problems/CancerDetected.jpg",
  },
  {
    name: "Diabetes",
    ratePerSecond: 0.02,
    image: "/Problems/Diabetes.jpg",
  },
  {
    name: "Emergency Visits",
    ratePerSecond: 0.1,
    image: "/Problems/EmergencyVisits.jpg",
  },
  {
    name: "Mental Health Issues",
    ratePerSecond: 0.042,
    image: "/Problems/MentalHealthIssues.jpg",
  },
];

// Function to calculate statistics based on daily rates
const getCurrentDayCount = (rate: number) => {
  const now = new Date();
  const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const secondsSinceStart = (now.getTime() - startOfDay.getTime()) / 1000;
  return Math.floor(rate * secondsSinceStart);
};

// Main component rendering health issue cards
export function CardsContainer() {
  const [statistics, setStatistics] = useState(
    initialStatistics.map((stat) => ({
      ...stat,
      value: getCurrentDayCount(stat.ratePerSecond),
    }))
  );

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
    <>
      <h1 className="text-3xl font-bold text-center mt-6">Health Statistics Dashboard</h1>
      <h2 className="text-xl text-center mb-4">Real-Time Data Visualization of Common Health Issues</h2>
      <div className="flex flex-wrap justify-center gap-10 p-6">
        {statistics.map((stat, index) => (
          <CardDemo
            key={index}
            title={stat.name}
            description="Dynamic data showing the frequency of health-related events."
            author="Health Research"
            readTime="Live Update"
            image={stat.image}
            number={stat.value}
          />
        ))}
      </div>
    </>
  );
}

export default CardsContainer;