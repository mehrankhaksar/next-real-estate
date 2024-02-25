"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { parentVariants, childVariants } from "@/utils/variants";

import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";

import {
  Home,
  Building,
  Store,
  Building2,
  Phone,
  Calendar,
} from "lucide-react";

import { e2p, sp } from "@/utils/helperFunctions";

import ShareButton from "./ShareButton";

const AdvertisementDetailsSidebar = ({
  realEstate,
  phoneNumber,
  category,
  price,
  constructionDate,
}) => {
  const categoriesIcons = {
    villa: { icon: <Home size={35} />, label: "ویلا" },
    apartment: { icon: <Building size={35} />, label: "آپارتمان" },
    store: { icon: <Store size={35} />, label: "مغازه" },
    office: { icon: <Building2 size={35} />, label: "دفتر" },
  };

  return (
    <motion.aside
      className="h-fit grid max-sm:grid-cols-2 gap-2.5 bg-primary-foreground p-2.5 rounded-xl shadow shadow-primary"
      variants={parentVariants}
    >
      <motion.div
        className="flex flex-col justify-center items-center text-lg bg-white p-5 rounded-xl shadow shadow-primary"
        variants={childVariants}
      >
        <div className="flex flex-col items-center gap-1 font-extrabold">
          <Avatar className="w-20 h-20">
            <AvatarImage />
            <AvatarFallback className="relative">
              <Image
                className="object-contain"
                src="/assets/images/real-estate.png"
                fill
                priority
                alt="مشاور املاک"
              />
            </AvatarFallback>
          </Avatar>
          {e2p(realEstate)}
        </div>
        <div className="flex items-center gap-1 text-base font-semibold">
          <Phone className="text-primary" size={18} strokeWidth={2.5} />
          {e2p(phoneNumber)}
        </div>
      </motion.div>
      <motion.div
        className="flex flex-col justify-center items-center font-semibold bg-white p-5 rounded-xl shadow shadow-primary"
        variants={childVariants}
      >
        <div className="flex flex-col items-center gap-1.5 font-extrabold">
          <span className="text-primary">{categoriesIcons[category].icon}</span>
          {categoriesIcons[category].label}
        </div>
        <div className="flex items-center gap-1">
          <span>{sp(price)}</span>تومان
        </div>
        <div className="flex items-center gap-1">
          <Calendar className="text-primary" size={18} strokeWidth={2.5} />
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
