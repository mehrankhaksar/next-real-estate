"use client";

import React from "react";

import { useRouter } from "next/navigation";
import Link from "next/link";

import toast from "react-hot-toast";

import { CheckCircle2, Trash, PenSquare } from "lucide-react";

import { SpinnerLoader } from "./CustomLoaders";
import AdvertisementCard from "./AdvertisementCard";
import { Button } from "../ui/button";

const DashboardCard = ({ advertisement, role }) => {
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
      toast.success(data.message);
      router.refresh();
    } else {
      toast.error(data.error);
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
      toast.success(data.message);
      router.refresh();
    } else {
      toast.error(data.error);
    }
  };

  return (
    <div className="relative">
      <div className="flex items-center gap-1.5 absolute -top-4 -left-2">
        {role === "ADMIN" ? (
          <Button
            className="w-8 h-8 text-secondary-foreground bg-green-500 p-1.5 rounded-full hover:bg-green-600"
            type="button"
            disabled={loading.publish}
            onClick={handlePublish}
          >
            {loading.publish ? (
              <SpinnerLoader color="border-t-green-500" />
            ) : (
              <CheckCircle2 size={20} />
            )}
          </Button>
        ) : null}
        <Button
          className="w-8 h-8 p-1.5 rounded-full"
          variant="destructive"
          type="button"
          disabled={loading.remove}
          onClick={handleRemove}
        >
          {loading.remove ? (
            <SpinnerLoader color="border-t-destructive" />
          ) : (
            <Trash size={16} strokeWidth={2.5} />
          )}
        </Button>
        <Button
          asChild
          className="w-8 h-8 text-secondary p-1.5 rounded-full dark:text-secondary-foreground"
          type="button"
        >
          <Link href={`/dashboard/edit-advertisement/${advertisement._id}`}>
            <PenSquare size={16} strokeWidth={2.5} />
          </Link>
        </Button>
      </div>
      <AdvertisementCard {...advertisement} />
    </div>
  );
};

export default DashboardCard;
