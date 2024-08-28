"use client";

import React, { useState, useEffect } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import {
  OTP_LENGTH,
  INITIAL_TIMER,
  RESEND_EMAIL_BUTTON_LABEL,
  RESEND_PHONE_BUTTON_LABEL,
  EMAIL_OTP_HEADER,
  PHONE_OTP_HEADER,
  EMAIL_OTP_DESCRIPTION,
  PHONE_OTP_DESCRIPTION,
  RESEND_OTP_MESSAGE,
} from "@/constants/otpconst";

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
        <h2 className="text-xl font-bold">{EMAIL_OTP_HEADER}</h2>
        <p className="text-center text-gray-700">
          {EMAIL_OTP_DESCRIPTION}
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
          {RESEND_OTP_MESSAGE(emailTimer)}
        </div>
        <Button
          onClick={resendEmailOTP}
          disabled={emailResendDisabled}
          className={`mt-2 ${emailResendDisabled ? "bg-gray-400" : "bg-black"} text-white py-2 px-4 rounded-md`}
        >
          {RESEND_EMAIL_BUTTON_LABEL}
        </Button>
      </div>

      <div className="flex flex-col items-center space-y-6">
        <h2 className="text-xl font-bold">{PHONE_OTP_HEADER}</h2>
        <p className="text-center text-gray-700">
          {PHONE_OTP_DESCRIPTION}
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
          {RESEND_OTP_MESSAGE(phoneTimer)}
        </div>
        <Button
          onClick={resendPhoneOTP}
          disabled={phoneResendDisabled}
          className={`mt-2 ${phoneResendDisabled ? "bg-gray-400" : "bg-black"} text-white py-2 px-4 rounded-md`}
        >
          {RESEND_PHONE_BUTTON_LABEL}
        </Button>
      </div>
    </div>
  );
}

export default InputOTPDemo;
