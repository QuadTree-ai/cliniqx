import { AiFillMedicineBox, AiFillAlert, AiOutlineUser, AiOutlineDashboard } from 'react-icons/ai';
import { FaPills, FaCapsules, FaSyringe, FaClinicMedical, FaPrescriptionBottle, FaNotesMedical, FaUserMd, FaWarehouse, FaBoxOpen } from 'react-icons/fa';
import { MdLocalPharmacy, MdMedicalServices, MdInventory, MdReport, MdSettings, MdHelpOutline } from 'react-icons/md';
import { GiMedicines, GiMedicalPackAlt, GiMedicalDrip } from 'react-icons/gi';
import { RiSyringeFill, RiStethoscopeFill } from 'react-icons/ri';
import { BsFillClipboard2CheckFill, BsFillQuestionCircleFill } from 'react-icons/bs';

export const MedIcons = {
  MedicineBox: AiFillMedicineBox,
  Alert: AiFillAlert,
  User: AiOutlineUser,
  Dashboard: AiOutlineDashboard,
  Pills: FaPills,
  Capsules: FaCapsules,
  Syringe: FaSyringe,
  Clinic: FaClinicMedical,
  PrescriptionBottle: FaPrescriptionBottle,
  NotesMedical: FaNotesMedical,
  Doctor: FaUserMd,
  Pharmacy: MdLocalPharmacy,
  MedicalServices: MdMedicalServices,
  Inventory: MdInventory,
  Report: MdReport,
  Settings: MdSettings,
  Help: MdHelpOutline,
  Medicines: GiMedicines,
  MedicalPack: GiMedicalPackAlt,
  MedicalDrip: GiMedicalDrip,
  SyringeFill: RiSyringeFill,
  Stethoscope: RiStethoscopeFill,
  ClipboardCheck: BsFillClipboard2CheckFill,
  QuestionCircle: BsFillQuestionCircleFill,
  Warehouse: FaWarehouse,
  BoxOpen: FaBoxOpen,
};

export default MedIcons;
