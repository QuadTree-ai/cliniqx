import React, { useState, useMemo, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Invoice } from '../../types';
import { useDebounce } from '@/app/diagnostics/dashboard/hooks/useDebounce';
import { Search, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface InvoicesProps {
  invoices: Invoice[];
  isLoading?: boolean;
}

const ITEMS_PER_PAGE = 10;

const Invoices: React.FC<InvoicesProps> = ({ invoices, isLoading = false }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const filteredInvoices = useMemo(() => {
    return invoices.filter((invoice) =>
      Object.values(invoice).some((value) =>
        value.toString().toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      )
    );
  }, [invoices, debouncedSearchTerm]);

  const totalPages = Math.ceil(filteredInvoices.length / ITEMS_PER_PAGE);

  const paginatedInvoices = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredInvoices.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredInvoices, currentPage]);

  const handleSearch = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  }, []);

  const handleClearSearch = useCallback(() => {
    setSearchTerm('');
    setCurrentPage(1);
  }, []);

  const handlePageChange = useCallback((newPage: number) => {
    setCurrentPage(newPage);
  }, []);

  const getStatusBadge = useCallback((status: string) => {
    const statusColors = {
      paid: "bg-green-600",
      pending: "bg-yellow-600",
      overdue: "bg-red-600"
    } as { [key: string]: string };
    const color = statusColors[status.toLowerCase()] || "bg-gray-600";
    return <Badge className={color}>{status}</Badge>;
  }, []);

  if (isLoading) {
    return <Card><CardContent>Loading invoices...</CardContent></Card>;
  }

  if (!invoices.length) {
    return <Card><CardContent>No invoices found.</CardContent></Card>;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>All Invoices</CardTitle>
        <div className="flex items-center space-x-2">
          <Search className="text-gray-400" />
          <Input
            type="text"
            placeholder="Search invoices..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full"
          />
          {searchTerm && (
            <Button variant="ghost" onClick={handleClearSearch} aria-label="Clear search">
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent>
        {paginatedInvoices.length > 0 ? (
          <>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Invoice ID</TableHead>
                  <TableHead>Patient Name</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedInvoices.map((invoice) => (
                  <TableRow key={invoice.id} className="hover:bg-gray-50">
                    <TableCell className="font-medium">{invoice.id}</TableCell>
                    <TableCell>{invoice.patientName}</TableCell>
                    <TableCell>${invoice.amount.toFixed(2)}</TableCell>
                    <TableCell>{getStatusBadge(invoice.status)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="flex justify-between items-center mt-4">
              <Button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Previous page"
              >
                <ChevronLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              <span>
                Page {currentPage} of {totalPages}
              </span>
              <Button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Next page"
              >
                Next
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </>
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-500">No results found</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default Invoices;
