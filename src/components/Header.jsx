"use client";

import React from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { motion } from "framer-motion";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

import { RiLoginBoxLine } from "@remixicon/react";

import { headerLinks, dashboardLinks } from "@/constants/lists";

import CustomAvatar from "./modules/CustomAvatar";
import Logout from "./modules/Logout";
import ThemeToggler from "./modules/ThemeToggler";

const Header = ({ user }) => {
  const [header, setHeader] = React.useState(false);

  React.useEffect(() => {
    const scrollY = window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });

    return () => window.removeEventListener("scroll", scrollY);
  });

  const pathname = usePathname();

  return (
    <header
      className={`sticky top-0 text-primary-foreground bg-primary z-40 transition-all dark:text-accent-foreground dark:bg-accent ${
        header ? "py-4 shadow-lg" : "py-6"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <nav className="flex items-center gap-5">
            {headerLinks.map((item, index) => (
              <Link
                className="relative font-semibold"
                href={item.href}
                key={index}
              >
                {pathname === item.href.pathname && (
                  <motion.span
                    className="w-full h-[1.5px] absolute top-full left-0 bg-secondary rounded-sm dark:bg-accent-foreground"
                    layoutId="underline"
                    initial={{ y: "-100%" }}
                    animate={{ y: 0 }}
                    transition={{ type: "tween" }}
                  />
                )}
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2.5">
            {user ? (
              <DropdownMenu dir="rtl">
                <DropdownMenuTrigger asChild>
                  <Button
                    className="rounded-full focus-visible:ring-offset-0"
                    size="icon"
                    type="button"
                  >
                    <CustomAvatar
                      badgeStyles="hidden"
                      user={user}
                      avatarStyles="text-muted-foreground"
                    />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel className="font-extrabold text-center">{`${user.firstName} ${user.lastName}`}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    {dashboardLinks[user.role].map((item, index) => (
                      <Link href={item.href} key={index}>
                        <DropdownMenuItem className="font-bold cursor-pointer">
                          {item.label}
                        </DropdownMenuItem>
                      </Link>
                    ))}
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <Logout />
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button
                asChild
                className="border-2 border-solid border-transparent dark:border-secondary-foreground"
                variant="secondary"
                size="icon"
                type="button"
              >
                <Link href="/sign-in">
                  <RiLoginBoxLine />
                </Link>
              </Button>
            )}
            <ThemeToggler />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
