"use client";

import { motion } from "framer-motion";

import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";

import { Building, Phone, Calendar } from "lucide-react";

import { e2p, sp } from "@/utils/helperFunctions";

import { categoriesIcons } from "@/constants/lists";

import ShareButton from "./ShareButton";

const parentVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
      ease: "linear",
    },
  },
};

const childVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      ease: "easeIn",
    },
  },
};

const AdvertisementDetailsSidebar = ({
  category,
  realEstate,
  phoneNumber,
  price,
  constructionDate,
}) => {
  const childClassName =
    "flex flex-col items-center font-semibold text-muted-foreground bg-white p-5 rounded-xl shadow shadow-primary";

  return (
    <motion.aside
      className="h-fit grid max-sm:grid-cols-2 gap-2.5 bg-primary-foreground p-2.5 rounded-xl shadow shadow-primary"
      variants={parentVariants}
    >
      <motion.div className={childClassName} variants={childVariants}>
        <div className="flex flex-col items-center gap-1 font-extrabold text-black">
          <Avatar className="w-16 h-16 flex justify-center items-center">
            <AvatarImage />
            <AvatarFallback className="text-primary-foreground bg-primary">
              <Building size={35} />
            </AvatarFallback>
          </Avatar>
          {e2p(realEstate)}
        </div>
        <div className="flex justify-center items-center gap-1 font-extrabold">
          <Phone className="text-primary" size={18} strokeWidth={2.5} />
          {e2p(phoneNumber)}
        </div>
      </motion.div>
      <motion.div className={childClassName} variants={childVariants}>
        <div className="flex flex-col justify-center items-center gap-1 text-black font-extrabold">
          <span className="text-primary">{categoriesIcons[category].icon}</span>
          {categoriesIcons[category].label}
        </div>
        <div>
          <span className="font-extrabold text-black">{sp(price)}</span> تومان
        </div>
        <div className="flex justify-center items-center gap-1">
          <Calendar className="text-primary" size={18} strokeWidth={2.5} />
          {new Date(constructionDate).toLocaleDateString("fa-IR")}
        </div>
      </motion.div>
      <motion.div variants={childVariants} className="col-span-full">
        <ShareButton />
      </motion.div>
    </motion.aside>
  );
};

export default AdvertisementDetailsSidebar;
