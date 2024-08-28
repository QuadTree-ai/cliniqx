"use client";

import React, { Fragment } from "react";
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
  EMAIL_OTP_HEADER,
  PHONE_OTP_HEADER,
  EMAIL_OTP_DESCRIPTION,
  PHONE_OTP_DESCRIPTION,
  RESEND_EMAIL_BUTTON_LABEL,
  RESEND_PHONE_BUTTON_LABEL,
  RESEND_OTP_MESSAGE,
  useOTPLogic,
} from "./OTPlogic";

interface InputOTPDemoProps {
  isOpen: boolean;
  closeModal: () => void;
}

const InputOTPDemo: React.FC<InputOTPDemoProps> = ({ isOpen, closeModal }) => {
  const {
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
  } = useOTPLogic();

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
                      {Array.from({ length: OTP_LENGTH }).map((_, index) => (
                        <InputOTPSlot
                          key={index}
                          index={index}
                          value={emailOTP[index]}
                          onChange={(e) => handleEmailOTPChange(index, (e.target as HTMLInputElement).value)}
                        />
                      ))}
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
                      {Array.from({ length: OTP_LENGTH }).map((_, index) => (
                        <InputOTPSlot
                          key={index}
                          index={index}
                          value={phoneOTP[index]}
                          onChange={(e) => handlePhoneOTPChange(index, (e.target as HTMLInputElement).value)}
                        />
                      ))}
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
