"use client";

import React from "react";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

import UserDialogForm from "./UserDialogForm";

const UserDialog = ({ user }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-fit dark:text-accent-foreground" type="button">
          ویرایش اطلاعات
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            ویرایش اطلاعات
          </DialogTitle>
          <DialogDescription className="description">
            در اینجا تغییرات دلخواه را اعمال و در نهایت بر روی دخیره کلیک کنید.
          </DialogDescription>
        </DialogHeader>
        <Separator />
        <UserDialogForm user={user} setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
};

export default UserDialog;
