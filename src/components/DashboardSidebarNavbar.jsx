"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { motion } from "framer-motion";

import { dashboardLinks } from "@/constants/lists";

const DashboardSidebarNavbar = ({ role }) => {
  const pathname = usePathname();

  return (
    <nav className="space-y-1.5">
      {dashboardLinks.map((item, index) => (
        <Link
          className={`relative text-sm font-semibold py-2 sm:px-4 rounded-md overflow-hidden ${
            (item.label === "انتشار آگهی" || item.label === "کاربران") &&
            role !== "ADMIN" &&
            "hidden"
          }`}
          href={item.href}
          key={index}
        >
          {item.href.pathname === pathname && (
            <motion.div
              className="absolute inset-0 bg-primary"
              layoutId="active-pill"
            />
          )}
          <div
            className={`flex justify-center items-center gap-1.5 relative z-10 ${
              item.href.pathname === pathname && "text-primary-foreground"
            }`}
          >
            {item.icon}
            <span className="hidden sm:inline-block">{item.label}</span>
          </div>
        </Link>
      ))}
    </nav>
  );
};

export default DashboardSidebarNavbar;
