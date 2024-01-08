"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import { Filter } from "lucide-react";

import { categoriesLink } from "@/constants/lists";
import { Separator } from "../ui/separator";

const AdvertisementsSidebar = ({ category }) => {
  return (
    <aside className="h-fit space-y-5 bg-primary-foreground p-5 rounded-xl shadow-md shadow-primary">
      <h3 className="h3 flex items-center gap-1.5">
        <Filter className="text-primary" />
        دسته بندی
      </h3>
      <Separator className="bg-secondary-foreground my-1.5" />
      <nav className="space-y-2.5">
        {categoriesLink.map((item, index) => (
          <Link
            className="relative text-sm font-semibold text-center py-1.5 rounded-md overflow-hidden"
            href={item.href}
            key={index}
          >
            {Object.values(item.href.query).toString() === category && (
              <motion.span
                className="absolute inset-0 bg-primary"
                layoutId="active-pill"
              />
            )}
            <span
              className={`relative ${
                Object.values(item.href.query).toString() === category &&
                "text-primary-foreground"
              }`}
            >
              {item.label}
            </span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default AdvertisementsSidebar;
