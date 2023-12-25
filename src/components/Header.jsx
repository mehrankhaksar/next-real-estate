"use client";

import React from "react";

import Link from "next/link";

import { useSession } from "next-auth/react";

import { Button } from "./ui/button";

import { LogIn, UserCircle } from "lucide-react";

import Nav from "./Nav";

const headerLinks = [
  {
    pathname: "/",
    label: "صفحه اصلی",
  },
  {
    pathname: "/advertisements",
    label: "آگهی‌ها",
  },
];

const Header = () => {
  const [scroll, setScroll] = React.useState(false);

  React.useEffect(() => {
    const isScrolled = window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setScroll(true) : setScroll(false);
    });

    return window.removeEventListener("scroll", isScrolled);
  }, []);

  const { data } = useSession();

  return (
    <header
      className={`flex items-center sticky top-0 text-primary-foreground bg-primary z-40 transition-all duration-300 ${
        scroll ? "h-[65px] shadow-lg" : "h-[85px]"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Nav
            links={headerLinks}
            containerStyles="flex items-center gap-5"
            linkStyles="relative font-medium"
            activeLinkStyles="w-full h-0.5 absolute ring-0 bottom-0 bg-primary-foreground rounded-sm"
            layoutId="active-underline"
          />
          <Link href="sign-in">
            {data ? (
              <Button
                className="h-fit py-1.5 px-1.5 rounded-full"
                variant="secondary"
                type="button"
              >
                <UserCircle size={30} />
              </Button>
            ) : (
              <Button
                className="gap-1.5 text-base font-bold"
                variant="secondary"
                type="button"
              >
                ورود
                <LogIn size={18} />
              </Button>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
