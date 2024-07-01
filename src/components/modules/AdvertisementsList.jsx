"use client";

import { usePathname } from "next/navigation";

import { motion } from "framer-motion";
import { parentVariants, childVariants } from "@/utils/variants";

import DashboardCard from "./DashboardCard";
import AdvertisementCard from "./AdvertisementCard";

const AdvertisementsList = ({ advertisements, role }) => {
  const pathname = usePathname();

  return (
    <>
      {advertisements.length ? (
        <motion.div
          className={`list-container ${
            !pathname.includes("/dashboard") && "!gap-5"
          }`}
          variants={parentVariants}
        >
          {advertisements.map((item) =>
            pathname.includes("/dashboard") ? (
              <motion.div variants={childVariants} key={item._id}>
                <DashboardCard role={role} advertisement={item} />
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
