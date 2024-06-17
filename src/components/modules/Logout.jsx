"use client";

import { signOut } from "next-auth/react";

import { Button } from "../ui/button";

import { RiLogoutBoxLine } from "@remixicon/react";

const Logout = () => {
  return (
    <Button
      className="flex items-center gap-0.5"
      variant="destructive"
      type="button"
      onClick={signOut}
    >
      <RiLogoutBoxLine size={17.5} />
      <span className="hidden sm:inline-block">خروج</span>
    </Button>
  );
};

export default Logout;
