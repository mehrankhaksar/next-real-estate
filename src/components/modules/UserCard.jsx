"use client";

import React from "react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import { Button } from "../ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";

import toast from "react-hot-toast";

import { Trash, UserCircle } from "lucide-react";

import { roles } from "@/constants/lists";

import { SpinnerLoader } from "./Loaders";
import UserCardDialog from "./UserCardDialog";

const UserCard = ({ user }) => {
  const [loading, setLoading] = React.useState(false);

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

  const findName = (list, value) => {
    return list.find((item) => item.value === value).name;
  };

  return (
    <Card className="w-full relative">
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
      <CardHeader className="pb-2.5">
        <div className="flex flex-col items-center gap-1.5">
          <div className="relative">
            <Badge
              className={`absolute -top-0.5 -left-3 z-10 px-1.5 rounded-md ${
                user.role === "ADMIN" && "bg-yellow-400 hover:bg-yellow-500"
              }`}
            >
              {findName(roles, user.role)}
            </Badge>
            <Avatar className="w-20 h-20">
              <AvatarImage />
              <AvatarFallback>
                <UserCircle size={60} />
              </AvatarFallback>
            </Avatar>
          </div>
          <CardTitle className="flex items-center gap-1.5 font-extrabold text-primary">
            {user.firstName} {user.lastName}
          </CardTitle>
          <CardDescription className="font-semibold">
            {user.email}
          </CardDescription>
        </div>
      </CardHeader>
      <Separator className="mb-5" />
      <CardContent>
        <UserCardDialog user={user} />
      </CardContent>
    </Card>
  );
};

export default UserCard;
