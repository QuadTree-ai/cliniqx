// src/components/ui/InputOTPSlot.tsx

import React, { forwardRef } from 'react';

interface InputOTPSlotProps extends React.InputHTMLAttributes<HTMLInputElement> {
  index: number;
}

const InputOTPSlot = forwardRef<HTMLInputElement, InputOTPSlotProps>(
  ({ index, ...props }, ref) => (
    <input
      ref={ref}
      type="text"
      maxLength={1}
      className="w-12 h-12 text-center border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none"
      {...props}
    />
  )
);

InputOTPSlot.displayName = 'InputOTPSlot';

export { InputOTPSlot };
