"use client";

import { signOut } from "next-auth/react";

import { LogOut } from "lucide-react";

import CustomButton from "./CustomButton";

const SignOutButton = () => {
  return (
    <CustomButton
      containerStyles="flex items-center gap-1.5"
      variant="destructive"
      handleClick={signOut}
    >
      <LogOut size={18} strokeWidth={3} />
      <span className="hidden sm:inline-block">خروج</span>
    </CustomButton>
  );
};

export default SignOutButton;
