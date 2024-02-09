"use client";

import React from "react";

import Link from "next/link";

import { Button } from "./ui/button";

import { LogIn } from "lucide-react";

import { dashboardLinks } from "@/constants/lists";

import HeaderNav from "./HeaderNav";
import CustomDropdownMenu from "./modules/CustomDropdownMenu";
import CustomAvatar from "./modules/CustomAvatar";
import CustomButton from "./modules/CustomButton";

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
      className={`flex items-center sticky top-0 text-primary-foreground bg-primary transition-all duration-300 z-40 ${
        scroll ? "py-2.5 shadow-lg" : "py-5"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <HeaderNav />
          {user ? (
            <CustomDropdownMenu user={user} links={dashboardLinks}>
              <Button className="w-fit p-0 rounded-full focus-visible:ring-offset-0">
                <CustomAvatar
                  badgeStyles="hidden"
                  user={user}
                  avatarStyles="text-muted-foreground"
                />
              </Button>
            </CustomDropdownMenu>
          ) : (
            <Link href="/sign-in">
              <CustomButton
                containerStyles="inline-flex items-center gap-1.5"
                variant="secondary"
              >
                ورود
                <LogIn size={17} />
              </CustomButton>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
