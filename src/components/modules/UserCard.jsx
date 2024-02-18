"use client";

import React from "react";

import { useRouter } from "next/navigation";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import { Form } from "../ui/form";

import { useForm } from "react-hook-form";

import toast from "react-hot-toast";

import { Trash } from "lucide-react";

import { roles } from "@/constants/lists";

import CustomAvatar from "./CustomAvatar";
import CustomSelect from "./CustomSelect";
import CustomButton from "./CustomButton";
import { SpinnerLoader } from "./CustomLoaders";

const UserCard = ({ user }) => {
  const [loading, setLoading] = React.useState(false);

  const router = useRouter();

  const form = useForm({
    defaultValues: {
      role: user.role,
    },
  });

  React.useEffect(() => {
    const fetchAPI = async () => {
      const res = await fetch(
        `/api/dashboard/admin/change-user-role/${user._id}`,
        {
          method: "PATCH",
          body: JSON.stringify(form.getValues("role")),
          headers: { "Content-Type": "application/json" },
        }
      );

      const data = await res.json();
      if (data.message) {
        toast.success(data.message);
        router.refresh();
      } else {
        toast.error(data.error);
      }
    };

    if (form.formState.isDirty) fetchAPI();
  }, [form.watch("role")]);

  const handleRemove = async () => {
    setLoading(true);

    const res = await fetch(`/api/dashboard/admin/remove-user/${user._id}`, {
      method: "DELETE",
    });
    const data = await res.json();

    setLoading(false);

    if (data.message) {
      toast.success(data.message);
      router.refresh();
    } else {
      toast.error(data.error);
    }
  };

  return (
    <Card className="relative">
      <CustomButton
        containerStyles="w-8 h-8 absolute -top-2.5 -left-2.5 p-1.5 rounded-full"
        variant="destructive"
        handleClick={handleRemove}
      >
        {loading ? (
          <SpinnerLoader color="border-t-destructive" />
        ) : (
          <Trash size={16} strokeWidth={2.5} />
        )}
      </CustomButton>
      <CardHeader>
        <div className="flex flex-col items-center gap-1.5">
          <CustomAvatar
            badgeStyles="-top-1.5 -left-1.5 text-sm"
            user={user}
            avatarStyles="w-24 h-24 text-2xl"
          />
          <CardTitle className="flex items-center gap-1.5 font-extrabold text-primary">
            {user.firstName} {user.lastName}
          </CardTitle>
          <CardDescription className="font-semibold">
            {user.email}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <CustomSelect
            name="role"
            form={form}
            containerStyles="space-y-0"
            list={roles}
          />
        </Form>
      </CardContent>
    </Card>
  );
};

export default UserCard;
