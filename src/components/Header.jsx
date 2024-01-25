"use client";

import React from "react";

import Link from "next/link";

import { Button } from "./ui/button";

import { LogIn } from "lucide-react";

import HeaderNav from "./HeaderNav";
import CustomAvatar from "./modules/CustomAvatar";
import CustomDropdownMenu from "./modules/CustomDropdownMenu";
import { dashboardLinks } from "@/constants/lists";

const Header = ({ user }) => {
  const [scroll, setScroll] = React.useState(false);

  React.useEffect(() => {
    const isScrolled = window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setScroll(true) : setScroll(false);
    });

    return window.removeEventListener("scroll", isScrolled);
  }, []);

  return (
    <header
      className={`flex items-center sticky top-0 text-primary-foreground bg-primary z-40 transition-all duration-300 ${
        scroll ? "py-2.5 shadow-lg" : "py-5"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <HeaderNav />
          {user ? (
            <CustomDropdownMenu user={user} links={dashboardLinks}>
              <CustomAvatar
                badgeStyles="hidden"
                user={user}
                avatarStyles="text-muted-foreground"
              />
            </CustomDropdownMenu>
          ) : (
            <Link href="/sign-in">
              <Button
                className="flex items-center gap-1 text-base font-bold text-secondary-foreground"
                variant="secondary"
                type="button"
              >
                ورود
                <LogIn size={18} />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
