"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { MapPin, Building, ShoppingBag } from "lucide-react";

// Define an interface for the card data
interface CardData {
  title: string;
  description: string;
  Icon: React.ElementType; // Allows passing of icon components
}

const InfoCard: React.FC<CardData> = ({ title, description, Icon }) => (
  <Card className="shadow-lg">
    <CardHeader>
      <Icon className="text-blue-500 w-6 h-6 mr-2" /> {/* Style the icon */}
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription>{description}</CardDescription>
    </CardContent>
  </Card>
);

const cardsData: CardData[] = [
  { title: "1000+ cities", description: "in India", Icon: MapPin },
  { title: "3 lakh+", description: "pharmacy listings", Icon: Building },
  { title: "5.0 crore+", description: "monthly orders", Icon: ShoppingBag }
];

const Why: React.FC = () => {
  return (
    <section className="bg-transparent text-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-10">Why should you partner with CliniQX?</h2>
        <p className="mb-10">
          Cliniqx enables you to get 60% more revenue, 10x new customers and boost your brand visibility by providing insights to improve your business.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cardsData.map((card, index) => (
            <InfoCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why;
