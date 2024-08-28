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

// Function to calculate current day count based on rate
const getCurrentDayCount = (rate: number) => {
  const now = new Date();
  const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const secondsSinceStart = (now.getTime() - startOfDay.getTime()) / 1000;
  return Math.floor(rate * secondsSinceStart);
};

// Carousel settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,  // Adjust based on how many cards you want to show at once
  slidesToScroll: 1,
  centerMode: true, // Ensures that the active slide is centered
  centerPadding: '0px', // Adjust padding around center slide
  variableWidth: true, // Allows variable width for slides
};

// Main component to render carousel
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
    <div className="relative p-4">
      {/* Faded area on both sides */}
      <div className="absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-gray-900 via-transparent to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-gray-900 via-transparent to-transparent z-10"></div>
      
      <Slider {...sliderSettings}>
        {statistics.map((stat, index) => (
          <CardDemo
            key={index}
            title={stat.name}
            description="This card shows live statistics based on real-time data analysis."
            author="Health Research"
            readTime="Dynamic Data"
            image={stat.image}  // Using the image path directly from the stats
            number={stat.value}
          />
        ))}
      </Slider>
    </div>
  );
}

export default CardsContainer;
