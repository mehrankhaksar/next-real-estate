"use client";

import { motion } from "framer-motion";

import useProgressScroll from "@/hooks/useProgressScroll";

const templateVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      type: "linear",
      delay: 0.2,
      duration: 0.4,
    },
  },
};

export default function template({ children }) {
  const completion = useProgressScroll();

  return (
    <>
      <motion.main
        variants={templateVariants}
        initial="initial"
        animate="animate"
      >
        {children}
      </motion.main>
      <span
        className="w-1 fixed top-0 right-0 bottom-0 bg-blue-500 transition-all duration-700 z-50"
        style={{ transform: `translateY(${completion - 100}%)` }}
      />
      <div className="h-[1000px]"></div>
    </>
  );
}
