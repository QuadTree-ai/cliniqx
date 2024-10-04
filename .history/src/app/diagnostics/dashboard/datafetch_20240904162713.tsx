import { ChartData } from '@/components/ui/chart';

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

export const getPatientInfo = (): PatientInfo => ({
  name: 'John Doe',
  id: '12345',
  age: 35,
  gender: 'Male',
  bloodType: 'O+',
});

export const getTestsPerMonthData = (): ChartData => ({
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Tests Conducted',
      data: generateRandomData(6, 100),
    },
  ],
});

export const getTestTypeDistributionData = (): ChartData => ({
  labels: ['Blood Tests', 'X-Rays', 'MRI Scans', 'ECGs', 'Ultrasounds'],
  datasets: [
    {
      data: generateRandomData(5, 500),
    },
  ],
});

export const getRevenueData = (): ChartData => ({
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Revenue',
      data: generateRandomData(6, 10000),
    },
  ],
});

export const getPatientAgeDistributionData = (): ChartData => ({
  labels: ['0-18', '19-30', '31-45', '46-60', '61+'],
  datasets: [
    {
      label: 'Patient Age Distribution',
      data: generateRandomData(5, 1000),
    },
  ],
});