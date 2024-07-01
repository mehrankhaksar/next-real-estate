"use client";

import React from "react";

import { useRouter } from "next/navigation";
import Link from "next/link";

import { Button } from "../ui/button";

import toast from "react-hot-toast";

import { RiCheckLine, RiDeleteBinLine, RiEditBoxLine } from "@remixicon/react";

import { SpinnerLoader } from "./CustomLoaders";
import AdvertisementCard from "./AdvertisementCard";

const DashboardCard = ({ role = "USER", advertisement }) => {
  const [loading, setLoading] = React.useState({
    publish: false,
    remove: false,
  });

  const router = useRouter();

  const handlePublish = async () => {
    setLoading({ ...loading, publish: true });

    const res = await fetch(
      `/api/dashboard/admin/publish-advertisement/${advertisement._id}`,
      {
        method: "PATCH",
      }
    );

    const data = await res.json();

    setLoading({ ...loading, publish: false });

    if (data.message) {
      toast.success(data.message, {
        style: {
          color: "hsl(var(--foreground))",
          backgroundColor: "hsl(var(--background))",
        },
        duration: 1500,
      });

      setTimeout(() => {
        router.refresh();
      }, 1500);
    } else {
      toast.error(data.error, {
        style: {
          color: "hsl(var(--foreground))",
          backgroundColor: "hsl(var(--background))",
        },
        duration: 1500,
      });
    }
  };

  const handleRemove = async () => {
    setLoading({ ...loading, remove: true });

    const res = await fetch(
      `/api/dashboard/remove-advertisement/${advertisement._id}`,
      {
        method: "DELETE",
      }
    );

    const data = await res.json();

    setLoading({ ...loading, remove: false });

    if (data.message) {
      toast.success(data.message, {
        style: {
          color: "hsl(var(--foreground))",
          backgroundColor: "hsl(var(--background))",
        },
        duration: 1500,
      });

      setTimeout(() => {
        router.refresh();
      }, 1500);
    } else {
      toast.error(data.error, {
        style: {
          color: "hsl(var(--foreground))",
          backgroundColor: "hsl(var(--background))",
        },
        duration: 1500,
      });
    }
  };

  return (
    <div className="relative">
      <div className="flex items-center gap-1.5 absolute -top-[25px] -left-5">
        {role === "ADMIN" ? (
          <Button
            className="bg-green-500 rounded-full hover:bg-green-600 dark:text-accent-foreground"
            size="icon"
            type="button"
            disabled={loading.publish}
            onClick={handlePublish}
          >
            {loading.publish ? (
              <SpinnerLoader color="border-t-green-500" />
            ) : (
              <RiCheckLine size={20} />
            )}
          </Button>
        ) : null}
        <Button
          className="rounded-full dark:bg-red-500 dark:hover:bg-red-600"
          variant="destructive"
          size="icon"
          type="button"
          disabled={loading.remove}
          onClick={handleRemove}
        >
          {loading.remove ? (
            <SpinnerLoader color="border-t-destructive dark:border-t-red-500" />
          ) : (
            <RiDeleteBinLine size={20} />
          )}
        </Button>
        <Button
          asChild
          className="rounded-full dark:text-accent-foreground"
          size="icon"
          type="button"
        >
          <Link href={`/dashboard/edit-advertisement/${advertisement._id}`}>
            <RiEditBoxLine size={20} />
          </Link>
        </Button>
      </div>
      <AdvertisementCard {...advertisement} />
    </div>
  );
};

export default DashboardCard;
