"use client";

import React from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { motion } from "framer-motion";

import { Button } from "./ui/button";

import { LogIn } from "lucide-react";

import { headerLinks, dashboardLinks } from "@/constants/lists";

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

  const pathname = usePathname();

  return (
    <header
      className={`flex items-center sticky top-0 text-primary-foreground bg-primary transition-all duration-300 z-40 ${
        scroll ? "py-2.5 shadow-lg" : "py-5"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <nav className="flex items-center gap-5">
            {headerLinks.map((item, index) => (
              <Link className="relative font-bold" href={item.href} key={index}>
                {item.href.pathname === pathname && (
                  <motion.span
                    className="w-full h-0.5 absolute bottom-0 bg-primary-foreground rounded-sm"
                    layoutId="active-underline"
                  />
                )}
                {item.label}
              </Link>
            ))}
          </nav>
          {user ? (
            <CustomDropdownMenu user={user} links={dashboardLinks[user.role]}>
              <Button
                className="w-fit p-0 rounded-full focus-visible:ring-offset-0"
                type="button"
              >
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
