import { Home, ShoppingCart, User, Stethoscope } from "lucide-react";

export const signupOptions = [
  {
    id: "pharmacy-signup",
    title: "I'm a Pharmacy",
    link: "/pharmacy-signup",
    description: "Register your pharmacy to manage inventory, process orders, and connect with customers.",
    signupText: "Pharmacy Signup",
    imgSrc: "/pharmacy.jpeg",
    icon: <ShoppingCart className="w-6 h-6 text-white" />,
  },
  {
    id: "hospital-signup",
    title: "I'm a Hospital",
    link: "/hospital-signup",
    description: "Sign up your hospital to streamline operations, from patient management to billing.",
    signupText: "Hospital Signup",
    imgSrc: "/hospital.jpeg",
    icon: <Home className="w-6 h-6 text-white" />,
  },
  {
    id: "doctor-signup",
    title: "I'm a Doctor",
    link: "/doctor-signup",
    description: "Join as a doctor to connect with patients and manage your appointments.",
    signupText: "Doctor Signup",
    imgSrc: "/doctor.jpeg",
    icon: <Stethoscope className="w-6 h-6 text-white" />,
  },
];