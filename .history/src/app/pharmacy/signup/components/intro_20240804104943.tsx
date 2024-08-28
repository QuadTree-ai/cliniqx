"use client";

import React, { ReactNode } from "react"; // Import ReactNode for typing children
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const documents = [
  "Pharmacy License",
  "Drug License Number",
  "GST Registration Certificate",
  "Bank Account Details",
  "Professional Tax Registration",
  "Top-selling Product List"
];

interface DocumentItemProps {
  children: ReactNode; // Define the type for children
}

const DocumentItem: React.FC<DocumentItemProps> = ({ children }) => (
  <div className="flex items-center m-2">
    <CheckCircle color="green" className="mr-2" />
    {children}
  </div>
);

const PharmacySignupCard: React.FC = () => {
  return (
    <Card className="bg-gray-800 text-white my-10 mx-auto max-w-4xl">
      <CardHeader>
        <CardTitle>Get Started with Online Ordering</CardTitle>
        <CardDescription>Please keep the documents ready for a smooth signup:</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap justify-between">
        {documents.map(doc => (
          <DocumentItem key={doc}>{doc}</DocumentItem>
        ))}
      </CardContent>
    </Card>
  );
};

export default PharmacySignupCard;
