// Removed the import statement causing the lint error
export interface TestData {
  testId: string;
  cliniqxNumber: string;
  testName: string;
  date: string;
  status: string;
  patientName: string;
  patientPhone: string;
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

export async function getRecentTests(): Promise<TestData[]> {
  const data = [
    { id: '1', cliniqxNumber: 'CX001', testName: 'Blood Test', date: '2023-05-15', status: 'Completed', patientName: 'John Doe', patientPhone: '123-456-7890' },
    { id: '2', cliniqxNumber: 'CX002', testName: 'X-Ray', date: '2023-05-14', status: 'Pending', patientName: 'Jane Smith', patientPhone: '234-567-8901' },
    // ... other data objects
  ];

  return data.map(test => ({
    testId: test.id,
    cliniqxNumber: test.cliniqxNumber,
    testName: test.testName,
    date: test.date,
    status: test.status,
    patientName: test.patientName,
    patientPhone: test.patientPhone,
  }));
}

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
  {
    id: '001', patientName: 'John Doe', amount: 150.00, status: 'Paid',
    date: '2023-05-15'
  },
  {
    id: '002', patientName: 'Jane Smith', amount: 200.50, status: 'Pending',
    date: '2023-05-14'
  },
  {
    id: '003', patientName: 'Bob Johnson', amount: 75.25, status: 'Overdue',
    date: '2023-05-13'
  },
  {
    id: '004', patientName: 'Alice Brown', amount: 300.00, status: 'Paid',
    date: '2023-05-12'
  },
  {
    id: '005', patientName: 'Charlie Davis', amount: 125.75, status: 'Pending',
    date: '2023-05-11'
  },
];