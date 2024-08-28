"use client";

import React, { useState, useEffect } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { OTP_LENGTH, INITIAL_TIMER } from "./otpconst";

export function InputOTPDemo() {
  const [emailTimer, setEmailTimer] = useState(INITIAL_TIMER);
  const [phoneTimer, setPhoneTimer] = useState(INITIAL_TIMER);
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
    setEmailTimer(INITIAL_TIMER);
    setEmailResendDisabled(true);
  };

  const resendPhoneOTP = () => {
    setPhoneTimer(INITIAL_TIMER);
    setPhoneResendDisabled(true);
  };

  return (
    <div className="flex flex-col space-y-12">
      <div className="flex flex-col items-center space-y-6">
        <h2 className="text-xl font-bold">Email OTP</h2>
        <p className="text-center text-gray-700">
          Please enter the {OTP_LENGTH}-digit OTP sent to your email address.
        </p>
        <InputOTP maxLength={OTP_LENGTH} className="flex justify-center space-x-2">
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
        <div className="mt-2 text-sm text-gray-600">
          Resend OTP in {emailTimer} seconds
        </div>
        <Button
          onClick={resendEmailOTP}
          disabled={emailResendDisabled}
          className={`mt-2 ${emailResendDisabled ? "bg-gray-400" : "bg-black"} text-white py-2 px-4 rounded-md`}
        >
          Resend Email OTP
        </Button>
      </div>

      <div className="flex flex-col items-center space-y-6">
        <h2 className="text-xl font-bold">Phone OTP</h2>
        <p className="text-center text-gray-700">
          Please enter the {OTP_LENGTH}-digit OTP sent to your phone number.
        </p>
        <InputOTP maxLength={OTP_LENGTH} className="flex justify-center space-x-2">
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
        <div className="mt-2 text-sm text-gray-600">
          Resend OTP in {phoneTimer} seconds
        </div>
        <Button
          onClick={resendPhoneOTP}
          disabled={phoneResendDisabled}
          className={`mt-2 ${phoneResendDisabled ? "bg-gray-400" : "bg-black"} text-white py-2 px-4 rounded-md`}
        >
          Resend Phone OTP
        </Button>
      </div>
    </div>
  );
}

export default InputOTPDemo;
