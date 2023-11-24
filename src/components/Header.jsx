"use client";

import React from "react";

import Link from "next/link";

import { Button } from "./ui/button";

import { LogIn } from "lucide-react";

import Nav from "./Nav";

const Header = () => {
  const [scroll, setScroll] = React.useState(false);

  React.useEffect(() => {
    const isScrolled = window.addEventListener("scroll", () => {
      window.scrollY > 25 ? setScroll(true) : setScroll(false);
    });

    return window.removeEventListener("scroll", isScrolled);
  }, []);

  return (
    <header
      className={`sticky top-0 text-primary-foreground bg-primary z-40 transition-all duration-300 ${
        scroll ? "py-3 shadow-lg" : "py-6"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Nav
            containerStyles="flex items-center gap-5"
            linkStyles="relative font-medium"
            underlineStyles="w-full h-0.5 absolute ring-0 bottom-0 bg-primary-foreground rounded-sm"
          />
          <Link href="sign-in">
            <Button className="gap-1.5 text-base font-bold" variant="secondary">
              ورود
              <LogIn size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
