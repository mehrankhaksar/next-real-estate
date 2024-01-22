"use client";

import { motion } from "framer-motion";

import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";

import { Building, Phone, Calendar } from "lucide-react";

import { e2p, sp } from "@/utils/helperFunctions";

import { categoriesIcons } from "@/constants/lists";

import ShareButton from "./ShareButton";

const containerVariants = {
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
  return (
    <motion.aside
      className="h-fit space-y-2.5 bg-primary-foreground p-2.5 shadow shadow-primary rounded-xl"
      variants={containerVariants}
    >
      <motion.div
        className="space-y-2.5 font-semibold text-muted-foreground bg-primary-foreground p-5 rounded-xl shadow shadow-primary"
        variants={childVariants}
      >
        <div className="flex flex-col items-center gap-1 font-extrabold text-black">
          <Avatar className="w-16 h-16 flex justify-center items-center">
            <AvatarImage />
            <AvatarFallback className="text-primary-foreground bg-primary">
              <Building size={35} />
            </AvatarFallback>
          </Avatar>
          {e2p(realEstate)}
        </div>
        <div className="flex justify-center items-center gap-1 text-sm">
          <Phone className="text-primary" size={17} />
          {e2p(phoneNumber)}
        </div>
      </motion.div>
      <motion.div variants={childVariants}>
        <ShareButton />
      </motion.div>
      <motion.div
        className="space-y-2.5 text-sm font-semibold text-muted-foreground bg-primary-foreground p-5 rounded-xl shadow shadow-primary"
        variants={childVariants}
      >
        <div className="flex flex-col justify-center items-center gap-1 text-black font-extrabold">
          <span className="text-primary">{categoriesIcons[category].icon}</span>
          {categoriesIcons[category].label}
        </div>
        <div>
          <span className="font-extrabold text-black">{sp(price)}</span> تومان
        </div>
        <div className="flex justify-center items-center gap-1">
          <Calendar className="text-primary" size={17} />
          {new Date(constructionDate).toLocaleDateString("fa-IR")}
        </div>
      </motion.div>
    </motion.aside>
  );
};

export default AdvertisementDetailsSidebar;
