"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface WhatsAppOTPProps {
  phoneNumber: string;
  onOTPSent: () => void;
  onOTPVerified: () => void;
}

const WhatsAppOTP: React.FC<WhatsAppOTPProps> = ({ phoneNumber, onOTPSent, onOTPVerified }) => {
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendOTP = async () => {
    setLoading(true);
    try {
      // TODO: Implement actual WhatsApp OTP sending logic here
      // This could involve calling a backend API that integrates with WhatsApp Business API
      console.log(`Sending OTP to WhatsApp number: ${phoneNumber}`);
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulating API call
      setOtpSent(true);
      onOTPSent();
    } catch (error) {
      console.error('Error sending OTP:', error);
    } finally {
      setLoading(false);
    }
  };

  const verifyOTP = async () => {
    setLoading(true);
    try {
      // TODO: Implement actual OTP verification logic here
      // This should involve calling your backend to verify the OTP
      console.log(`Verifying OTP: ${otp}`);
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulating API call
      onOTPVerified();
    } catch (error) {
      console.error('Error verifying OTP:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      {!otpSent ? (
        <Button
          onClick={sendOTP}
          disabled={loading}
          className="w-full py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg"
        >
          {loading ? "Sending..." : "Send OTP via WhatsApp"}
        </Button>
      ) : (
        <>
          <Input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
          <Button
            onClick={verifyOTP}
            disabled={loading || otp.length !== 6}
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </Button>
        </>
      )}
    </div>
  );
};

export default WhatsAppOTP;
