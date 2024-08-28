"use client";

import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { toast } from "@/components/ui/use-toast";
import {
  OTP_LENGTH,
  PHONE_OTP_HEADER,
  PHONE_OTP_DESCRIPTION,
  RESEND_PHONE_BUTTON_LABEL,
  RESEND_OTP_MESSAGE,
  useOTPLogic,
} from "./OTPlogic";

const FormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

interface InputOTPDemoProps {
  isOpen: boolean;
  closeModal: () => void;
}

const InputOTPDemo: React.FC<InputOTPDemoProps> = ({ isOpen, closeModal }) => {
  const { phoneOTP, phoneTimer, phoneResendDisabled, handlePhoneOTPChange, resendPhoneOTP } = useOTPLogic();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    closeModal();
  }

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
              <div className="mt-4 flex flex-col space-y-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full">
                    <FormField
                      control={form.control}
                      name="pin"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{PHONE_OTP_HEADER}</FormLabel>
                          <FormControl>
                            <InputOTP maxLength={OTP_LENGTH} {...field}>
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
                          </FormControl>
                          <FormDescription>{PHONE_OTP_DESCRIPTION}</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
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
                    <Button type="submit" className="w-full bg-gray-600 hover:bg-black text-white py-2 mt-4">
                      Submit
                    </Button>
                  </form>
                </Form>
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
