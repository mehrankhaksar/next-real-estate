"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { parentVariants, childVariants } from "@/utils/variants";

import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";

import { RiCalendarLine, RiPhoneLine } from "@remixicon/react";

import { e2p, sp } from "@/utils/helperFunctions";

import { categoriesIcons } from "@/constants/lists";
import ShareButton from "./ShareButton";

const AdvertisementDetailsSidebar = ({
  realEstate,
  phoneNumber,
  category,
  price,
  constructionDate,
}) => {
  return (
    <motion.aside
      className="h-fit grid grid-cols-2 sm:grid-cols-1 gap-2.5"
      variants={parentVariants}
    >
      <motion.div
        className="flex flex-col justify-center items-center gap-0.5 p-5 rounded-xl shadow-md shadow-primary dark:bg-accent"
        variants={childVariants}
      >
        <Avatar className="w-24 h-24 text-2xl">
          <AvatarImage className="object-cover" />
          <AvatarFallback className="relative">
            <Image
              className="object-cover"
              src="/assets/images/real-estate.png"
              fill
            />
          </AvatarFallback>
        </Avatar>
        <h4 className="h4">{realEstate}</h4>
        <div className="flex items-center gap-0.5 text-sm font-semibold">
          <RiPhoneLine className="text-primary" size={20} />
          {e2p(phoneNumber)}
        </div>
      </motion.div>
      <motion.div
        className="flex flex-col justify-center items-center gap-1.5 font-semibold p-5 rounded-xl shadow shadow-primary dark:bg-accent"
        variants={childVariants}
      >
        <div className="flex items-center gap-1.5">
          <span className="bg-primary/25 p-1.5 rounded-md">
            {categoriesIcons[category].icon}
          </span>
          {categoriesIcons[category].label}
        </div>
        <div className="flex items-center gap-0.5">
          <span className="font-bold">{sp(price)}</span>تومان
        </div>
        <div className="flex items-center gap-0.5">
          <RiCalendarLine className="text-primary" size={20} />
          {new Date(constructionDate).toLocaleDateString("fa-IR")}
        </div>
      </motion.div>
      <motion.div className="col-span-full" variants={childVariants}>
        <ShareButton />
      </motion.div>
    </motion.aside>
  );
};

export default AdvertisementDetailsSidebar;
