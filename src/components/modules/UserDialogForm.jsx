"use client";

import React from "react";

import { useRouter } from "next/navigation";

import { Form } from "../ui/form";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { DialogFooter } from "../ui/dialog";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userFormSchema } from "@/schemas/formValidations";

import toast from "react-hot-toast";

import { Trash } from "lucide-react";

import { DotsLoader } from "./CustomLoaders";
import CustomImageInput from "./CustomImageInput";
import CustomTextInput from "./CustomTextInput";
import { Button } from "../ui/button";

const UserDialogForm = ({ user, setOpen }) => {
  const [avatar, setAvatar] = React.useState("");

  const router = useRouter();

  const form = useForm({
    defaultValues: {
      avatar: user.avatar,
      firstName: user.firstName,
      lastName: user.lastName,
    },
    mode: "onChange",
    resolver: zodResolver(userFormSchema),
  });

  React.useEffect(() => {
    if (form.formState.errors?.avatar) {
      toast.error(form.formState.errors?.avatar.message, {
        style: {
          color: "hsl(var(--foreground))",
          backgroundColor: "hsl(var(--background))",
        },
        duration: 1500,
      });
    } else {
      setAvatar(form.getValues("avatar"));
    }
  }, [form.watch("avatar")]);

  const onSubmit = async (values) => {
    const res = await fetch("/api/dashboard/edit-user-information", {
      method: "PATCH",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    if (data.message) {
      toast.success(data.message);
      setOpen(false);
      router.refresh();
    } else {
      toast.error(data.error);
    }
  };

  return (
    <Form {...form}>
      <form
        className="space-y-5"
        noValidate
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="col-span-full flex items-center gap-5">
          <div
            className={`relative border-2 border-solid rounded-full ${
              form.formState.errors?.avatar
                ? "border-destructive dark:border-red-500"
                : "border-transparent"
            }`}
          >
            <Button
              className="absolute left-0 rounded-full z-10 dark:bg-red-500 dark:hover:bg-red-600"
              variant="destructive"
              size="icon"
              type="button"
              onClick={() => form.setValue("avatar", "")}
            >
              <Trash size={17.5} />
            </Button>
            <Avatar className="w-36 h-36 relative">
              <CustomImageInput
                name="avatar"
                form={form}
                inputStyles="w-full h-full absolute opacity-0 cursor-pointer"
              />
              <AvatarImage
                className="object-cover"
                src={avatar}
                alt={`${user.firstName} ${user.lastName}`}
              />
              <AvatarFallback className="text-3xl font-extrabold">
                {user.firstName[0]} {user.lastName[0]}
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="flex-1 space-y-2.5">
            <CustomTextInput name="firstName" form={form} label="نام" />
            <CustomTextInput name="lastName" form={form} label="نام خانوادگی" />
          </div>
        </div>
        <DialogFooter>
          <Button
            className="bg-green-500 hover:bg-green-600 dark:text-accent-foreground"
            type="submit"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? <DotsLoader /> : "ذخیره"}
          </Button>
        </DialogFooter>
      </form>
    </Form>
  );
};

export default UserDialogForm;
