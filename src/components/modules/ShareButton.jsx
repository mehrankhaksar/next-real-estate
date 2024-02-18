"use client";

import React from "react";

import CopyToClipboard from "react-copy-to-clipboard";

import toast from "react-hot-toast";

import { Share2 } from "lucide-react";

import CustomButton from "./CustomButton";

const ShareButton = () => {
  const [URL, setURL] = React.useState("");

  React.useEffect(() => setURL(window.location.href), []);

  return (
    <CopyToClipboard text={URL}>
      <CustomButton
        containerStyles="flex items-center gap-1 rounded-lg"
        handleClick={() => toast.success("کپی شد")}
      >
        <Share2 size={18} strokeWidth={2.5} />
        اشتراک گذاری
      </CustomButton>
    </CopyToClipboard>
  );
};

export default ShareButton;
