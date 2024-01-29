"use client";

import { signOut } from "next-auth/react";

import { Button } from "../ui/button";

import { LogOut } from "lucide-react";

const SignOutButton = () => {
  return (
    <Button
      className="flex items-center gap-1.5 text-base font-bold"
      variant="destructive"
      type="button"
      onClick={signOut}
    >
      <LogOut size={18} strokeWidth={3} />
      <span className="hidden sm:inline-block">خروج</span>
    </Button>
  );
};

export default SignOutButton;
