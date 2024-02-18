"use client";

import { motion } from "framer-motion";
import {
  containerVariants,
  parentVariants,
  childVariants,
} from "@/utils/variants";

import AdvertisementsSidebar from "../modules/AdvertisementsSidebar";
import AdvertisementCard from "../modules/AdvertisementCard";

const AdvertisementsPage = ({ category, advertisements }) => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex gap-5">
          <AdvertisementsSidebar category={category} />
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
                {advertisements.map((item) => (
                  <motion.div variants={childVariants} key={item._id}>
                    <AdvertisementCard {...item} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <p className="not-found">آگهی ثبت نشده است</p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdvertisementsPage;
