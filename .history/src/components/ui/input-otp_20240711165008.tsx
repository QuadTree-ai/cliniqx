// src/components/ui/input-otp.tsx

"use client"

import * as React from "react"
import { DashIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"
import InputOTP from "@/app/signup/otp/InputOTP"

// Context for OTPInput
const OTPInputContext = React.createContext<any>(null)

interface OTPInputProps extends React.ComponentPropsWithoutRef<"div"> {
  maxLength: number
  containerClassName?: string
}

// OTPInput component
const OTPInput = React.forwardRef<
  React.ElementRef<"div">,
  OTPInputProps
>(({ maxLength, containerClassName, children, className, ...props }, ref) => {
  const slots = Array.from({ length: maxLength }).map(() => ({
    char: '',
    hasFakeCaret: false,
    isActive: false,
  }))

  return (
    <OTPInputContext.Provider value={{ slots }}>
      <div ref={ref} className={cn("flex items-center gap-2", containerClassName)} {...props}>
        {children}
      </div>
    </OTPInputContext.Provider>
  )
})
OTPInput.displayName = "OTPInput"

// Group component for OTP slots
const InputOTPGroup = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center", className)} {...props} />
))
InputOTPGroup.displayName = "InputOTPGroup"

// Slot component for individual OTP characters
const InputOTPSlot = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex h-9 w-9 items-center justify-center border-y border-r border-input text-sm shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        isActive && "z-10 ring-1 ring-ring",
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      )}
    </div>
  )
})
InputOTPSlot.displayName = "InputOTPSlot"

// Separator component for OTP slots
const InputOTPSeparator = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ ...props }, ref) => (
  <div ref={ref} role="separator" {...props}>
    <DashIcon />
  </div>
))
InputOTPSeparator.displayName = "InputOTPSeparator"

export { OTPInput, OTPInputContext, InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
