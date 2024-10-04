import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Invoice } from '../../types';
import { Button } from "@/components/ui/button";

interface RecentInvoicesCardProps {
  invoices: Invoice[];
  onSeeAllClick: () => void;
}

const RecentInvoicesCard: React.FC<RecentInvoicesCardProps> = ({ invoices, onSeeAllClick }) => {
  const recentInvoices = invoices.slice(0, 5);

  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case 'paid':
        return <Badge className="bg-green-600">Paid</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-600">Pending</Badge>;
      case 'overdue':
        return <Badge className="bg-red-600">Overdue</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle>Recent Invoices</CardTitle>
        <Button variant="outline" size="sm" onClick={onSeeAllClick}>See All</Button>
      </CardHeader>
      <CardContent>
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
            {recentInvoices.map((invoice, index) => (
              <TableRow key={index}>
                <TableCell>{invoice.id}</TableCell>
                <TableCell>{invoice.patientName}</TableCell>
                <TableCell>${invoice.amount.toFixed(2)}</TableCell>
                <TableCell>{getStatusBadge(invoice.status)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default RecentInvoicesCard;
