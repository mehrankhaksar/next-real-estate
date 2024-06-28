"use client";

import { motion } from "framer-motion";
import { templateVariants } from "@/utils/variants";

export default function Template({ children }) {
  return (
    <main className="flex-1">
      <motion.section variants={templateVariants}>{children}</motion.section>
    </main>
  );
}
