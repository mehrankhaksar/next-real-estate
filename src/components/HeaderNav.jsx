"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { motion } from "framer-motion";

import { headerLinks } from "@/constants/lists";

const underlineVariants = {
  animate: { y: 0, transition: { type: "tween" } },
};

const HeaderNav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-5">
      {headerLinks.map((item, index) => (
        <Link className="relative font-bold" href={item.href} key={index}>
          {item.href.pathname === pathname && (
            <motion.span
              className="w-full h-0.5 absolute bottom-0 bg-primary-foreground rounded-sm"
              variants={underlineVariants}
              animate="animate"
              layoutId="active-underline"
            />
          )}
          <span
            className={`relative ${
              item.href.pathname === pathname && "text-primary-foreground"
            }`}
          >
            {item.label}
          </span>
        </Link>
      ))}
    </nav>
  );
};

export default HeaderNav;
