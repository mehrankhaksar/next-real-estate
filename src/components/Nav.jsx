"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const underlineVariants = {
  initial: { y: "-100%" },
  animate: { y: 0, transition: { type: "tween" } },
};

const links = [
  {
    pathname: "/",
    name: "صفحه اصلی",
  },
  {
    pathname: "/advertisements",
    name: "آگهی‌ها",
  },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
  const pathname = usePathname();

  return (
    <nav className={containerStyles}>
      {links.map((item, index) => (
        <Link className={linkStyles} href={item.pathname} key={index}>
          {item.pathname === pathname && (
            <motion.span
              className={underlineStyles}
              variants={underlineVariants}
              initial="initial"
              animate="animate"
              layoutId="underline"
            />
          )}
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
