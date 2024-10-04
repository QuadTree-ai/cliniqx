import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getRecentTests } from './datafetch';
import { TABLE_HEADERS } from './constant';

const RecentTestsCard: React.FC = () => {
  const recentTests = getRecentTests();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Tests</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              {TABLE_HEADERS.recentTests.map((header, index) => (
                <TableHead key={index}>{header}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentTests.map((test, index) => (
              <TableRow key={index}>
                <TableCell>{test.testName}</TableCell>
                <TableCell>{test.date}</TableCell>
                <TableCell>{test.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default RecentTestsCard;