import React, { useState, useEffect, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TestData } from '../../types';
import { useDebounce } from '@/hooks/useDebounce';

interface TestsProps {
  tests: TestData[];
}

const ITEMS_PER_PAGE = 10;

const Tests: React.FC<TestsProps> = ({ tests }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return <Badge className="bg-green-600 text-white">Completed</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-600 text-black">Pending</Badge>;
      case 'in progress':
        return <Badge className="bg-blue-600 text-white">In Progress</Badge>;
      default:
        return <Badge className="bg-gray-600 text-white">{status}</Badge>;
    }
  };

  const filteredTests = useMemo(() => {
    return tests.filter(test =>
      Object.values(test).some(value => 
        value.toString().toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      )
    );
  }, [tests, debouncedSearchTerm]);

  const paginatedTests = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredTests.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredTests, currentPage]);

  const totalPages = Math.ceil(filteredTests.length / ITEMS_PER_PAGE);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [debouncedSearchTerm]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>All Tests</CardTitle>
        <div className="flex gap-2">
          <Input
            placeholder="Search tests..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-sm"
          />
          <Button onClick={() => setSearchTerm('')}>Clear</Button>
        </div>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Test ID</TableHead>
                  <TableHead>Test Name</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Patient Name</TableHead>
                  <TableHead>CliniQX Number</TableHead>
                  <TableHead>Patient Phone</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedTests.map((test, index) => (
                  <TableRow key={index}>
                    <TableCell>{test.testId}</TableCell>
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
            <div className="flex justify-between mt-4">
              <Button 
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                Previous
              </Button>
              <span>Page {currentPage} of {totalPages}</span>
              <Button 
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Next
              </Button>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default Tests;
