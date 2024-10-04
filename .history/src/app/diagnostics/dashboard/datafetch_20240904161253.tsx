import { ChartData } from 'chart.js';

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

export interface ChartDataSet {
  label: string;
  data: number[];
  backgroundColor: string;
  borderColor?: string;
  borderWidth?: number;
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

export const getTestsPerMonthData = (): ChartData<'bar'> => ({
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Tests Conducted',
      data: generateRandomData(6, 100),
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
    },
  ],
});

export const getTestTypeDistributionData = (): ChartData<'doughnut'> => ({
  labels: ['Blood Tests', 'X-Rays', 'MRI Scans', 'ECGs', 'Ultrasounds'],
  datasets: [
    {
      data: generateRandomData(5, 500),
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
      ],
    },
  ],
});

export const getRevenueData = (): ChartData<'line'> => ({
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Revenue',
      data: generateRandomData(6, 10000),
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderWidth: 2,
      fill: true,
    },
  ],
});

export const getPatientAgeDistributionData = (): ChartData<'bar'> => ({
  labels: ['0-18', '19-30', '31-45', '46-60', '61+'],
  datasets: [
    {
      label: 'Patient Age Distribution',
      data: generateRandomData(5, 1000),
      backgroundColor: 'rgba(153, 102, 255, 0.6)',
    },
  ],
});