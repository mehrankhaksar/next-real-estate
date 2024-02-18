"use client";

import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

import { signIn } from "next-auth/react";

import { motion } from "framer-motion";
import { containerVariants } from "@/utils/variants";

import { Form } from "../ui/form";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpFormSchema, signInFormSchema } from "@/schemas/formValidations";

import toast from "react-hot-toast";

import CustomTextInput from "./CustomTextInput";
import CustomButton from "./CustomButton";
import { DotsLoader } from "./CustomLoaders";

const AuthenticationForm = ({ signUp = false }) => {
  const router = useRouter();
  const pathname = usePathname();

  const form = useForm({
    resolver: zodResolver(signUp ? signUpFormSchema : signInFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
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
        router.refresh();
      }
    }
  };

  return (
    <Form {...form}>
      <motion.form
        className="max-w-[300px] space-y-5 bg-white mx-auto p-2.5 border-2 border-solid border-primary rounded-md shadow shadow-primary"
        variants={containerVariants}
        noValidate
        onSubmit={form.handleSubmit(onSubmit)}
        key={pathname}
      >
        <h2 className="h2 text-primary text-center">
          فرم {signUp ? "ثبت نام" : "ورود"}
        </h2>
        {signUp ? (
          <div className="flex items-center gap-2.5">
            <CustomTextInput name="firstName" form={form} label="نام" />
            <CustomTextInput name="lastName" form={form} label="نام خانوادگی" />
          </div>
        ) : null}
        <CustomTextInput name="email" form={form} label="ایمیل" type="email" />
        <CustomTextInput
          name="password"
          form={form}
          label="رمز عبور"
          type="password"
        />
        <CustomButton type="submit" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? (
            <DotsLoader />
          ) : signUp ? (
            "ثبت نام"
          ) : (
            "ورود"
          )}
        </CustomButton>
        <div className="flex justify-center items-center gap-1 font-medium">
          حساب {signUp ? "دارید" : "ندارید"}؟
          <Link
            className="font-bold transition-colors hover:text-primary"
            href={`/sign-${signUp ? "in" : "up"}`}
          >
            {signUp ? "ورود" : "ثبت نام"}
          </Link>
        </div>
      </motion.form>
    </Form>
  );
};

export default AuthenticationForm;
