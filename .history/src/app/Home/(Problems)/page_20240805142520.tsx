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
    <div className="bg-gray-50 min-h-screen p-4 md:p-8 lg:p-12">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Healthcare Statistics
      </h1>

      <section className="mb-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.map((item, index) => (
            <Card
              key={index}
              className="shadow-lg border border-gray-200 hover:shadow-xl hover:bg-gray-100 transition-all duration-300"
            >
              <CardHeader className="flex items-center space-x-2 p-4">
                <item.icon className="text-2xl text-blue-600" />
                <CardTitle className="text-md text-gray-800">{item.name}</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <p className="text-sm text-gray-600">
                  Number per day: {item.value}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-8" />

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
      </section>
    </div>
  );
};

export default Statistics;
