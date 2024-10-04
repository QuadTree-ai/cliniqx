import React, { useState, useEffect, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TestData } from './types';
import { useDebounce } from './hooks/useDebounce';
import { Search, X, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  getRecentTests,
  getPatientStats,
  getPatientInfo,
  getTestsPerMonthData,
  getTestTypeDistributionData,
  getRevenueData,
  getPatientAgeDistributionData,
  getInvoicesData
} from '../../data/datafetch';

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
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">All Tests</CardTitle>
        <div className="flex items-center gap-2 mt-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search tests..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-10 py-2 w-full"
            />
            {searchTerm && (
              <Button
                onClick={() => setSearchTerm('')}
                variant="ghost"
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
          </div>
        ) : (
          <>
            {paginatedTests.length > 0 ? (
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
                  {paginatedTests.map((test, index) => (
                    <TableRow key={index} className="hover:bg-gray-50">
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
            ) : (
              <div className="text-center py-10">
                <p className="text-gray-500">No results found</p>
              </div>
            )}
            <div className="flex justify-between items-center mt-4">
              <Button 
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="flex items-center"
              >
                <ChevronLeft className="mr-2 h-4 w-4" /> Previous
              </Button>
              <span className="text-sm text-gray-600">
                Page {currentPage} of {totalPages}
              </span>
              <Button 
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="flex items-center"
              >
                Next <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default Tests;
