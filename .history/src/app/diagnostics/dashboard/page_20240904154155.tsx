"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Dashboard = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [cliniqxCardNumber, setCliniqxCardNumber] = useState("");

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const handleCliniqxCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCliniqxCardNumber(e.target.value);
  };

  const handleShareReport = () => {
    console.log("Sharing report data to:", phoneNumber || cliniqxCardNumber);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Diagnostics Center Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Blood Test</TableCell>
                  <TableCell>2023-05-15</TableCell>
                  <TableCell>Completed</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>X-Ray</TableCell>
                  <TableCell>2023-05-14</TableCell>
                  <TableCell>Pending</TableCell>
                </TableRow>
                {/* Add more rows as needed */}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Patient Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="/avatar-placeholder.png" alt="Patient" />
                <AvatarFallback>PT</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">John Doe</p>
                <p className="text-sm text-gray-500">ID: 12345</p>
              </div>
            </div>
            <div className="mt-4">
              <p><strong>Age:</strong> 35</p>
              <p><strong>Gender:</strong> Male</p>
              <p><strong>Blood Type:</strong> O+</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Share Report</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Input
              type="text"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
            <Input
              type="text"
              placeholder="Cliniqx Card Number"
              value={cliniqxCardNumber}
              onChange={handleCliniqxCardNumberChange}
            />
            <Button onClick={handleShareReport}>Share Report</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
