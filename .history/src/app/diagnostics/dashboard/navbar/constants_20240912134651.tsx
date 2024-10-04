import { ChartConfig } from './types';
import * as Icons from 'lucide-react';

export const SECTIONS = {
  ANALYTICS: 'analytics',
  SHARE: 'share',
  TESTS: 'tests',
  REPORTS: 'reports',
  APPOINTMENTS: 'appointments',
  PATIENT_MESSAGES: 'patientMessages',
  PATIENT_BILLING: 'patientBilling',
  INVOICES: 'invoices',
};

export const BUTTON_CONFIG = [
  { icon: 'BarChart2', label: 'Analytics', section: SECTIONS.ANALYTICS },
  { icon: 'Share', label: 'Share', section: SECTIONS.SHARE },
  { icon: 'TestTube', label: 'Tests', section: SECTIONS.TESTS },
  { icon: 'FileText', label: 'Reports', section: SECTIONS.REPORTS },
  { icon: 'Calendar', label: 'Appointments', section: SECTIONS.APPOINTMENTS },
  { icon: 'MessageSquare', label: 'Messages', section: SECTIONS.PATIENT_MESSAGES },
  { icon: 'CreditCard', label: 'Billing', section: SECTIONS.PATIENT_BILLING },
  { icon: 'FileText', label: 'Invoices', section: SECTIONS.INVOICES },
];

export const CHART_COLORS = {
  primary: '#3b82f6',
  secondary: '#10b981',
  tertiary: '#f59e0b',
  quaternary: '#ef4444',
  quinary: '#8b5cf6',
};

export const CHART_OPTIONS = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom' as const,
    },
    title: {
      display: true,
      text: 'Chart Title',
    },
  },
};

export const TABLE_HEADERS = {
  recentTests: ['Test Name', 'Date', 'Status'],
  patientInfo: ['Name', 'ID', 'Age', 'Gender', 'Blood Type'],
};

export const SEVERITY_COLORS = {
  low: 'green',
  moderate: 'yellow',
  high: 'red',
};

export const DATE_FORMAT = 'YYYY-MM-DD';

export const MAX_RECENT_TESTS = 5;

export const PHONE_REGEX = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

export const CLINIQX_CARD_REGEX = /^[A-Z]{2}[0-9]{6}$/;

export const ITEMS_PER_PAGE = 10;

export const CHART_CONFIG: ChartConfig = {
  views: {
    label: "Diagnostic Center Data",
    color: "hsl(var(--chart-0))",
  },
  tests: {
    label: "Tests Conducted",
    color: "hsl(var(--chart-1))",
  },
  patients: {
    label: "Patients Seen",
    color: "hsl(var(--chart-2))",
  },
};

export const STATUS_COLORS = {
  paid: "bg-green-600",
  pending: "bg-yellow-600",
  overdue: "bg-red-600",
};
