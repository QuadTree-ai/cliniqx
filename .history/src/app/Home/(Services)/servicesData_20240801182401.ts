import hospitalImage from "/public/hospital-service.jpeg";
import pharmacyImage from "/public/pharmacy.jpeg";
import clinicImage from "/public/local-clinic.jpeg";
import walletImage from "/public/services/wallet.svg";
import medicalHistoryImage from "/public/services/medical_history.svg";

export const services = [
  {
    title: "Hospital Benefits",
    description: "Seamlessly manage your healthcare transactions and records.",
    subServices: [
      {
        image: walletImage,
        text: "Instantly pay bills online.",
      },
      {
        image: medicalHistoryImage,
        text: "View and share your medical records easily.",
      },
    ],
  },
  {
    title: "Pharmacy Benefits",
    description: "Access medicine information and streamline your pharmacy visits.",
    subServices: [
      {
        image: medicalHistoryImage,
        text: "Check real-time medicine stock.",
      },
      {
        image: medicalHistoryImage,
        text: "Connect with pharmacy delivery services.",
      },
      {
        image: walletImage,
        text: "Quick and easy in-app billing.",
      },
    ],
  },
  {
    title: "Clinic Integration",
    description: "Effortlessly coordinate with local clinics for your healthcare needs.",
    subServices: [
      {
        image: medicalHistoryImage,
        text: "Access up-to-date medical records.",
      },
      {
        image: walletImage,
        text: "Receive and manage prescriptions directly on your app.",
      },
    ],
  },
];