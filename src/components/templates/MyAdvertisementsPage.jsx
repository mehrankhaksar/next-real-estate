"use client";

import { motion } from "framer-motion";

import DashboardCard from "../modules/DashboardCard";

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
        <motion.div variants={listVariants} className="list-container">
          {userAdvertisements.map((item) => (
            <motion.div variants={itemVariants} key={item._id}>
              <DashboardCard advertisement={item} />
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
