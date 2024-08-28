"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const Why = () => {
  return (
    <section className="bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10">Why should you partner with CliniQX?</h2>
        <p className="text-center mb-10">
          Cliniqx enables you to get 60% more revenue, 10x new customers and boost your brand visibility by providing insights to improve your business.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>1000+ cities</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>in India</CardDescription>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>3 lakh+</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>pharmacy listings</CardDescription> {/* Adjusted text from "restaurant" to "pharmacy" */}
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>5.0 crore+</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>monthly orders</CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Why;
