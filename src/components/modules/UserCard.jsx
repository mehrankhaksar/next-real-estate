"use client";

import React from "react";

import { usePathname } from "next/navigation";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "../ui/card";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

import toast from "react-hot-toast";

import { Trash } from "lucide-react";

import { SpinnerLoader } from "./Loaders";
import CustomAvatar from "./CustomAvatar";
import UserDialog from "./UserDialog";

const UserCard = ({ user }) => {
  const [loading, setLoading] = React.useState(false);

  const pathname = usePathname();

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
      {pathname === "/dashboard/admin/users" ? (
        <Button
          className="w-8 h-8 absolute -top-2.5 -left-2.5 p-1.5 rounded-full"
          variant="destructive"
          type="button"
          onClick={handleRemove}
        >
          {loading ? (
            <SpinnerLoader color="border-t-destructive" />
          ) : (
            <Trash size={15} />
          )}
        </Button>
      ) : null}
      <CardHeader>
        <div className="flex flex-col items-center gap-1.5">
          <CustomAvatar
            badgeStyles="top-2.5 left-2.5 text-sm"
            user={user}
            avatarStyles="w-44 h-44 text-4xl"
          />
          <CardTitle className="flex items-center gap-1.5 font-extrabold text-primary">
            {user.firstName} {user.lastName}
          </CardTitle>
          <CardDescription className="font-semibold">
            {user.email}
          </CardDescription>
        </div>
      </CardHeader>
      <Separator className="mb-5" />
      <CardFooter>
        <UserDialog user={user} />
      </CardFooter>
    </Card>
  );
};

export default UserCard;
