"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { OTP_LENGTH, INITIAL_TIMER, RESEND_OTP_MESSAGE, PHONE_OTP_HEADER, PHONE_OTP_DESCRIPTION } from "./otpconst";

interface WhatsAppOTPProps {
  phoneNumber: string;
  onOTPVerified: () => void;
}

const WhatsAppOTP: React.FC<WhatsAppOTPProps> = ({ phoneNumber, onOTPVerified }) => {
  const [otp, setOtp] = useState<string[]>(new Array(OTP_LENGTH).fill(""));
  const [timer, setTimer] = useState(INITIAL_TIMER);
  const [resendDisabled, setResendDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          clearInterval(countdown);
          setResendDisabled(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const sendOTP = async () => {
    setLoading(true);
    // TODO: Implement actual WhatsApp OTP sending logic here
    console.log(`Sending OTP to WhatsApp number: ${phoneNumber}`);
    setTimer(INITIAL_TIMER);
    setResendDisabled(true);
    setLoading(false);
  };

  const verifyOTP = async () => {
    setLoading(true);
    // TODO: Implement actual OTP verification logic here
    console.log(`Verifying OTP: ${otp.join("")}`);
    // Simulating verification
    setTimeout(() => {
      setLoading(false);
      onOTPVerified();
    }, 1000);
  };

  const handleResend = () => {
    sendOTP();
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">{PHONE_OTP_HEADER}</h2>
      <p>{PHONE_OTP_DESCRIPTION}</p>
      <InputOTP
        value={otp.join("")}
        onChange={(value) => setOtp(value.split(""))}
        maxLength={OTP_LENGTH}
      >
        <InputOTPGroup>
          {new Array(OTP_LENGTH).fill(null).map((_, index) => (
            <InputOTPSlot key={index} index={index} />
          ))}
        </InputOTPGroup>
      </InputOTP>
      <Button
        onClick={verifyOTP}
        disabled={loading || otp.join("").length !== OTP_LENGTH}
        className="w-full"
      >
        {loading ? "Verifying..." : "Verify OTP"}
      </Button>
      {timer > 0 ? (
        <p className="text-center">{RESEND_OTP_MESSAGE(timer)}</p>
      ) : (
        <Button
          onClick={handleResend}
          disabled={resendDisabled || loading}
          variant="outline"
          className="w-full"
        >
          Resend OTP
        </Button>
      )}
    </div>
  );
};

export default WhatsAppOTP;
