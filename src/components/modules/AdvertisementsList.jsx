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
      ease: "easeIn",
    },
  },
  exit: { opacity: 0 },
};

const layoutVariants = {
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

const cardVariants = {
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
      className="flex-1 bg-primary-foreground p-5 rounded-xl shadow shadow-primary"
      variants={containerVariants}
      key={category}
    >
      {advertisements.length ? (
        <motion.div
          className="grid grid-cols-4 gap-5"
          variants={layoutVariants}
        >
          {advertisements.map((item, index) => (
            <motion.div variants={cardVariants} key={index}>
              <AdvertisementCard {...item} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <p className="inline-block font-bold text-destructive-foreground bg-destructive py-1.5 px-3 rounded-md">
          آگهی یافت نشد.
        </p>
      )}
    </motion.div>
  );
};

export default AdvertisementsList;
