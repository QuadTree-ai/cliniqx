// src/app/Home/(Problems)/page.tsx

"use client";

import React, { useEffect, useState } from "react";
import CardDemo from "./data";
import { Badge } from "@/components/ui/badge";

const initialStatistics = [
  { name: "Heart Disease", ratePerSecond: 0.033, image: "/Problems/HeartDisease.jpg" },
  { name: "Injury", ratePerSecond: 0.05, image: "/Problems/Injury.jpg" },
  { name: "Respiratory Disease", ratePerSecond: 0.025, image: "/Problems/RespiratoryDisease.jpg" },
  { name: "Hospital Admission", ratePerSecond: 0.067, image: "/Problems/HospitalAdmission.jpg" },
  { name: "Cancer Detected", ratePerSecond: 0.0083, image: "/Problems/CancerDetected.jpg" },
  { name: "Diabetes", ratePerSecond: 0.02, image: "/Problems/Diabetes.jpg" },
  { name: "Emergency Visits", ratePerSecond: 0.1, image: "/Problems/EmergencyVisits.jpg" },
  { name: "Mental Health Issues", ratePerSecond: 0.042, image: "/Problems/MentalHealthIssues.jpg" },
];

const getCurrentDayCount = (rate: number) => {
  const now = new Date();
  const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const secondsSinceStart = (now.getTime() - startOfDay.getTime()) / 1000;
  return Math.floor(rate * secondsSinceStart);
};

export function CardsContainer() {
  const [statistics, setStatistics] = useState([]);

  useEffect(() => {
    // Populate statistics with initial values only on the client side
    const updatedStats = initialStatistics.map(stat => ({
      ...stat,
      value: getCurrentDayCount(stat.ratePerSecond),
    }));
    setStatistics(updatedStats);

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
    <section className="text-center mt-48 mb-4 py-12">
      <div className="mb-8">
        <h1 className="text-5xl font-bold text-white">Health Impact Statistics</h1>
        <Badge variant="secondary">Health-related Incidents</Badge>
      </div>
      <div className="flex flex-wrap justify-center gap-8 p-8">
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
    </section>
  );
}

export default CardsContainer;
