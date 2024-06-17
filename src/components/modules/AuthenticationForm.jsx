"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

import { signIn } from "next-auth/react";

import { motion } from "framer-motion";
import { containerVariants } from "@/utils/variants";

import { Form } from "../ui/form";
import { Button } from "../ui/button";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpFormSchema, signInFormSchema } from "@/schemas/formValidations";

import toast from "react-hot-toast";

import CustomTextInput from "./CustomTextInput";
import { DotsLoader } from "./CustomLoaders";

const AuthenticationForm = ({ signUp = false }) => {
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(signUp ? signUpFormSchema : signInFormSchema),
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

        toast.success(data.message, {
          style: {
            color: "hsl(var(--foreground))",
            backgroundColor: "hsl(var(--background))",
          },
          duration: 1500,
        });

        setTimeout(() => {
          router.push("/sign-in");
        }, 1500);
      } else {
        toast.error(data.error, {
          style: {
            color: "hsl(var(--foreground))",
            backgroundColor: "hsl(var(--background))",
          },
          duration: 1500,
        });
      }
    } else {
      const res = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      });

      if (res.error) {
        toast.error(res.error, {
          style: {
            color: "hsl(var(--foreground))",
            backgroundColor: "hsl(var(--background))",
          },
          duration: 1500,
        });
      } else {
        form.reset();

        toast.success("با موفقیت وارد حساب خود شدید", {
          style: {
            color: "hsl(var(--foreground))",
            backgroundColor: "hsl(var(--background))",
          },
          duration: 1500,
        });

        setTimeout(() => {
          router.replace("/dashboard");
          router.refresh();
        }, 1500);
      }
    }
  };

  return (
    <Form {...form}>
      <motion.form
        className="max-w-[400px] space-y-5 bg-white mx-auto py-5 px-2.5 rounded-md shadow-md shadow-primary dark:bg-accent"
        variants={containerVariants}
        noValidate
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <h3 className="h3 text-primary text-center dark:text-accent-foreground">
          فرم {signUp ? "ثبت نام" : "ورود"}
        </h3>
        {signUp && (
          <div className="grid grid-cols-2 gap-2.5">
            <CustomTextInput
              name="firstName"
              form={form}
              label="نام"
              placeholder="نام خود را وارد کنید"
            />
            <CustomTextInput
              name="lastName"
              form={form}
              label="نام خانوادگی"
              placeholder="نام خانوادگی خود را وارد کنید"
            />
          </div>
        )}
        <CustomTextInput
          name="email"
          form={form}
          label="ایمیل"
          type="email"
          placeholder="ایمیل خود را وارد کنید"
        />
        <CustomTextInput
          name="password"
          form={form}
          label="رمز عبور"
          type="password"
          placeholder="رمز عبور خود را وارد کنید"
        />
        <Button
          className="text-lg font-semibold dark:text-accent-foreground"
          type="submit"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? (
            <DotsLoader />
          ) : signUp ? (
            "ثبت نام"
          ) : (
            "ورود"
          )}
        </Button>
        <div className="flex justify-center items-center gap-1.5 text-sm font-medium">
          حساب {signUp ? "دارید" : "ندارید"}؟
          <Link
            className="font-semibold transition-colors hover:text-primary"
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
