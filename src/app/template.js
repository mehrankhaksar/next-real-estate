"use client";

import { motion } from "framer-motion";
import { templateVariants } from "@/utils/variants";

import { Toaster } from "react-hot-toast";

import useProgressScroll from "@/hooks/useProgressScroll";

export default function Template({ children }) {
  const completion = useProgressScroll();

  return (
    <motion.main
      className="flex-1 py-5"
      variants={templateVariants}
      initial="initial"
      animate="animate"
    >
      {children}
      <span
        className="w-1 fixed top-0 right-0 bottom-0 bg-blue-500 transition-all duration-700 z-50"
        style={{ transform: `translateY(${completion - 100}%)` }}
      />
      <Toaster />
    </motion.main>
  );
}
