import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { fields } from "./details"
import { Form } from "@/components/ui/form"

export default function Login() {
    const { register, handleSubmit } = useForm()

    const onSubmit = (data: any) => {
        console.log(data)
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
                                    {...register(field.name, { required: field.required })}
                                />
                            </div>
                        ))}
                        <Button type="submit" className="w-full">
                            Login
                        </Button>
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
            </div>
        </div>
    )
}