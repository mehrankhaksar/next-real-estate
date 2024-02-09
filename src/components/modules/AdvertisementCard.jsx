import Link from "next/link";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../ui/card";
import { Separator } from "../ui/separator";

import { Home, Building, Store, Building2, MapPin } from "lucide-react";

import { e2p, findName, sp } from "@/utils/helperFunctions";
import { provinces } from "@/constants/lists";

import CustomButton from "./CustomButton";

const AdvertisementCard = ({ title, category, province, city, price, _id }) => {
  const categoriesIcons = {
    villa: <Home />,
    apartment: <Building />,
    store: <Store />,
    office: <Building2 />,
  };

  return (
    <Card className="shadow shadow-primary">
      <CardHeader>
        <div className="flex justify-between items-center gap-5 text-primary">
          <CardTitle className="text-lg font-extrabold">{e2p(title)}</CardTitle>
          <span className="bg-primary/25 p-1.5 rounded-md">
            {categoriesIcons[category]}
          </span>
        </div>
      </CardHeader>
      <Separator className="bg-primary mb-1.5" />
      <CardContent className="font-semibold text-muted-foreground p-2.5">
        <div className="flex items-center gap-1">
          <MapPin size={18} />
          {findName(provinces, province)}, {city}
        </div>
        <div className="flex items-center gap-1">
          <span className="font-extrabold text-secondary-foreground">
            {sp(price)}
          </span>
          تومان
        </div>
      </CardContent>
      <CardFooter className="p-2.5">
        <Link className="w-full" href={`/advertisements/${_id}`}>
          <CustomButton containerStyles="text-sm">مشاهده آگهی</CustomButton>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default AdvertisementCard;
