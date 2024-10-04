import React, { useState, useMemo, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TestData } from './types';
import { useDebounce } from './hooks/useDebounce';
import { Search, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface TestsProps {
  tests: TestData[];
}

const ITEMS_PER_PAGE = 10;

const Tests: React.FC<TestsProps> = ({ tests }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const filteredTests = useMemo(() => {
    return tests.filter((test) =>
      Object.values(test).some((value) =>
        value.toString().toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      )
    );
  }, [tests, debouncedSearchTerm]);

  const totalPages = Math.ceil(filteredTests.length / ITEMS_PER_PAGE);

  const paginatedTests = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredTests.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredTests, currentPage]);

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
    switch (status.toLowerCase()) {
      case 'completed':
        return <Badge className="bg-green-500">Completed</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-500">Pending</Badge>;
      case 'cancelled':
        return <Badge className="bg-red-500">Cancelled</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>All Tests</CardTitle>
        <div className="flex items-center space-x-2">
          <Search className="text-gray-400" />
          <Input
            type="text"
            placeholder="Search tests..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full"
          />
          {searchTerm && (
            <Button variant="ghost" onClick={handleClearSearch}>
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent>
        {paginatedTests.length > 0 ? (
          <>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Test ID</TableHead>
                  <TableHead>Test Name</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Patient Name</TableHead>
                  <TableHead>CliniQX Number</TableHead>
                  <TableHead>Patient Phone</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedTests.map((test) => (
                  <TableRow key={test.testId} className="hover:bg-gray-50">
                    <TableCell className="font-medium">{test.testId}</TableCell>
                    <TableCell>{test.testName}</TableCell>
                    <TableCell>{test.date}</TableCell>
                    <TableCell>{test.patientName}</TableCell>
                    <TableCell>{test.cliniqxNumber}</TableCell>
                    <TableCell>{test.patientPhone}</TableCell>
                    <TableCell>{getStatusBadge(test.status)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="flex justify-between items-center mt-4">
              <Button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
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

export default Tests;
