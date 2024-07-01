"use client";

import { signOut } from "next-auth/react";

import { Button } from "../ui/button";

import { RiLogoutBoxLine } from "@remixicon/react";

const Logout = () => {
  return (
    <Button
      className="flex items-center gap-0.5 dark:bg-red-500 dark:hover:bg-red-600"
      variant="destructive"
      type="button"
      onClick={signOut}
    >
      <RiLogoutBoxLine size={20} />
      <span className="hidden sm:inline-block">خروج</span>
    </Button>
  );
};

export default Logout;
