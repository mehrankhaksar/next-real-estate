"use client";

import { motion } from "framer-motion";

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

export default function Template({ children }) {
  return (
    <main className="flex-1 bg-primary-foreground p-5 rounded-lg shadow-md shadow-primary">
      <motion.section variants={templateVariants}>{children}</motion.section>
    </main>
  );
}
