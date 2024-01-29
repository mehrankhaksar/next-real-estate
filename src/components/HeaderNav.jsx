import { usePathname } from "next/navigation";
import Link from "next/link";

import { motion } from "framer-motion";

import { headerLinks } from "@/constants/lists";

const HeaderNav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-5">
      {headerLinks.map((item, index) => (
        <Link className="relative font-bold" href={item.href} key={index}>
          {item.href.pathname === pathname && (
            <motion.span
              className="w-full h-0.5 absolute bottom-0 bg-primary-foreground rounded-sm"
              layoutId="active-underline"
            />
          )}
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default HeaderNav;
