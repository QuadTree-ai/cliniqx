"use client";

import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
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
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { ToastProvider, ToastViewport, Toast, ToastTitle, ToastDescription } from "@/components/ui/toast";
import { OTP_LENGTH, PHONE_OTP_HEADER, PHONE_OTP_DESCRIPTION } from "./otpconst";
import { sendWhatsAppOTP } from "@/utils/whatsappUtils";

const FormSchema = z.object({
  pin: z.array(z.string().min(1, { message: "Required" })).length(6),
});

interface InputOTPDemoProps {
  isOpen: boolean;
  closeModal: () => void;
  cardNumber: string;
}

const InputOTPDemo: React.FC<InputOTPDemoProps> = ({ isOpen, closeModal, cardNumber }) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: Array(6).fill(""),
    },
  });

  const [toast, setToast] = React.useState<{
    title: string;
    description: string;
    variant?: "default" | "destructive";
  } | null>(null);

  function onSubmit(data: z.infer<typeof FormSchema>) {
    // Simulate OTP validation
    const isValidOTP = data.pin.join("") === actualOTP; // Replace with actual OTP validation logic

    if (isValidOTP) {
      setToast({
        title: "Account Created",
        description: `Your account has been successfully created. Your card number is ${cardNumber}.`,
      });
      closeModal();
    } else {
      setToast({
        title: "Invalid OTP",
        description: "The one-time password you entered is incorrect. Please try again.",
        variant: "destructive",
      });
    }
  }

  return (
    <ToastProvider>
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
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full">
                      <FormField
                        control={form.control}
                        name="pin"
                        render={() => (
                          <FormItem>
                            <FormLabel>One-Time Password</FormLabel>
                            <FormControl>
                              <InputOTP maxLength={6}>
                                <InputOTPGroup>
                                  {Array.from({ length: 6 }).map((_, index) => (
                                    <Controller
                                      key={index}
                                      name={`pin.${index}`}
                                      control={form.control}
                                      render={({ field }) => (
                                        <InputOTPSlot
                                          index={index}
                                          {...field}
                                          onChange={(e) => field.onChange((e.target as HTMLInputElement).value)}
                                        />
                                      )}
                                    />
                                  ))}
                                </InputOTPGroup>
                              </InputOTP>
                            </FormControl>
                            <FormDescription>
                              Please enter the one-time password sent to your email.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit" className="w-full bg-gray-600 hover:bg-black text-white py-2 mt-4">
                        Submit
                      </Button>
                    </form>
                  </Form>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>

      <ToastViewport />
      {toast && (
        <Toast variant={toast.variant}>
          <div className="grid gap-1">
            <ToastTitle>{toast.title}</ToastTitle>
            <ToastDescription>{toast.description}</ToastDescription>
          </div>
        </Toast>
      )}
    </ToastProvider>
  );
}