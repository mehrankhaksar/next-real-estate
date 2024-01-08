"use client";

import React from "react";

import { motion } from "framer-motion";

import CopyToClipboard from "react-copy-to-clipboard";

import { Share2 } from "lucide-react";
import toast from "react-hot-toast";

const ShareButton = () => {
  const [URL, setURL] = React.useState("");

  React.useEffect(() => setURL(window.location.href), []);

  return (
    <CopyToClipboard text={URL}>
      <motion.button
        className="w-full flex justify-center items-center gap-1 text-sm font-semibold text-muted-foreground bg-primary-foreground p-5 rounded-xl shadow-md shadow-primary cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 0.5,
            duration: 0.5,
            ease: "linear",
          },
        }}
        type="button"
        onClick={() => toast.success("کپی شد!")}
      >
        <Share2 className="text-primary" size={20} />
        اشتراک گذاری
      </motion.button>
    </CopyToClipboard>
  );
};

export default ShareButton;
