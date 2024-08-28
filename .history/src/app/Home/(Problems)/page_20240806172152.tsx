// src/app/Home/(Problems)/page.tsx

"use client";

import React, { useEffect, useState } from "react";
import CardDemo from "./data";
import { Badge } from "@/components/ui/badge";

interface Statistic {
  name: string;
  ratePerSecond: number;
  image: string;
  value: number;
}

const initialStatistics: Statistic[] = [
  { name: "Heart Disease", ratePerSecond: 0.033, image: "/Problems/HeartDisease.jpg", value: 0 },
  { name: "Injury", ratePerSecond: 0.05, image: "/Problems/Injury.jpg", value: 0 },
  { name: "Respiratory Disease", ratePerSecond: 0.025, image: "/Problems/RespiratoryDisease.jpg", value: 0 },
  { name: "Hospital Admission", ratePerSecond: 0.067, image: "/Problems/HospitalAdmission.jpg", value: 0 },
  { name: "Cancer Detected", ratePerSecond: 0.0083, image: "/Problems/CancerDetected.jpg", value: 0 },
  { name: "Diabetes", ratePerSecond: 0.02, image: "/Problems/Diabetes.jpg", value: 0 },
  { name: "Emergency Visits", ratePerSecond: 0.1, image: "/Problems/EmergencyVisits.jpg", value: 0 },
  { name: "Mental Health Issues", ratePerSecond: 0.042, image: "/Problems/MentalHealthIssues.jpg", value: 0 },
];

const getCurrentDayCount = (rate: number) => {
  const now = new Date();
  const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const secondsSinceStart = (now.getTime() - startOfDay.getTime()) / 1000;
  return Math.floor(rate * secondsSinceStart);
};

export function CardsContainer() {
  const [statistics, setStatistics] = useState<Statistic[]>([]);

  useEffect(() => {
    const updatedStats = initialStatistics.map(stat => ({
      ...stat,
      value: getCurrentDayCount(stat.ratePerSecond),
    }));
    setStatistics([...updatedStats, ...updatedStats]); // Duplicate the statistics for seamless looping
  }, []);

  return (
    <section className="flex flex-col justify-center items-center h-screen w-full overflow-hidden">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-white">Health Impact Statistics</h1>
        <Badge variant="secondary" className="mt-4">Health-related Incidents</Badge>
      </div>
      <div className="marquee">
        <div className="marquee-content flex animate-marquee">
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
      </div>
      <style jsx>{`
        .marquee {
          width: 100%;
          overflow-x: hidden;
        }
        .marquee-content {
          display: flex;
          gap: 2rem;
          align-items: center;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); } // Adjusted to ensure the duplicated content scrolls fully
        }
        .animate-marquee {
          animation: marquee 60s linear infinite; // Adjust speed as necessary
        }
      `}</style>
    </section>
  );
}

export default CardsContainer;
