"use client";

import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="inline-flex items-center gap-1.5">
      <motion.span
        className="w-3 h-3 inline-block bg-primary-foreground rounded-full"
        animate={{
          scale: [0.85, 1.15],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 0.5,
          ease: "easeInOut",
        }}
      />
      <motion.span
        className="w-3 h-3 inline-block bg-primary-foreground rounded-full"
        animate={{
          scale: [1.15, 0.55],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 0.5,
          ease: "easeInOut",
        }}
      />
      <motion.span
        className="w-3 h-3 inline-block bg-primary-foreground rounded-full"
        animate={{
          scale: [0.85, 1.15],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 0.5,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default Loader;
