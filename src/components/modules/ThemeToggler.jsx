"use client";

import { useTheme } from "next-themes";

import { Button } from "../ui/button";

import { RiMoonLine, RiSunLine } from "@remixicon/react";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      className="rounded-full dark:bg-background dark:hover:bg-background/70"
      variant="secondary"
      size="icon"
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <RiMoonLine className="rotate-0 scale-100 transition-all duration-300 ease-in-out dark:-rotate-90 dark:scale-0" />
      <RiSunLine className="absolute rotate-90 scale-0 transition-all duration-300 ease-in-out dark:rotate-0 dark:scale-100" />
    </Button>
  );
};

export default ThemeToggler;
