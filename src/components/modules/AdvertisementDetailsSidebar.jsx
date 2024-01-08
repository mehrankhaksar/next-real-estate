"use client";

import { motion } from "framer-motion";

import { Phone, Calendar } from "lucide-react";

import { e2p, sp } from "@/utils/numberConverter";

import { categoriesIcons } from "@/constants/lists";

import ShareButton from "./ShareButton";

const AdvertisementDetailsSidebar = ({
  category,
  realEstate,
  phoneNumber,
  price,
  constructionDate,
}) => {
  return (
    <aside className="w-fit h-fit space-y-2.5">
      <motion.div
        className="space-y-2.5 font-semibold bg-primary-foreground p-5 rounded-xl shadow-md shadow-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.25,
            duration: 0.5,
            ease: "linear",
          },
        }}
      >
        <div className="flex flex-col items-center gap-1.5">
          <div className="text-primary-foreground bg-primary p-5 rounded-full">
            {categoriesIcons[category].icon}
          </div>
          {realEstate}
        </div>
        <div className="flex justify-center items-center gap-1 text-sm">
          <Phone size={15} />
          {e2p(phoneNumber)}
        </div>
      </motion.div>
      <ShareButton />
      <motion.div
        className="space-y-2.5 text-sm font-semibold bg-primary-foreground p-5 rounded-xl shadow-md shadow-primary"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.25,
            duration: 0.5,
            ease: "linear",
          },
        }}
      >
        <div className="flex justify-center items-center gap-1">
          {categoriesIcons[category].icon}
          {categoriesIcons[category].label}
        </div>
        <div>{sp(price)} تومان</div>
        <div className="flex justify-center items-center gap-1">
          <Calendar size={17} />
          {new Date(constructionDate).toLocaleDateString("fa-IR")}
        </div>
      </motion.div>
    </aside>
  );
};

export default AdvertisementDetailsSidebar;
