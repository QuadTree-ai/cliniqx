"use client";

import React, { useState, useEffect } from "react";

export const OTP_LENGTH = 6;
export const INITIAL_TIMER = 60;

export const useOTPLogic = () => {
  const [emailOTP, setEmailOTP] = useState(Array(OTP_LENGTH).fill(""));
  const [phoneOTP, setPhoneOTP] = useState(Array(OTP_LENGTH).fill(""));
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

  const handleEmailOTPChange = (index: number, value: string) => {
    const newOTP = [...emailOTP];
    newOTP[index] = value;
    setEmailOTP(newOTP);
    checkAndSubmit(newOTP, phoneOTP);
  };

  const handlePhoneOTPChange = (index: number, value: string) => {
    const newOTP = [...phoneOTP];
    newOTP[index] = value;
    setPhoneOTP(newOTP);
    checkAndSubmit(emailOTP, newOTP);
  };

  const checkAndSubmit = (emailOTP: string[], phoneOTP: string[]) => {
    if (emailOTP.every((digit) => digit !== "") && phoneOTP.every((digit) => digit !== "")) {
      console.log("Auto-submitting form...");
      // Trigger form submission logic here
    }
  };

  const resendEmailOTP = () => {
    setEmailTimer(INITIAL_TIMER);
    setEmailResendDisabled(true);
  };

  const resendPhoneOTP = () => {
    setPhoneTimer(INITIAL_TIMER);
    setPhoneResendDisabled(true);
  };

  return {
    emailOTP,
    phoneOTP,
    emailTimer,
    phoneTimer,
    emailResendDisabled,
    phoneResendDisabled,
    handleEmailOTPChange,
    handlePhoneOTPChange,
    resendEmailOTP,
    resendPhoneOTP,
  };
};
