import hospitalImage from "/public/hospital-service.jpeg";
import pharmacyImage from "/public/pharmacy.jpeg";
import clinicImage from "/public/local-clinic.jpeg";
import walletImage from "/public/wallet.png";
import insuranceImage from "/public/insurance.png";
import medicalHistoryImage from "/public/medical history.png";

export const services = [
  {
    image: hospitalImage,
    title: "Hospital Benefits",
    description: "Swift and secure transactions with health insurance integration.",
    subServices: [
      {
        image: walletImage,
        text: "Pay medical bills effortlessly.",
      },
      {
        image: insuranceImage,
        text: "Fetch and apply insurance details.",
      },
      {
        image: medicalHistoryImage,
        text: "Share medical history and records.",
      },
    ],
  },
  {
    image: pharmacyImage,
    title: "Pharmacy Benefits",
    description: "Seamless inventory management and delivery options.",
    subServices: [
      {
        image: medicalHistoryImage,
        text: "Check medicine availability.",
      },
      {
        image: insuranceImage,
        text: "Integrated or own delivery services.",
      },
      {
        image: walletImage,
        text: "Efficient billing and payment.",
      },
    ],
  },
  {
    image: clinicImage,
    title: "Clinic Integration",
    description: "Easy access to patient records and streamlined referrals.",
    subServices: [
      {
        image: medicalHistoryImage,
        text: "Access and update records.",
      },
      {
        image: walletImage,
        text: "Manage patient medications.",
      },
      {
        image: insuranceImage,
        text: "Refer patients with full history.",
      },
    ],
  },
];
