"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import { Separator } from "../ui/separator";

import {
  RiListCheck,
  RiHome4Line,
  RiBuilding4Line,
  RiStore2Line,
  RiBuildingLine,
  RiFilter2Line,
} from "@remixicon/react";

const categoriesLink = [
  {
    href: {
      pathname: "/advertisements",
      query: { category: "all" },
    },
    icon: <RiListCheck />,
    label: "همه",
  },
  {
    href: {
      pathname: "/advertisements",
      query: { category: "villa" },
    },
    icon: <RiHome4Line />,
    label: "ویلا",
  },
  {
    href: {
      pathname: "/advertisements",
      query: { category: "apartment" },
    },
    icon: <RiBuilding4Line />,
    label: "آپارتمان",
  },
  {
    href: {
      pathname: "/advertisements",
      query: { category: "store" },
    },
    icon: <RiStore2Line />,
    label: "مغازه",
  },
  {
    href: {
      pathname: "/advertisements",
      query: { category: "office" },
    },
    icon: <RiBuildingLine />,
    label: "دفتر",
  },
];

const AdvertisementsSidebar = ({ category }) => {
  return (
    <aside className="max-w-fit w-full h-fit bg-white p-2.5 sm:p-5 rounded-lg shadow-md shadow-primary sm:space-y-2.5 dark:bg-accent">
      <h4 className="h4 hidden sm:flex sm:items-center">
        <RiFilter2Line className="text-primary" size={30} />
        دسته بندی
      </h4>
      <Separator className="hidden sm:block bg-black dark:bg-accent-foreground" />
      <nav className="flex justify-between items-center gap-1.5 sm:flex-col sm:items-stretch">
        {categoriesLink.map((item, index) => (
          <Link
            className="relative font-semibold p-2.5 rounded-full sm:rounded-md overflow-hidden"
            href={item.href}
            key={index}
          >
            {item.href.query.category === category && (
              <motion.div
                className="absolute inset-0 bg-primary"
                layoutId="pill"
                transition={{ type: "spring" }}
              />
            )}
            <div
              className={`relative sm:flex sm:items-center ${
                item.href.query.category === category &&
                "text-primary-foreground dark:text-accent-foreground"
              }`}
            >
              {item.icon}
              <span className="flex-1 hidden sm:inline-block text-center">
                {item.label}
              </span>
            </div>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default AdvertisementsSidebar;
