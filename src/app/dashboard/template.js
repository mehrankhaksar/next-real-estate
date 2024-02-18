"use client";

import { motion } from "framer-motion";
import { templateVariants } from "@/utils/variants";

export default function Template({ children }) {
  return (
    <main className="flex-1 bg-primary-foreground p-5 rounded-xl shadow shadow-primary">
      <motion.section variants={templateVariants}>{children}</motion.section>
    </main>
  );
}
