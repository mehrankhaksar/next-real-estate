"use client";

import React from "react";

import CopyToClipboard from "react-copy-to-clipboard";

import toast from "react-hot-toast";

import { Share2 } from "lucide-react";
import { Button } from "../ui/button";

const ShareButton = () => {
  const [URL, setURL] = React.useState("");

  React.useEffect(() => setURL(window.location.href), []);

  return (
    <CopyToClipboard text={URL}>
      <Button
        className="flex items-center gap-1 font-bold rounded-lg"
        type="button"
        onClick={() => toast.success("کپی شد")}
      >
        <Share2 size={20} />
        اشتراک گذاری
      </Button>
    </CopyToClipboard>
  );
};

export default ShareButton;
