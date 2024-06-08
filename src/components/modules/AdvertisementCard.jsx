import Link from "next/link";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../ui/card";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

import {
  RiHome4Line,
  RiBuilding4Line,
  RiStore2Line,
  RiBuildingLine,
  RiMapPinLine,
} from "@remixicon/react";

import { e2p, findName, sp } from "@/utils/helperFunctions";
import { provinces, cities } from "@/constants/lists";

const categoriesIcons = {
  villa: <RiHome4Line />,
  apartment: <RiBuilding4Line />,
  store: <RiStore2Line />,
  office: <RiBuildingLine />,
};

const AdvertisementCard = ({ title, category, province, city, price, _id }) => {
  return (
    <Card className="shadow-md shadow-primary dark:bg-accent">
      <CardHeader className="p-5">
        <div className="flex justify-between items-center gap-5">
          <CardTitle className="text-lg font-bold text-primary dark:text-accent-foreground">
            {e2p(title)}
          </CardTitle>
          <span className="bg-primary/25 p-1.5 rounded-md">
            {categoriesIcons[category]}
          </span>
        </div>
      </CardHeader>
      <Separator className="bg-primary" />
      <CardContent className="space-y-1.5 font-semibold text-muted-foreground p-5">
        <div className="flex items-center gap-0.5">
          <RiMapPinLine size={17.5} />
          {findName(provinces, province)}, {findName(cities, city)}
        </div>
        <div className="flex items-center gap-0.5">
          <span className="font-bold text-black dark:text-accent-foreground">
            {sp(price)}
          </span>
          تومان
        </div>
      </CardContent>
      <CardFooter className="pb-5 px-5">
        <Button
          asChild
          className="font-semibold dark:text-accent-foreground"
          type="button"
        >
          <Link href={`/advertisements/${_id}`}>مشاهده آگهی</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AdvertisementCard;
