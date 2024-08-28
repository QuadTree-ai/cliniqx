import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { fields } from "./details"
import { Form } from "@/components/ui/form"
import { useState } from "react"

// Define the validation schema using Yup
const schema = yup.object().shape({
  email: yup.string().email("Invalid email format").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
})

export default function Login() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(schema)
  })
  const [serverError, setServerError] = useState<string | null>(null)

  const onSubmit = async (data: any) => {
    setServerError(null)
    try {
      console.log(data)
      // Perform login logic here (e.g., API call)
      // For example:
      // const response = await loginUser(data)
      // if (!response.success) {
      //   throw new Error(response.message)
      // }
    } catch (error) {
      setServerError("Login failed. Please try again.")
    }
  }

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-muted-foreground">
              Enter your email and password to login to your account
            </p>
          </div>
          <Form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
            {fields.map((field) => (
              <div className="grid gap-2" key={field.name}>
                <Label htmlFor={field.name}>{field.label}</Label>
                <Input
                  id={field.name}
                  type={field.type}
                  {...register(field.name)}
                  aria-invalid={errors[field.name] ? "true" : "false"}
                />
                {errors[field.name] && (
                  <span role="alert" className="text-red-600">
                    {errors[field.name]?.message}
                  </span>
                )}
              </div>
            ))}
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Logging in..." : "Login"}
            </Button>
            {serverError && (
              <div className="mt-4 text-center text-red-600">
                {serverError}
              </div>
            )}
          </Form>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <a href="/signup" className="underline">
              Sign up
            </a>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <img
          src="/placeholder.svg"
          alt="Image"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}
