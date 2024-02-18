"use client";

import { motion } from "framer-motion";
import { parentVariants, childVariants } from "@/utils/variants";

import DashboardCard from "../modules/DashboardCard";

const MyAdvertisementsPage = ({ userAdvertisements }) => {
  return (
    <div className="flex flex-col items-start gap-8">
      <h3 className="h3 dashboard-section-title">آگهی‌های من</h3>
      {userAdvertisements.length ? (
        <motion.div className="list-container" variants={parentVariants}>
          {userAdvertisements.map((item) => (
            <motion.div variants={childVariants} key={item._id}>
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
