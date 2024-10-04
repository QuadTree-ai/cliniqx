// src/app/signup/otp/OTPlogic.tsx

"use client";

import React, { useState, useEffect } from "react";

export const OTP_LENGTH = 6;
export const INITIAL_TIMER = 60;

export const PHONE_OTP_HEADER = "One-time password";
export const PHONE_OTP_DESCRIPTION = "Please enter the OTP sent to your phone.";
export const RESEND_PHONE_BUTTON_LABEL = "Resend Phone OTP";
export const RESEND_OTP_MESSAGE = (timer: number) => `Resend OTP in ${timer} seconds`;

export const useOTPLogic = () => {
  const [phoneTimer, setPhoneTimer] = useState(INITIAL_TIMER);
  const [phoneResendDisabled, setPhoneResendDisabled] = useState(true);

  useEffect(() => {
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
      clearInterval(phoneCountdown);
    };
  }, []);

  const resendPhoneOTP = () => {
    setPhoneTimer(INITIAL_TIMER);
    setPhoneResendDisabled(true);
    // Logic to resend OTP
    console.log("Phone OTP resent");
  };

  return {
    phoneTimer,
    phoneResendDisabled,
    resendPhoneOTP,
  };
};