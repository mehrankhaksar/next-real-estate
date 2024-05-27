"use client";

import { motion } from "framer-motion";
import { templateVariants } from "@/utils/variants";

import { Toaster } from "react-hot-toast";

import useScrollProgress from "@/hooks/useScrollProgress";

export default function Template({ children }) {
  const scrollProgress = useScrollProgress();

  return (
    <>
      <motion.main
        className="flex-1"
        variants={templateVariants}
        initial="hidden"
        animate="enter"
      >
        {children}
      </motion.main>
      <span
        className="w-1 fixed top-0 right-0 bottom-0 bg-primary z-50 transition-all duration-700 ease-in-out"
        style={{ transform: `translateY(${scrollProgress - 100}%)` }}
      />
      <Toaster />
    </>
  );
}
