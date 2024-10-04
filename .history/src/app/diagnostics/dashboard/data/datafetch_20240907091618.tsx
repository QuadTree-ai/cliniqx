import { Invoice } from './types';

export interface TestData {
  testName: string;
  date: string;
  status: string;
}

export interface PatientInfo {
  name: string;
  id: string;
  age: number;
  gender: string;
  bloodType: string;
}

const generateRandomData = (count: number, max: number): number[] => {
  return Array.from({ length: count }, () => Math.floor(Math.random() * max));
};

export const getRecentTests = (): TestData[] => [
  { testName: 'Blood Test', date: '2023-05-15', status: 'Completed' },
  { testName: 'X-Ray', date: '2023-05-14', status: 'Pending' },
  { testName: 'MRI Scan', date: '2023-05-13', status: 'Completed' },
  { testName: 'ECG', date: '2023-05-12', status: 'Completed' },
  { testName: 'Ultrasound', date: '2023-05-11', status: 'Pending' },
];

export const getPatientStats = () => ({
    testsConducted: 500,
    patientsSeen: 350
  });

export const getPatientInfo = (): PatientInfo => ({
  name: 'John Doe',
  id: '12345',
  age: 35,
  gender: 'Male',
  bloodType: 'O+',
});

export const getTestsPerMonthData = () => [
  { date: "2023-01-01", tests: 50, patients: 40 },
  { date: "2023-02-01", tests: 60, patients: 45 },
  { date: "2023-03-01", tests: 55, patients: 42 },
  { date: "2023-04-01", tests: 70, patients: 55 },
  { date: "2023-05-01", tests: 65, patients: 50 },
  { date: "2023-06-01", tests: 80, patients: 60 },
];

export const getTestTypeDistributionData = () => [
  { type: 'Blood Tests', count: 250 },
  { type: 'X-Rays', count: 180 },
  { type: 'MRI Scans', count: 120 },
  { type: 'ECGs', count: 200 },
  { type: 'Ultrasounds', count: 150 },
];

export const getRevenueData = () => [
  { month: 'Jan', revenue: 5000 },
  { month: 'Feb', revenue: 6000 },
  { month: 'Mar', revenue: 5500 },
  { month: 'Apr', revenue: 7000 },
  { month: 'May', revenue: 6500 },
  { month: 'Jun', revenue: 8000 },
];

export const getPatientAgeDistributionData = () => [
  { ageGroup: '0-18', count: 150 },
  { ageGroup: '19-30', count: 300 },
  { ageGroup: '31-45', count: 450 },
  { ageGroup: '46-60', count: 350 },
  { ageGroup: '61+', count: 250 },
];

export const getInvoicesData = (): Invoice[] => [
  { id: '001', patientName: 'John Doe', amount: 150.00, status: 'Paid' },
  { id: '002', patientName: 'Jane Smith', amount: 200.50, status: 'Pending' },
  { id: '003', patientName: 'Bob Johnson', amount: 75.25, status: 'Overdue' },
  { id: '004', patientName: 'Alice Brown', amount: 300.00, status: 'Paid' },
  { id: '005', patientName: 'Charlie Davis', amount: 125.75, status: 'Pending' },
];