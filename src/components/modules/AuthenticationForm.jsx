"use client";

import Link from "next/link";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { signUpFormSchema, signInFormSchema } from "@/schemas/formValidations";

import { signIn } from "next-auth/react";

import { Form } from "../ui/form";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";
import { cn } from "@/lib/utils";

import TextInput from "./TextInput";

const AuthenticationForm = ({ signUp = false }) => {
  const form = useForm({
    resolver: zodResolver(signIn ? signInFormSchema : signUpFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { toast } = useToast();

  const onSubmit = async (values) => {
    if (signUp) {
      const res = await fetch("/api/auth/sign-up", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
    } else {
      const res = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      });
      if (res.error) {
        toast({
          variant: "destructive",
          title: res.error,
        });
      } else {
        form.reset();
        toast({
          className: cn(`text-primary-foreground bg-primary border-none`),
          title: "با موفقیت وارد حساب خود شدید.",
        });
      }
    }
  };

  return (
    <Form {...form}>
      <form
        className="max-w-[300px] w-full space-y-5 bg-white mx-auto p-5 border-2 border-solid border-primary rounded-md shadow-md shadow-primary"
        noValidate
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <h2 className="h2 text-primary text-center">
          فرم {signUp ? "ثبت نام" : "ورود"}
        </h2>
        <TextInput name="email" form={form} label="ایمیل" type="email" />
        <TextInput
          name="password"
          form={form}
          label="رمز عبور"
          type="password"
        />
        <Button
          className="w-full text-base font-bold"
          type="submit"
          disabled={form.formState.isSubmitting}
        >
          {signUp ? "ثبت نام" : "ورود"}
        </Button>
        <div className="flex justify-center items-center gap-1 font-medium">
          حساب {signUp ? "دارید" : "ندارید"}؟
          <Link
            className="font-bold transition-colors hover:text-primary"
            href={`/sign-${signUp ? "in" : "up"}`}
          >
            {signUp ? "ورود" : "ثبت نام"}
          </Link>
        </div>
      </form>
    </Form>
  );
};

export default AuthenticationForm;
