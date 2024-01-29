"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import { Separator } from "../ui/separator";

import { Filter } from "lucide-react";

import { categoriesLink } from "@/constants/lists";

const AdvertisementsSidebar = ({ category }) => {
  return (
    <aside className="w-fit h-fit space-y-2.5 bg-primary-foreground p-2.5 sm:p-5 rounded-xl shadow shadow-primary">
      <h3 className="h3 flex max-sm:justify-center sm:items-center sm:gap-1.5">
        <Filter className="text-primary" size={30} />
        <span className="hidden sm:inline-block">دسته بندی</span>
      </h3>
      <Separator className="bg-secondary-foreground" />
      <nav className="space-y-1.5">
        {categoriesLink.map((item, index) => (
          <Link
            className="relative text-sm font-semibold p-2 sm:px-4 rounded-md overflow-hidden"
            href={item.href}
            key={index}
          >
            {Object.values(item.href.query).toString() === category && (
              <motion.div
                className="absolute inset-0 bg-primary"
                layoutId="active-pill"
              />
            )}
            <div
              className={`flex justify-center items-center gap-1.5 relative z-10 ${
                Object.values(item.href.query).toString() === category &&
                "text-primary-foreground"
              }`}
            >
              {item.icon}
              <span className="hidden sm:inline-block">{item.label}</span>
            </div>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default AdvertisementsSidebar;
