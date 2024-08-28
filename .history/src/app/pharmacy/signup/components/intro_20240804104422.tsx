"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const PharmacySignupCard = () => {
  return (
    <Card className="bg-gray-800 text-white my-10 mx-auto max-w-4xl">
      <CardHeader>
        <CardTitle>Get Started with Online Ordering</CardTitle>
        <CardDescription>Please keep the documents ready for a smooth signup:</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 space-y-2">
          <li>FSSAI license copy (apply now)</li>
          <li>PAN card copy</li>
          <li>Regular GSTIN (apply now)</li>
          <li>Bank account details</li>
          <li>Your pharmacy menu</li>
          <li>Dish images for top 5 items</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default PharmacySignupCard;
