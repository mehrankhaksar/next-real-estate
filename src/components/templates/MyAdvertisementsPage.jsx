"use client";

import { motion } from "framer-motion";

import DashboardAdvertisementCard from "../modules/DashboardAdvertisementCard";

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

const MyAdvertisementsPage = ({ userAdvertisements }) => {
  return (
    <div>
      {userAdvertisements.length ? (
        <motion.div
          variants={listVariants}
          className="grid grid-cols-3 gap-y-10 gap-x-5"
        >
          {userAdvertisements.map((item) => (
            <motion.div variants={itemVariants} key={item._id}>
              <DashboardAdvertisementCard advertisement={item} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <p className="not-found">آگهی ثبت نشده است</p>
      )}
    </div>
  );
};

export default MyAdvertisementsPage;
