"use client";

import React from "react";

import { Button } from "../ui/button";

import toast from "react-hot-toast";

import { useRouter } from "next/navigation";
import { Trash, PenSquare } from "lucide-react";

import AdvertisementCard from "./AdvertisementCard";
import Link from "next/link";
import { SpinnerLoader } from "./Loaders";

const DashboardAdvertisementCard = ({ advertisement }) => {
  const [loading, setLoading] = React.useState(false);

  const router = useRouter();

  const handleRemove = async () => {
    setLoading(true);

    const res = await fetch(
      `/api/dashboard/remove-advertisement/${advertisement._id}`,
      {
        method: "DELETE",
      }
    );
    const data = await res.json();

    setLoading(false);

    if (data.message) {
      toast.success(data.message);
      router.refresh();
    } else {
      toast.error(data.error);
    }
  };

  return (
    <div className="relative">
      <div className="flex items-center gap-1.5 absolute -top-4 left-0">
        <Button
          className="w-8 h-8 p-1.5 rounded-full"
          variant="destructive"
          type="button"
          onClick={handleRemove}
        >
          {loading ? <SpinnerLoader /> : <Trash size={15} />}
        </Button>
        <Link href={`/dashboard/edit-advertisement/${advertisement._id}`}>
          <Button className="w-8 h-8 p-1.5 rounded-full">
            <PenSquare size={15} />
          </Button>
        </Link>
      </div>
      <AdvertisementCard {...advertisement} />
    </div>
  );
};

export default DashboardAdvertisementCard;
