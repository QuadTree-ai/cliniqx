import { Invoice as BaseInvoice } from '@/app/diagnostics/dashboard/types';


export interface Invoice extends BaseInvoice {
  id: string;
  patientName: string;
  amount: number;
  status: 'paid' | 'pending' | 'overdue';
  date: string;
}

export interface InvoicesProps {
  invoices: Invoice[];
  isLoading?: boolean;
}

export interface FilteredInvoice extends Invoice {
  // Add any additional properties specific to filtered invoices here
}

export interface PaginationProps<T> {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  items: T[];
}

export interface SearchProps {
  searchTerm: string;
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
}
