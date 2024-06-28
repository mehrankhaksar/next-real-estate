"use client";

import { motion } from "framer-motion";

const DotsLoader = () => {
  const transition = {
    repeat: Infinity,
    repeatType: "mirror",
    duration: 0.5,
    ease: "easeInOut",
  };

  return (
    <div className="flex items-center gap-1.5">
      <motion.span
        className="dot"
        animate={{
          scale: [0.85, 1.15],
        }}
        transition={transition}
      />
      <motion.span
        className="dot"
        animate={{
          scale: [1.15, 0.55],
        }}
        transition={transition}
      />
      <motion.span
        className="dot"
        animate={{
          scale: [0.85, 1.15],
        }}
        transition={transition}
      />
    </div>
  );
};

const SpinnerLoader = ({ color }) => {
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
      className={`w-full h-full border-4 border-solid border-border rounded-full ${color}`}
    />
  );
};

export { DotsLoader, SpinnerLoader };
