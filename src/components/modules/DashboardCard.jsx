"use client";

import React from "react";

import { useRouter } from "next/navigation";
import Link from "next/link";

import toast from "react-hot-toast";

import { CheckCircle2, Trash, PenSquare } from "lucide-react";

import CustomButton from "./CustomButton";
import { SpinnerLoader } from "./CustomLoaders";
import AdvertisementCard from "./AdvertisementCard";

const DashboardCard = ({ role, advertisement }) => {
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
          <CustomButton
            containerStyles="w-8 h-8 bg-green-500 p-1.5 rounded-full hover:bg-green-600"
            disabled={loading.publish}
            handleClick={handlePublish}
          >
            {loading.publish ? (
              <SpinnerLoader color="border-t-green-500" />
            ) : (
              <CheckCircle2 size={20} />
            )}
          </CustomButton>
        ) : null}
        <CustomButton
          containerStyles="w-8 h-8 p-1.5 rounded-full"
          variant="destructive"
          disabled={loading.remove}
          handleClick={handleRemove}
        >
          {loading.remove ? (
            <SpinnerLoader color="border-t-destructive" />
          ) : (
            <Trash size={15} />
          )}
        </CustomButton>
        <Link href={`/dashboard/edit-advertisement/${advertisement._id}`}>
          <CustomButton containerStyles="w-8 h-8 p-1.5 rounded-full">
            <PenSquare size={15} />
          </CustomButton>
        </Link>
      </div>
      <AdvertisementCard {...advertisement} />
    </div>
  );
};

export default DashboardCard;
