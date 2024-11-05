// hooks/useForm.ts
import { useState, useCallback } from 'react';
import { z } from 'zod';

interface UseFormProps<T> {
  initialValues: T;
  validationSchema?: z.ZodSchema<T>;
  onSubmit: (values: T) => Promise<void>;
}

export function useForm<T extends Record<string, any>>({
  initialValues,
  validationSchema,
  onSubmit,
}: UseFormProps<T>) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = useCallback((
    name: keyof T,
    value: any
  ) => {
    setValues(prev => ({ ...prev, [name]: value }));
    // Clear error when field is modified
    setErrors(prev => ({ ...prev, [name]: undefined }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      if (validationSchema) {
        const validatedData = validationSchema.parse(values);
        await onSubmit(validatedData);
      } else {
        await onSubmit(values);
      }
    } catch (err) {
      if (err instanceof z.ZodError) {
        const formattedErrors = {};
        err.errors.forEach(error => {
          if (error.path) {
            formattedErrors[error.path[0]] = error.message;
          }
        });
        setErrors(formattedErrors);
      }
      throw err;
    } finally {
      setIsSubmitting(false);
    }
  }, [values, validationSchema, onSubmit]);

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    setValues,
    setErrors,
  };
}