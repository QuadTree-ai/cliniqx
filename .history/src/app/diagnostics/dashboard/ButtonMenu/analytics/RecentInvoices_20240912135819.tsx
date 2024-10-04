import React, { useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Invoice } from '@/types/dashboard';
import { Button } from "@/components/ui/button";

interface RecentInvoicesCardProps {
  invoices: Invoice[];
  onSeeAllClick: () => void;
}

const MAX_INVOICES = 5;

const statusColors: Record<string, string> = {
  paid: "bg-green-600",
  pending: "bg-yellow-600",
  overdue: "bg-red-600"
};

const RecentInvoicesCard: React.FC<RecentInvoicesCardProps> = ({ invoices, onSeeAllClick }) => {
  const recentInvoices = useMemo(() => invoices.slice(0, MAX_INVOICES), [invoices]);

  const getStatusBadge = (status: string) => {
    const color = statusColors[status.toLowerCase()] || "bg-gray-600";
    return <Badge className={color}>{status}</Badge>;
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
            {recentInvoices.map(({ id, patientName, amount, status }) => (
              <TableRow key={id}>
                <TableCell>{id}</TableCell>
                <TableCell>{patientName}</TableCell>
                <TableCell>${amount.toFixed(2)}</TableCell>
                <TableCell>{getStatusBadge(status)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default RecentInvoicesCard;
