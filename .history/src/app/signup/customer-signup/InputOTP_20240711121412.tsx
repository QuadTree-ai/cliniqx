"use client";

import React, { useState, useEffect } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";

export function InputOTPDemo() {
  const [emailTimer, setEmailTimer] = useState(60);
  const [phoneTimer, setPhoneTimer] = useState(60);
  const [emailResendDisabled, setEmailResendDisabled] = useState(true);
  const [phoneResendDisabled, setPhoneResendDisabled] = useState(true);

  useEffect(() => {
    const emailCountdown = setInterval(() => {
      setEmailTimer((prev) => {
        if (prev === 1) {
          clearInterval(emailCountdown);
          setEmailResendDisabled(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    const phoneCountdown = setInterval(() => {
      setPhoneTimer((prev) => {
        if (prev === 1) {
          clearInterval(phoneCountdown);
          setPhoneResendDisabled(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(emailCountdown);
      clearInterval(phoneCountdown);
    };
  }, []);

  const resendEmailOTP = () => {
    setEmailTimer(60);
    setEmailResendDisabled(true);
  };

  const resendPhoneOTP = () => {
    setPhoneTimer(60);
    setPhoneResendDisabled(true);
  };

  return (
    <div className="flex flex-col space-y-8">
      <div className="flex flex-col items-center space-y-4">
        <h2 className="text-xl font-bold">Email OTP</h2>
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <div className="mt-4 text-sm text-gray-600">
          Resend OTP in {emailTimer} seconds
        </div>
        <Button
          onClick={resendEmailOTP}
          disabled={emailResendDisabled}
          className={`mt-2 ${emailResendDisabled ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"} text-white`}
        >
          Resend Email OTP
        </Button>
      </div>

      <div className="flex flex-col items-center space-y-4">
        <h2 className="text-xl font-bold">Phone OTP</h2>
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <div className="mt-4 text-sm text-gray-600">
          Resend OTP in {phoneTimer} seconds
        </div>
        <Button
          onClick={resendPhoneOTP}
          disabled={phoneResendDisabled}
          className={`mt-2 ${phoneResendDisabled ? "bg-gray-400" : "bg-black"} text-white`}
        >
          Resend Phone OTP
        </Button>
      </div>
    </div>
  );
}

export default InputOTPDemo;
