// src/app/Home/(Problems)/Statistics.tsx
"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadialBarChart,
  PolarAngleAxis,
  RadialBar,
} from "recharts";
import { Separator } from "@/components/ui/separator";
import { data } from "./StatisticsData";

const Statistics = () => {
  return (
    <div className="p-6 space-y-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Healthcare Statistics
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item, index) => (
          <Card
            key={index}
            className="shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
          >
            <CardHeader className="flex items-center space-x-4">
              <item.icon className="text-3xl text-blue-600" />
              <CardTitle className="text-lg text-gray-800">{item.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-600">
                Number per day: {item.value}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      <Separator />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="h-72">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Bar Chart
          </h2>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#f9fafb",
                  borderRadius: "8px",
                }}
              />
              <Bar dataKey="value" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="h-72">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Radial Bar Chart
          </h2>
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
              cx="50%"
              cy="50%"
              innerRadius="10%"
              outerRadius="80%"
              data={data}
            >
              <PolarAngleAxis
                dataKey="name"
                type="category"
                tick={{ fontSize: 12 }}
              />
              <RadialBar dataKey="value" fill="#8884d8" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#f9fafb",
                  borderRadius: "8px",
                }}
              />
            </RadialBarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
