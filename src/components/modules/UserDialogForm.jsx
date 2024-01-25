"use client";

import React from "react";

import { useRouter, usePathname } from "next/navigation";

import { Form } from "../ui/form";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { DialogFooter } from "../ui/dialog";

import { useForm } from "react-hook-form";

import toast from "react-hot-toast";

import { roles } from "@/constants/lists";

import RemoveButton from "./RemoveButton";
import CustomImageInput from "./CustomImageInput";
import CustomTextInput from "./CustomTextInput";
import CustomSelect from "./CustomSelect";
import CustomButton from "./CustomButton";

const UserDialogForm = ({ user, setOpen }) => {
  const [avatar, setAvatar] = React.useState("");

  const router = useRouter();
  const pathname = usePathname();

  const form = useForm({
    defaultValues: {
      avatar: user.avatar,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
    },
  });

  React.useEffect(() => {
    setAvatar(form.getValues("avatar"));
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
          <div className="relative">
            <RemoveButton
              containerStyles="absolute top-0 left-0 z-20"
              handleRemove={() => form.setValue("avatar", "")}
            />
            <Avatar className="w-36 h-36 relative">
              <CustomImageInput
                name="avatar"
                form={form}
                containerStyles="space-y-0"
                inputStyles="w-full h-full absolute opacity-0 cursor-pointer z-10"
              />
              <AvatarImage
                src={avatar}
                alt={`${user.firstName} ${user.lastName}`}
              />
              <AvatarFallback className="text-3xl font-extrabold">
                {user.firstName[0]} {user.lastName[0]}
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="w-full space-y-2.5">
            <CustomTextInput name="firstName" form={form} label="نام" />
            <CustomTextInput name="lastName" form={form} label="نام خانوادگی" />
          </div>
        </div>
        {pathname === "/dashboard/admin/users" ? (
          <CustomSelect name="role" form={form} label="نقش" list={roles} />
        ) : null}
        <DialogFooter className="col-span-full">
          <CustomButton
            containerStyles="bg-green-500 hover:bg-green-600"
            disabled={form.formState.isSubmitting}
          >
            ذخیره
          </CustomButton>
        </DialogFooter>
      </form>
    </Form>
  );
};

export default UserDialogForm;
