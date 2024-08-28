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
    description: "Experience seamless healthcare transactions with our integrated services, designed to simplify your hospital visits.",
    subServices: [
      {
        image: walletImage,
        text: "Easily pay your medical bills with our hassle-free digital payment system.",
      },
      {
        image: insuranceImage,
        text: "Automatically fetch and utilize your health insurance details to cover expenses without paperwork.",
      },
      {
        image: medicalHistoryImage,
        text: "Securely share your medical history and records with hospitals for better-informed care.",
      },
    ],
  },
  {
    image: documentImage,
    title: "Personal Health Management",
    description: "Manage your health records and treatments efficiently from a single digital platform.",
    subServices: [
      {
        image: documentImage,
        text: "Add and scan your medical documents effortlessly, keeping everything accessible digitally.",
      },
      {
        image: walletImage,
        text: "Manage your healthcare expenditures with a dedicated wallet for medical expenses.",
      },
      {
        image: medicineImage,
        text: "Check real-time availability of medicines and order directly through the app, with intelligent suggestions for alternative medications based on their composition.",
      },
      {
        image: medical3DImage,
        text: "Visualize your medical history with our innovative 3D human interface, making understanding your health easier than ever.",
      },
      {
        image: aiDoctorImage,
        text: "Consult with our AI-driven Medical LLM for instant health advice and personalized treatment recommendations.",
      },
    ],
  },
  {
    image: pharmacyImage,
    title: "Pharmacy Benefits",
    description: "Streamline your pharmacy operations with our integrated inventory management and delivery systems.",
    subServices: [
      {
        image: medicineImage,
        text: "Keep track of medicine stock levels and manage billing with ease, ensuring you never run out of essential supplies.",
      },
      {
        image: walletImage,
        text: "Decide whether to use integrated delivery services or manage your own deliveries for greater flexibility and control.",
      },
    ],
  },
  {
    image: clinicImage,
    title: "Clinic Integration",
    description: "Enhance your clinic's efficiency with easy access to comprehensive patient data and streamlined administrative processes.",
    subServices: [
      {
        image: medicalHistoryImage,
        text: "Quickly access and update patient medical records, ensuring accurate and up-to-date information is always at hand.",
      },
      {
        image: medicineImage,
        text: "Easily prescribe and manage patient medications directly from their digital profile.",
      },
      {
        image: hospitalImage,
        text: "Seamlessly refer patients to hospitals with all necessary medical history and documents instantly accessible.",
      },
    ],
  },
];