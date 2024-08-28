// src/app/Home/(Problems)/page.tsx
"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { RadialBarChart, PolarAngleAxis, RadialBar } from "recharts";
import { Separator } from "@/components/ui/separator";
import { HeartPulse, Activity, Wind, Hospital, Radiation } from "lucide-react";

const statisticsPerMinute = {
  heartDisease: 2,
  injury: 3,
  respiratoryDisease: 1.5,
  hospitalAdmit: 4,
  cancerDetected: 0.5,
  diabetes: 1.2,
  stroke: 0.8,
  mentalHealth: 2.5,
};

// Calculate total numbers per day
const minutesInDay = 1440;
const statisticsPerDay = Object.entries(statisticsPerMinute).reduce(
  (acc, [key, value]) => ({ ...acc, [key]: Math.round(value * minutesInDay) }),
  {}
);

const data = [
  { name: "Heart Disease", value: statisticsPerDay.heartDisease, icon: <HeartPulse /> },
  { name: "Injury", value: statisticsPerDay.injury, icon: <Activity /> },
  { name: "Respiratory Disease", value: statisticsPerDay.respiratoryDisease, icon: <Wind /> },
  { name: "Hospital Admission", value: statisticsPerDay.hospitalAdmit, icon: <Hospital /> },
  { name: "Cancer Detected", value: statisticsPerDay.cancerDetected, icon: <Radiation /> },
  { name: "Diabetes", value: statisticsPerDay.diabetes, icon: <HeartPulse /> },
  { name: "Stroke", value: statisticsPerDay.stroke, icon: <Activity /> },
  { name: "Mental Health Issues", value: statisticsPerDay.mentalHealth, icon: <HeartPulse /> },
];

const Page = () => {
  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold mb-6">Healthcare Statistics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.map((item, index) => (
          <Card key={index} className="shadow-lg">
            <CardHeader className="flex items-center space-x-4">
              <div className="text-3xl text-blue-600">{item.icon}</div>
              <CardTitle>{item.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">Number per day: {item.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <Separator />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="h-64">
          <h2 className="text-2xl font-semibold mb-4">Bar Chart</h2>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="h-64">
          <h2 className="text-2xl font-semibold mb-4">Radial Bar Chart</h2>
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" data={data}>
              <PolarAngleAxis dataKey="name" type="category" />
              <RadialBar dataKey="value" fill="#8884d8" />
            </RadialBarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Page;
