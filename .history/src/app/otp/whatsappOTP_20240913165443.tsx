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
      // This should involve calling your backend API that integrates with WhatsApp Business API
      const response = await fetch('/api/send-whatsapp-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phoneNumber }),
      });
      if (response.ok) {
        setOtpSent(true);
        onOTPSent();
      } else {
        throw new Error('Failed to send OTP');
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
      // Handle error (e.g., show error message to user)
    } finally {
      setLoading(false);
    }
  };

  const verifyOTP = async () => {
    setLoading(true);
    try {
      // TODO: Implement actual OTP verification logic here
      // This should involve calling your backend to verify the OTP
      const response = await fetch('/api/verify-whatsapp-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phoneNumber, otp }),
      });
      if (response.ok) {
        onOTPVerified();
      } else {
        throw new Error('Invalid OTP');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      // Handle error (e.g., show error message to user)
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
