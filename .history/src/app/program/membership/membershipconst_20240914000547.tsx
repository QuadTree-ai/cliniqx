import { CheckCircle, Shield, Heart, User, Users, Briefcase, Star, Calendar, Tag, Phone, Activity, Award, MapPin } from "lucide-react";

export const plans = [
  {
    title: "Free Plan",
    price: "₹0/month",
    icon: User,
    benefits: [
      {
        icon: CheckCircle,
        title: "Access to basic features",
      },
      {
        icon: Shield,
        title: "Limited EHR features",
      },
      {
        icon: Heart,
        title: "Basic health insights",
      },
      {
        icon: Calendar,
        title: "Limited appointment scheduling",
      },
    ],
  },
  {
    title: "Basic Plan",
    price: "₹599/month",
    icon: User,
    benefits: [
      {
        icon: CheckCircle,
        title: "Buyer + 3 family members",
      },
      {
        icon: Shield,
        title: "Core EHR features (view/share medical records, basic insights)",
      },
      {
        icon: Heart,
        title: "Basic health insights",
      },
      {
        icon: Calendar,
        title: "Appointment scheduling",
      },
    ],
  },
  {
    title: "Premium Plan",
    price: "₹1099/month",
    icon: Users,
    benefits: [
      {
        icon: Star,
        title: "Buyer + 5 family members",
      },
      {
        icon: Calendar,
        title: "Core features + advanced AI-based health insights",
      },
      {
        icon: Tag,
        title: "Priority customer support",
      },
      {
        icon: Phone,
        title: "24/7 telehealth access",
      },
      {
        icon: Heart,
        title: "Personalized health plans",
      },
    ],
  },
  {
    title: "Single Add-on Plan",
    price: "₹149/month",
    icon: User,
    benefits: [
      {
        icon: Activity,
        title: "Per additional family member",
      },
      {
        icon: Phone,
        title: "Allows flexibility for customers to add more family members beyond the basic or premium plan",
      },
    ],
  },
  {
    title: "Enterprise Plan",
    price: "Contact Us",
    link: "https://calendly.com/priteshraj41/30min",
    icon: Briefcase,
    benefits: [
      {
        icon: Award,
        title: "Book and schedule a call for enterprise solutions",
      },
      {
        icon: MapPin,
        title: "Customizable enterprise features",
      },
      {
        icon: Shield,
        title: "Enhanced security and compliance",
      },
    ],
  },
];