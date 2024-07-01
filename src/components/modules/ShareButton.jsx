"use client";

import React from "react";

import { Button } from "../ui/button";

import CopyToClipboard from "react-copy-to-clipboard";

import toast from "react-hot-toast";

import { RiShareLine } from "@remixicon/react";

const ShareButton = () => {
  const [URL, setURL] = React.useState("");

  React.useEffect(() => setURL(window.location.href), []);

  return (
    <CopyToClipboard text={URL}>
      <Button
        className="flex items-center gap-1.5 dark:text-accent-foreground"
        type="button"
        onClick={() =>
          toast.success("کپی شد", {
            style: {
              color: "hsl(var(--foreground))",
              backgroundColor: "hsl(var(--background))",
            },
            duration: 1500,
          })
        }
      >
        <RiShareLine size={20} />
        اشتراک گذاری
      </Button>
    </CopyToClipboard>
  );
};

export default ShareButton;
