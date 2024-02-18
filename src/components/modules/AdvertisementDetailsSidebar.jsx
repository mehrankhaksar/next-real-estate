"use client";

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
    villa: { icon: <Home size={25} />, label: "ویلا" },
    apartment: { icon: <Building size={25} />, label: "آپارتمان" },
    store: { icon: <Store size={25} />, label: "مغازه" },
    office: { icon: <Building2 size={25} />, label: "دفتر" },
  };

  return (
    <motion.aside
      className="h-fit grid max-sm:grid-cols-2 gap-2.5 bg-primary-foreground p-2.5 rounded-xl shadow shadow-primary"
      variants={parentVariants}
    >
      <motion.div
        className="flex flex-col items-center font-semibold text-muted-foreground bg-white p-5 rounded-xl shadow shadow-primary"
        variants={childVariants}
      >
        <div className="flex flex-col items-center gap-1 font-extrabold text-black">
          <Avatar className="w-16 h-16">
            <AvatarImage />
            <AvatarFallback className="text-primary-foreground bg-primary">
              <Building size={35} />
            </AvatarFallback>
          </Avatar>
          {e2p(realEstate)}
        </div>
        <div className="flex items-center gap-1 font-extrabold">
          <Phone className="text-primary" size={18} strokeWidth={2.5} />
          {e2p(phoneNumber)}
        </div>
      </motion.div>
      <motion.div
        className="flex flex-col items-center font-semibold text-muted-foreground bg-white p-5 rounded-xl shadow shadow-primary"
        variants={childVariants}
      >
        <div className="flex flex-col items-center gap-1 font-extrabold text-black">
          <span className="text-primary">{categoriesIcons[category].icon}</span>
          {categoriesIcons[category].label}
        </div>
        <div>
          <span className="font-extrabold text-black">{sp(price)}</span> تومان
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
