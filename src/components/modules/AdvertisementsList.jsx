"use client";

import { usePathname } from "next/navigation";

import { motion } from "framer-motion";
import { parentVariants, childVariants } from "@/utils/variants";

import DashboardCard from "./DashboardCard";
import AdvertisementCard from "./AdvertisementCard";

const AdvertisementsList = ({ advertisementsList }) => {
  const pathname = usePathname();

  return (
    <>
      {advertisementsList.length ? (
        <motion.div className="list-container" variants={parentVariants}>
          {advertisementsList.map((item) =>
            pathname.includes("/dashboard") ? (
              <motion.div variants={childVariants} key={item._id}>
                <DashboardCard advertisement={item} />
              </motion.div>
            ) : (
              <motion.div variants={childVariants} key={item._id}>
                <AdvertisementCard {...item} />
              </motion.div>
            )
          )}
        </motion.div>
      ) : (
        <p className="not-found">آگهی ثبت نشده است</p>
      )}
    </>
  );
};

export default AdvertisementsList;
