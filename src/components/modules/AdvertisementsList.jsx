"use client";

import { motion } from "framer-motion";
import { parentVariants, childVariants } from "@/utils/variants";

import AdvertisementCard from "./AdvertisementCard";

const containerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
    },
  },
  exit: { opacity: 0 },
};

const AdvertisementsList = ({ category, advertisements }) => {
  return (
    <motion.div
      className="flex-1 bg-primary-foreground p-2.5 sm:p-5 rounded-xl shadow shadow-primary"
      variants={containerVariants}
      key={category}
    >
      {advertisements.length ? (
        <motion.div
          className="list-container !gap-y-5"
          variants={parentVariants}
        >
          {advertisements.map((item, index) => (
            <motion.div variants={childVariants} key={index}>
              <AdvertisementCard {...item} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <p className="not-found">آگهی ثبت نشده است</p>
      )}
    </motion.div>
  );
};

export default AdvertisementsList;
