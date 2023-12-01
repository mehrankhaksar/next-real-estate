"use client";

import { signOut } from "next-auth/react";

import { Button } from "../ui/button";

import { LogOut } from "lucide-react";

const SignOutButton = () => {
  return (
    <Button
      className="inline-flex items-center gap-1 text-base font-bold"
      variant="destructive"
      type="button"
      onClick={signOut}
    >
      <LogOut size={18} />
      خروج
    </Button>
  );
};

export default SignOutButton;
