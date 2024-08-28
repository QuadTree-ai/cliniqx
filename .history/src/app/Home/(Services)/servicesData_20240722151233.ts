import hospitalImage from "/public/hospital-service.jpeg";
import pharmacyImage from "/public/pharmacy.jpeg";
import clinicImage from "/public/local-clinic.jpeg";
import walletImage from "/public/wallet.png";
import insuranceImage from "/public/insurance.png";
import medicalHistoryImage from "/public/medical history.png";
import documentImage from "/public/documents.png";
import medicineImage from "/public/medicine.png";
import medical3DImage from "/public/medical-3d.png";
import aiDoctorImage from "/public/ai-doctor.png";

export const services = [
  {
    image: hospitalImage,
    title: "Hospital Benefits",
    description: "Enhancing patient care through automated processes and information accessibility.",
    subServices: [
      {
        image: walletImage,
        text: "Patients can pay their medical bills effortlessly with integrated card payments.",
      },
      {
        image: insuranceImage,
        text: "Automatically fetch and apply health insurance details to manage payments.",
      },
      {
        image: medicalHistoryImage,
        text: "Share comprehensive medical histories and records with healthcare providers.",
      },
    ],
  },
  {
    image: documentImage,
    title: "Personal Health Management",
    description: "A centralized digital hub for managing your health data securely.",
    subServices: [
      {
        image: documentImage,
        text: "Digitally store and manage medical documents with easy scanning features.",
      },
      {
        image: walletImage,
        text: "Utilize a dedicated health wallet for streamlined payment processes at hospitals and pharmacies.",
      },
      {
        image: medicineImage,
        text: "Check and order medicines, with suggestions for alternatives based on salt compositions.",
      },
      {
        image: medical3DImage,
        text: "View medical history through an innovative 3D human interface.",
      },
      {
        image: aiDoctorImage,
        text: "Get instant health suggestions and diagnostics from our Medical LLM AI.",
      },
    ],
  },
  {
    image: pharmacyImage,
    title: "Pharmacy Benefits",
    description: "Optimize pharmacy operations with smart inventory and delivery solutions.",
    subServices: [
      {
        image: medicineImage,
        text: "Manage inventory more efficiently and ensure medicine availability with real-time tracking.",
      },
      {
        image: walletImage,
        text: "Choose to integrate or operate your own delivery systems for greater flexibility.",
      },
    ],
  },
  {
    image: clinicImage,
    title: "Clinic Integration",
    description: "Streamline clinic operations with seamless access to patient data and treatment history.",
    subServices: [
      {
        image: medicalHistoryImage,
        text: "Access patient records easily to enhance diagnostic accuracy and care continuity.",
      },
      {
        image: medicineImage,
        text: "Prescribe and manage medications directly within patient profiles.",
      },
      {
        image: hospitalImage,
        text: "Facilitate referrals to hospitals with integrated patient health records.",
      },
    ],
  },
];