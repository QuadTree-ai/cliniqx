"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

// Define an interface for the card data
interface CardData {
  title: string;
  description: string;
}

// Define an interface for the InfoCard component props
interface InfoCardProps {
  title: string;
  description: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description }) => (
  <Card className="shadow-lg">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription>{description}</CardDescription>
    </CardContent>
  </Card>
);

const cardsData: CardData[] = [
  { title: "1000+ cities", description: "in India" },
  { title: "3 lakh+", description: "pharmacy listings" },
  { title: "5.0 crore+", description: "monthly orders" }
];

const Why: React.FC = () => {
  return (
    <section className="bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-10">Why should you partner with CliniQX?</h2>
        <p className="mb-10">
          Cliniqx enables you to get 60% more revenue, 10x new customers and boost your brand visibility by providing insights to improve your business.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cardsData.map((card, index) => (
            <InfoCard key={index} title={card.title} description={card.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why;
