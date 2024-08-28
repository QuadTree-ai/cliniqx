// src/app/Home/(Problems)/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import CardDemo from "./data";

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

// Function to calculate current day count based on rate
const getCurrentDayCount = (rate: number) => {
  const now = new Date();
  const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const secondsSinceStart = (now.getTime() - startOfDay.getTime()) / 1000;
  return Math.floor(rate * secondsSinceStart);
};

// Main component to render the carousel of cards
export function CardsContainer() {
  const [statistics, setStatistics] = useState(
    initialStatistics.map((stat) => ({
      ...stat,
      value: getCurrentDayCount(stat.ratePerSecond),
    }))
  );

  const [currentIndex, setCurrentIndex] = useState(0);

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

  // Move to the next card
  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % statistics.length);
  };

  // Move to the previous card
  const prevCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? statistics.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative flex items-center">
      <div className="flex flex-wrap justify-center gap-8 p-4">
        <CardDemo
          title={statistics[currentIndex].name}
          description="This card shows live statistics based on real-time data analysis."
          author="Health Research"
          readTime="Dynamic Data"
          image={statistics[currentIndex].image}
          number={statistics[currentIndex].value}
        />
      </div>
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
        onClick={prevCard}
      >
        &#9664;
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
        onClick={nextCard}
      >
        &#9654;
      </button>
    </div>
  );
}

export default CardsContainer;
