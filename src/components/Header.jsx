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
      className={`sticky top-0 text-primary-foreground bg-primary z-40 transition-all ${
        header ? "py-2.5 shadow-lg" : "py-5"
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
                    className="w-full h-[2.5px] absolute top-full left-0 bg-primary-foreground rounded-sm"
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
            <Link href="/sign-in">
              <Button
                className="flex items-center gap-0.5 font-bold"
                variant="secondary"
                type="button"
              >
                ورود
                <RiLoginBoxLine size={17.5} />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
