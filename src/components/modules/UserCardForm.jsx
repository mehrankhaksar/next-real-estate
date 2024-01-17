"use client";

import { useRouter } from "next/navigation";

import { Form } from "../ui/form";
import { DialogFooter } from "../ui/dialog";

import { useForm } from "react-hook-form";

import toast from "react-hot-toast";

import { roles } from "@/constants/lists";

import CustomTextInput from "./CustomTextInput";
import CustomSelect from "./CustomSelect";
import CustomButton from "./CustomButton";

const UserCardForm = ({ user, setOpen }) => {
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
    },
  });

  const onSubmit = async (values) => {
    const res = await fetch(
      `/api/dashboard/admin/edit-user-information/${user._id}`,
      {
        method: "PATCH",
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json" },
      }
    );
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
        className="grid grid-cols-2 gap-5"
        noValidate
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <CustomTextInput name="firstName" form={form} label="نام" />
        <CustomTextInput name="lastName" form={form} label="نام خانوادگی" />
        <CustomTextInput
          name="email"
          form={form}
          containerStyles="col-span-full"
          label="ایمیل"
        />
        <CustomSelect name="role" form={form} label="نقش" list={roles} />
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

export default UserCardForm;
