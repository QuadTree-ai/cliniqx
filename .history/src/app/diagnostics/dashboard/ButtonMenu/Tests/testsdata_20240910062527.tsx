import { TestData } from './types';

export const dummyTestData: TestData[] = [
  {
    testId: 'T001',
    testName: 'Complete Blood Count',
    date: '2023-06-01',
    status: 'Completed',
    patientName: 'John Doe',
    patientPhone: '123-456-7890',
    cliniqxNumber: 'CQ12345'
  },
  {
    testId: 'T002',
    testName: 'Lipid Panel',
    date: '2023-06-02',
    status: 'Pending',
    patientName: 'Jane Smith',
    patientPhone: '234-567-8901',
    cliniqxNumber: 'CQ23456'
  },
  {
    testId: 'T003',
    testName: 'Thyroid Function Test',
    date: '2023-06-03',
    status: 'Completed',
    patientName: 'Bob Johnson',
    patientPhone: '345-678-9012',
    cliniqxNumber: 'CQ34567'
  },
  {
    testId: 'T004',
    testName: 'Urinalysis',
    date: '2023-06-04',
    status: 'In Progress',
    patientName: 'Alice Brown',
    patientPhone: '456-789-0123',
    cliniqxNumber: 'CQ45678'
  },
  {
    testId: 'T005',
    testName: 'X-Ray',
    date: '2023-06-05',
    status: 'Completed',
    patientName: 'Charlie Davis',
    patientPhone: '567-890-1234',
    cliniqxNumber: 'CQ56789'
  }
];
