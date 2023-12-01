"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { signUpFormSchema, signInFormSchema } from "@/schemas/formValidations";

import { signIn } from "next-auth/react";

import toast from "react-hot-toast";

import { Form } from "../ui/form";

import CustomTextInput from "./CustomTextInput";
import CustomButton from "./CustomButton";

const AuthenticationForm = ({ signUp = false }) => {
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(signUp ? signUpFormSchema : signInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values) => {
    if (signUp) {
      const res = await fetch("/api/auth/sign-up", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (data.message) {
        form.reset();
        toast.success(data.message);
        router.push("/sign-in");
      } else {
        toast.error(data.error);
      }
    } else {
      const res = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      });
      if (res.error) {
        toast.error(res.error);
      } else {
        form.reset();
        toast.success("با موفقیت وارد حساب خود شدید");
        router.replace("/dashboard");
      }
    }
  };

  return (
    <Form {...form}>
      <form
        className="max-w-[300px] w-full space-y-5 bg-white p-5 border-2 border-solid border-primary rounded-md shadow-md shadow-primary"
        noValidate
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <h2 className="h2 text-primary text-center">
          فرم {signUp ? "ثبت نام" : "ورود"}
        </h2>
        <CustomTextInput name="email" form={form} label="ایمیل" type="email" />
        <CustomTextInput
          name="password"
          form={form}
          label="رمز عبور"
          type="password"
        />
        <CustomButton signUp={signUp} disabled={form.formState.isSubmitting} />
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
