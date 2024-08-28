"use client";

import { useState, useEffect } from "react";

export const OTP_LENGTH = 6;
export const INITIAL_TIMER = 60;
export const RESEND_PHONE_BUTTON_LABEL = "Resend Phone OTP";
export const PHONE_OTP_HEADER = "Phone OTP";
export const PHONE_OTP_DESCRIPTION = "Please enter the OTP sent to your phone number.";
export const RESEND_OTP_MESSAGE = (timer: number) => `Resend OTP in ${timer} seconds`;

export const useOTPLogic = () => {
  const [phoneOTP, setPhoneOTP] = useState(Array(OTP_LENGTH).fill(""));
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

  const handlePhoneOTPChange = (index: number, value: string) => {
    const newOTP = [...phoneOTP];
    newOTP[index] = value;
    setPhoneOTP(newOTP);
    checkAndSubmit(newOTP);
  };

  const checkAndSubmit = (phoneOTP: string[]) => {
    if (phoneOTP.every((digit) => digit !== "")) {
      console.log("Auto-submitting form...");
      // Trigger form submission logic here
    }
  };

  const resendPhoneOTP = () => {
    setPhoneTimer(INITIAL_TIMER);
    setPhoneResendDisabled(true);
  };

  return {
    phoneOTP,
    phoneTimer,
    phoneResendDisabled,
    handlePhoneOTPChange,
    resendPhoneOTP,
  };
};
