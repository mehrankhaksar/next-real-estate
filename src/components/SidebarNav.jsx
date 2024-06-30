"use client";

import React from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { motion } from "framer-motion";

const SidebarNav = ({ query = {}, list }) => {
  const pathname = usePathname();

  const href = { pathname, query };

  return (
    <nav className="flex items-center gap-1.5 sm:flex-col sm:items-stretch">
      {list.map((item, index) => (
        <Link
          className="relative font-semibold p-2.5 rounded-full sm:rounded-md overflow-hidden"
          href={item.href}
          key={index}
        >
          {JSON.stringify(item.href) === JSON.stringify(href) && (
            <motion.div
              className="absolute inset-0 bg-primary"
              layoutId="pill"
              transition={{ type: "spring" }}
            />
          )}
          <div
            className={`relative sm:flex sm:items-center sm:gap-1.5 ${
              JSON.stringify(item.href) === JSON.stringify(href) &&
              "text-primary-foreground dark:text-accent-foreground"
            }`}
          >
            {item.icon}
            <span className="flex-1 hidden sm:inline-block">{item.label}</span>
          </div>
        </Link>
      ))}
    </nav>
  );
};

export default SidebarNav;
