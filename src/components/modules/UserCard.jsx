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
import { Button } from "../ui/button";
import { Form } from "../ui/form";

import { useForm } from "react-hook-form";

import toast from "react-hot-toast";

import { RiDeleteBinLine } from "@remixicon/react";

import { roles } from "@/constants/lists";

import { SpinnerLoader } from "./CustomLoaders";
import CustomAvatar from "./CustomAvatar";
import CustomSelect from "./CustomSelect";

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
        toast.success(data.message, {
          style: {
            color: "hsl(var(--foreground))",
            backgroundColor: "hsl(var(--background))",
          },
          duration: 1500,
        });

        setTimeout(() => {
          router.refresh();
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
      toast.success(data.message, {
        style: {
          color: "hsl(var(--foreground))",
          backgroundColor: "hsl(var(--background))",
        },
        duration: 1500,
      });

      setTimeout(() => {
        router.refresh();
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
  };

  return (
    <Card className="relative shadow-md shadow-primary dark:bg-accent">
      <Button
        className="absolute -top-2.5 -left-2.5 rounded-full dark:bg-red-500 dark:hover:bg-red-600"
        variant="destructive"
        size="icon"
        type="button"
        onClick={handleRemove}
      >
        {loading ? (
          <SpinnerLoader color="border-t-destructive dark:border-t-red-500" />
        ) : (
          <RiDeleteBinLine size={20} />
        )}
      </Button>
      <CardHeader>
        <div className="flex flex-col items-center gap-2.5">
          <CustomAvatar
            badgeStyles="left-0"
            user={user}
            avatarStyles="w-24 h-24 text-xl"
          />
          <CardTitle className="flex items-center gap-1.5 font-bold text-primary dark:text-accent-foreground">
            {user.firstName} {user.lastName}
          </CardTitle>
          <CardDescription className="font-semibold">
            {user.email}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <CustomSelect name="role" form={form} list={roles} />
        </Form>
      </CardContent>
    </Card>
  );
};

export default UserCard;
