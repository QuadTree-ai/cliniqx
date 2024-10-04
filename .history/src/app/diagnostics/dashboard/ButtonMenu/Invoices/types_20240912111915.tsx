import { Invoice } from '../../../types';

export interface InvoicesProps {
  invoices: Invoice[];
}

export interface FilteredInvoice extends Invoice {
  [key: string]: string | number;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export interface SearchProps {
  searchTerm: string;
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
}
