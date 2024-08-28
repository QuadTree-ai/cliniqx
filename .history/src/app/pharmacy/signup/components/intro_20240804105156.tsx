"use client";

import React, { ReactNode } from "react";
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
  children: ReactNode;
}

const DocumentItem: React.FC<DocumentItemProps> = ({ children }) => (
  <div className="flex items-center m-2">
    <CheckCircle color="#4CAF50" className="mr-2" /> {/* Setting icon color to a specific shade of green */}
    {children}
  </div>
);

const PharmacySignupCard: React.FC = () => {
  return (
    <Card className="bg-white text-black my-10 mx-auto max-w-4xl shadow-md"> {/* Updated background and text color */}
      <CardHeader>
        <CardTitle className="text-2xl">Get Started with Online Ordering</CardTitle>
        <CardDescription className="text-lg">Please keep the documents ready for a smooth signup:</CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4">
        {documents.map(doc => (
          <DocumentItem key={doc}>{doc}</DocumentItem>
        ))}
      </CardContent>
    </Card>
  );
};

export default PharmacySignupCard;
