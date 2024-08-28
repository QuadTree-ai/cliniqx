"use client";

import React, { useState, useEffect, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
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
} from "./otpconst";

interface InputOTPDemoProps {
  isOpen: boolean;
  closeModal: () => void;
}

const InputOTPDemo: React.FC<InputOTPDemoProps> = ({ isOpen, closeModal }) => {
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
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeModal}>
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm" />
          </Transition.Child>

          <span className="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">
              <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                Verify Your Account
              </Dialog.Title>
              <div className="mt-4 flex flex-col space-y-8">
                <div className="flex flex-col items-center space-y-4">
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

                <div className="flex flex-col items-center space-y-4">
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
              <div className="mt-4">
                <Button onClick={closeModal} className="w-full bg-gray-600 hover:bg-black text-white py-2">
                  Close
                </Button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}

export default InputOTPDemo;
