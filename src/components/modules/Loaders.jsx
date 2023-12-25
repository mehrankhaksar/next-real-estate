"use client";

import { motion } from "framer-motion";

const DotsLoader = () => {
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

const SpinnerLoader = () => {
  return (
    <motion.div
      animate={{
        rotate: [0, 360],
        transition: {
          repeat: Infinity,
          duration: 1,
          ease: "linear",
        },
      }}
      className="w-full h-full border-4 border-solid border-secondary border-t-primary rounded-full"
    />
  );
};

export { DotsLoader, SpinnerLoader };
