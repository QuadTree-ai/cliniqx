import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { TABLE_HEADERS } from '../../constant';
import { TestData } from '../../types';

interface RecentTestsCardProps {
  tests: TestData[];
}

const RecentTestsCard: React.FC<RecentTestsCardProps> = ({ tests }) => {
  const recentTests = tests;

  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return <Badge className="bg-green-500">Completed</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-500">Pending</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Tests</CardTitle>
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