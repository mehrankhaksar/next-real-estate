"use client";

import { motion } from "framer-motion";

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

const listVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.25,
      ease: "linear",
    },
  },
};

const itemVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      ease: "easeIn",
    },
  },
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
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          variants={listVariants}
        >
          {advertisements.map((item, index) => (
            <motion.div variants={itemVariants} key={index}>
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
