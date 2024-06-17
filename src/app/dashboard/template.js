"use client";

import { motion } from "framer-motion";
import { templateVariants } from "@/utils/variants";

export default function Template({ children }) {
  return (
    <main className="flex-1 bg-background p-5 rounded-md shadow-md shadow-primary dark:bg-accent">
      <motion.section variants={templateVariants}>{children}</motion.section>
    </main>
  );
}
