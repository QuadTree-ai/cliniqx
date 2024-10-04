import { ChartConfig } from '@/types/dashboard';
import * as Icons from 'lucide-react';

export enum SECTIONS {
  ANALYTICS = 'analytics',
  SHARE = 'share',
  TESTS = 'tests',
  REPORTS = 'reports',
  APPOINTMENTS = 'appointments',
  PATIENT_MESSAGES = 'patientMessages',
  PATIENT_BILLING = 'patientBilling',
  INVOICES = 'invoices',
}

export const BUTTON_CONFIG = [
  { icon: Icons.BarChart2, label: 'Analytics', section: SECTIONS.ANALYTICS },
  { icon: Icons.Share, label: 'Share', section: SECTIONS.SHARE },
  { icon: Icons.TestTube, label: 'Tests', section: SECTIONS.TESTS },
  { icon: Icons.FileText, label: 'Reports', section: SECTIONS.REPORTS },
  { icon: Icons.Calendar, label: 'Appointments', section: SECTIONS.APPOINTMENTS },
  { icon: Icons.MessageSquare, label: 'Messages', section: SECTIONS.PATIENT_MESSAGES },
  { icon: Icons.CreditCard, label: 'Billing', section: SECTIONS.PATIENT_BILLING },
  { icon: Icons.FileText, label: 'Invoices', section: SECTIONS.INVOICES },
] as const;

export const CHART_COLORS = {
  primary: 'hsl(var(--chart-0))',
  secondary: 'hsl(var(--chart-1))',
  tertiary: 'hsl(var(--chart-2))',
  quaternary: 'hsl(var(--chart-3))',
  quinary: 'hsl(var(--chart-4))',
} as const;

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
} as const;

export const TABLE_HEADERS = {
  recentTests: ['Test Name', 'Date', 'Status'],
  patientInfo: ['Name', 'ID', 'Age', 'Gender', 'Blood Type'],
} as const;

export const SEVERITY_COLORS = {
  low: 'green',
  moderate: 'yellow',
  high: 'red',
} as const;

export const DATE_FORMAT = 'YYYY-MM-DD';

export const MAX_RECENT_TESTS = 5;

export const PHONE_REGEX = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

export const CLINIQX_CARD_REGEX = /^[A-Z]{2}[0-9]{6}$/;

export const ITEMS_PER_PAGE = 10;

export const CHART_CONFIG: ChartConfig = {
  views: {
    label: "Diagnostic Center Data",
    color: CHART_COLORS.primary,
  },
  tests: {
    label: "Tests Conducted",
    color: CHART_COLORS.secondary,
  },
  patients: {
    label: "Patients Seen",
    color: CHART_COLORS.tertiary,
  },
} as const;

export const STATUS_COLORS: Record<string, string> = {
  paid: "bg-green-600",
  pending: "bg-yellow-600",
  overdue: "bg-red-600",
} as const;
