import React from 'react';
import MedIcons from './Medicons';

const icons = [
  MedIcons.MedicineBox,
  MedIcons.Alert,
  MedIcons.User,
  MedIcons.Dashboard,
  MedIcons.Pills,
  MedIcons.Capsules,
  MedIcons.Syringe,
  MedIcons.Clinic,
  MedIcons.PrescriptionBottle,
  MedIcons.NotesMedical,
  MedIcons.Doctor,
  MedIcons.Pharmacy,
  MedIcons.MedicalServices,
  MedIcons.Inventory,
  MedIcons.Report,
  MedIcons.Settings,
  MedIcons.Help,
  MedIcons.Medicines,
  MedIcons.MedicalPack,
  MedIcons.MedicalDrip,
  MedIcons.SyringeFill,
  MedIcons.Stethoscope,
  MedIcons.ClipboardCheck,
  MedIcons.QuestionCircle,
  MedIcons.Warehouse,
  MedIcons.BoxOpen,
];

const iconSize = 40;

const Background = () => {
  const totalIcons = 80; // Define the total number of icon slots

  return (
    <div className="absolute inset-0 overflow-hidden p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-4">
      {Array.from({ length: totalIcons }).map((_, index) => {
        const Icon = icons[index % icons.length];
        return (
          <div key={index} className="flex items-center justify-center h-24 w-24">
            <Icon size={iconSize} className="text-gray-900 opacity-10" />
          </div>
        );
      })}
    </div>
  );
};

export default Background;
