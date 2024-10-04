"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [cliniqxCardNumber, setCliniqxCardNumber] = useState("");
  const [reportData, setReportData] = useState(null);

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const handleCliniqxCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCliniqxCardNumber(e.target.value);
  };

  const handleShareReport = () => {
    // Logic to share report data using phoneNumber or cliniqxCardNumber
    console.log("Sharing report data to:", phoneNumber || cliniqxCardNumber);
  };

  return (
    <div className="dashboard">
      <h1>Diagnostics Center Dashboard</h1>
      <div className="tabler">
        {/* Example data, replace with actual data */}
        <table>
          <thead>
            <tr>
              <th>Test Name</th>
              <th>Result</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Blood Test</td>
              <td>Normal</td>
              <td>2023-01-01</td>
            </tr>
            <tr>
              <td>X-Ray</td>
              <td>Clear</td>
              <td>2023-01-02</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="share-report">
        <h2>Share Report Data</h2>
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
    </div>
  );
};

export default Dashboard;
