"use client";

import { motion } from "framer-motion";

const templateVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.25,
      duration: 0.5,
      ease: "easeIn",
    },
  },
};

export default function Template({ children }) {
  return (
    <main className="flex-1 bg-primary-foreground p-2.5 sm:p-5 rounded-xl shadow shadow-primary">
      <motion.section variants={templateVariants}>{children}</motion.section>
    </main>
  );
}
