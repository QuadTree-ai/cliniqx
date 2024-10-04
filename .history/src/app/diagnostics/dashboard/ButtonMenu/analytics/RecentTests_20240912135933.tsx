import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { TestData } from '@/types/dashboard';
import { Button } from "@/components/ui/button";

interface RecentTestsCardProps {
  tests: TestData[];
  onSeeAllClick: () => void;
}

const RecentTestsCard: React.FC<RecentTestsCardProps> = ({ tests, onSeeAllClick }) => {
  const recentTests = tests.slice(0, 5);

  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return <Badge className="bg-green-600">Completed</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-600">Pending</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle>Recent Tests</CardTitle>
        <Button variant="outline" size="sm" onClick={onSeeAllClick}>See All</Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Test Name</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Patient Name</TableHead>
              <TableHead>Patient Phone</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentTests.map((test, index) => (
              <TableRow key={index}>
                <TableCell>{test.testName}</TableCell>
                <TableCell>{test.date}</TableCell>
                <TableCell>{test.patientName}</TableCell>
                <TableCell>{test.patientPhone}</TableCell>
                <TableCell>{getStatusBadge(test.status)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default RecentTestsCard;