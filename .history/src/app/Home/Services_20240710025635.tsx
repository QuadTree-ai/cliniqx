import { CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const featuresData = [
  {
    title: "Comprehensive EHR Solution",
    description: "CliniQX offers a complete Electronic Health Record (EHR) system that ensures all patient information is securely stored and easily accessible.",
  },
  {
    title: "AI-Powered Insights",
    description: "Leverage advanced AI to gain insights into patient data, helping healthcare providers make more informed decisions and improve patient outcomes.",
  },
  {
    title: "Seamless Integration",
    description: "Easily integrate CliniQX with existing healthcare systems and workflows, ensuring a smooth transition and minimal disruption to your practice.",
  },
  {
    title: "Enhanced Patient Care",
    description: "Improve patient care with real-time access to comprehensive health records and personalized treatment plans powered by CliniQX.",
  },
  {
    title: "Secure Data Management",
    description: "Ensure patient data is protected with robust security measures, including encryption and secure access controls.",
  },
  {
    title: "User-Friendly Interface",
    description: "Experience an intuitive and easy-to-use interface designed to enhance productivity and streamline healthcare operations.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-12 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <Card key={index} className="p-6">
              <CardHeader className="flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-blue-600 mb-4" />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-2xl font-semibold text-gray-800 mb-2">{feature.title}</CardTitle>
                <CardDescription className="text-gray-600">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
