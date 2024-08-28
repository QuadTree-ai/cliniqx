"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";  // Importing the green tick icon from Lucide

const PharmacySignupCard = () => {
  return (
    <Card className="bg-gray-800 text-white my-10 mx-auto max-w-4xl">
      <CardHeader>
        <CardTitle>Get Started with Online Ordering</CardTitle>
        <CardDescription>Please keep the documents ready for a smooth signup:</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 space-y-2">
          <li><CheckCircle color="green" className="inline mr-2"/>Pharmacy License</li>
          <li><CheckCircle color="green" className="inline mr-2"/>Drug License Number</li>
          <li><CheckCircle color="green" className="inline mr-2"/>GST Registration Certificate</li>
          <li><CheckCircle color="green" className="inline mr-2"/>Bank Account Details</li>
          <li><CheckCircle color="green" className="inline mr-2"/>Professional Tax Registration</li>
          <li><CheckCircle color="green" className="inline mr-2"/>Top-selling Product List</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default PharmacySignupCard;
