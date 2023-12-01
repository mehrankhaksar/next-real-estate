"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { motion } from "framer-motion";

const underlineVariants = {
  initial: { y: "-100%" },
  animate: { y: 0, transition: { type: "tween" } },
};

const Nav = ({
  links,
  containerStyles,
  linkStyles,
  activeLinkStyles,
  layoutId,
}) => {
  const pathname = usePathname();

  return (
    <nav className={containerStyles}>
      {links.map((item, index) => (
        <Link className={linkStyles} href={item.pathname} key={index}>
          {item.pathname === pathname && (
            <motion.span
              className={activeLinkStyles}
              variants={layoutId === "active-underline" && underlineVariants}
              initial="initial"
              animate="animate"
              layoutId={layoutId}
            />
          )}
          <span
            className={`relative ${
              item.pathname === pathname && "text-primary-foreground"
            }`}
          >
            {item.label}
          </span>
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
