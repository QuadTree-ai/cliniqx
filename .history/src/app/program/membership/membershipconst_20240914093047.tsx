import { CheckCircle, Shield, Heart, User, Users, Briefcase, Star, Calendar, Tag, Phone, Activity, Award, MapPin, Clock, Zap, Database, Lock, Headphones, FileText, Layers, Package, CreditCard, Truck, BarChart, Building, Chart, Globe } from "lucide-react";

export const userPlans = [
  {
    title: "Free Plan",
    price: "₹0/month",
    icon: User,
    benefits: [
      { icon: CheckCircle, title: "Single user access" },
      { icon: Shield, title: "Basic EHR features" },
      { icon: Heart, title: "Limited health insights" },
      { icon: Calendar, title: "Basic appointment scheduling" },
      { icon: Clock, title: "14-day trial period" },
      { icon: Zap, title: "Access to community features" },
    ],
  },
  {
    title: "Basic Plan",
    price: "₹599/month",
    icon: User,
    benefits: [
      { icon: Users, title: "Buyer + 3 family members" },
      { icon: Heart, title: "Enhanced health insights" },
      { icon: Calendar, title: "Advanced appointment scheduling" },
      { icon: Shield, title: "Full EHR access and sharing" },
      { icon: Tag, title: "Priority customer support" },
      { icon: Phone, title: "24/7 telehealth access" },
      { icon: Activity, title: "Basic wellness programs" },
    ],
  },
  {
    title: "Premium Plan",
    price: "₹1099/month",
    icon: Users,
    benefits: [
      { icon: Star, title: "Buyer + 5 family members" },
      { icon: Calendar, title: "AI-powered health insights" },
      { icon: Tag, title: "VIP customer support" },
      { icon: Phone, title: "Unlimited telehealth consultations" },
      { icon: Heart, title: "Personalized health plans" },
      { icon: Shield, title: "Comprehensive health coverage" },
      { icon: Activity, title: "Advanced wellness programs" },
      { icon: Database, title: "Health data analytics" },
    ],
  },
  {
    title: "Single Add-on",
    price: "₹149/month",
    icon: User,
    benefits: [
      { icon: CheckCircle, title: "Add one additional family member" },
      { icon: Phone, title: "Extended family coverage" },
      { icon: Heart, title: "Personalized health insights" },
      { icon: Calendar, title: "Flexible scheduling options" },
    ],
  },
];

export const enterprisePlans = [
  {
    title: "Clinic",
    price: "Contact Us",
    icon: Briefcase,
    link: "https://calendly.com/cliniqx/clinic",
    benefits: [
      { icon: Users, title: "Suitable for small to medium clinics" },
      { icon: Shield, title: "Secure patient data management" },
      { icon: Calendar, title: "Appointment scheduling system" },
      { icon: FileText, title: "Digital prescription management" },
      { icon: Activity, title: "Basic analytics and reporting" },
    ],
  },
  {
    title: "Diagnostic Center",
    price: "Custom Pricing",
    icon: Briefcase,
    link: "https://calendly.com/cliniqx/diagnostic",
    benefits: [
      { icon: Database, title: "Comprehensive test result management" },
      { icon: Lock, title: "Advanced data security and compliance" },
      { icon: Users, title: "Multi-user access control" },
      { icon: Activity, title: "Integration with lab equipment" },
      { icon: FileText, title: "Customizable report templates" },
    ],
  },
  {
    title: "Pharmacy",
    price: "Tailored Solutions",
    icon: Briefcase,
    link: "https://calendly.com/cliniqx/pharmacy",
    benefits: [
      { icon: Package, title: "Inventory management system" },
      { icon: CreditCard, title: "Point of sale integration" },
      { icon: Users, title: "Customer relationship management" },
      { icon: Truck, title: "Supplier management and ordering" },
      { icon: BarChart, title: "Sales analytics and reporting" },
    ],
  },
  {
    title: "Hospital",
    price: "Enterprise Solutions",
    icon: Briefcase,
    link: "https://calendly.com/cliniqx/hospital",
    benefits: [
      { icon: Building, title: "Comprehensive hospital management system" },
      { icon: Users, title: "Multi-department coordination" },
      { icon: Layers, title: "Advanced EHR/EMR integration" },
      { icon: Shield, title: "Enterprise-grade security" },
      { icon: Activity, title: "Resource and bed management" },
      { icon: Chart, title: "Advanced analytics and insights" },
      { icon: Globe, title: "Telemedicine capabilities" },
    ],
  },
];