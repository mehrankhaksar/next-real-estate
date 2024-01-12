"use client";

import React from "react";

import Link from "next/link";

import { useSession } from "next-auth/react";

import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";

import { LogIn, UserCircle } from "lucide-react";

import HeaderNav from "./HeaderNav";

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
        scroll ? "py-2.5 shadow-lg" : "py-5"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <HeaderNav />
          <Link href="sign-in">
            {data ? (
              <Avatar className="flex justify-center items-center text-secondary-foreground">
                <AvatarImage />
                <AvatarFallback>
                  <UserCircle size={30} />
                </AvatarFallback>
              </Avatar>
            ) : (
              <Button
                className="flex items-center gap-1 text-base font-bold text-secondary-foreground"
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
