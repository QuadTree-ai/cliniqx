// src/app/Home/(Problems)/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import CardDemo from "./data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Card data array derived from initial statistics
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

// Calculate the current count based on the rate per second
const getCurrentDayCount = (rate: number) => {
  const now = new Date();
  const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const secondsSinceStart = (now.getTime() - startOfDay.getTime()) / 1000;
  return Math.floor(rate * secondsSinceStart);
};

// Main component to render the cards horizontally with faded edges
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
    <div className="relative mx-auto px-4">
      <div className="overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide relative">
        <div className="flex gap-8">
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
        {/* Gradient overlays for fading effect */}
        <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-gray-100 to-transparent"></div>
        <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-gray-100 to-transparent"></div>
      </div>
    </div>
  );
}

export default CardsContainer;