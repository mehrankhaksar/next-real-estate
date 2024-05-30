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

import { Home, Building, Store, Building2, MapPin } from "lucide-react";

import { e2p, findName, sp } from "@/utils/helperFunctions";
import { provinces, cities } from "@/constants/lists";

const AdvertisementCard = ({ title, category, province, city, price, _id }) => {
  const categoriesIcons = {
    villa: <Home />,
    apartment: <Building />,
    store: <Store />,
    office: <Building2 />,
  };

  return (
    <Card className="shadow-md shadow-primary">
      <CardHeader>
        <div className="flex justify-between items-center gap-5 text-primary">
          <CardTitle className="font-extrabold">{e2p(title)}</CardTitle>
          <span className="bg-primary/25 p-1.5 rounded-md">
            {categoriesIcons[category]}
          </span>
        </div>
      </CardHeader>
      <Separator className="bg-primary" />
      <CardContent className="font-semibold text-muted-foreground py-2.5">
        <div className="flex items-center gap-0.5">
          <MapPin size={18} />
          {findName(provinces, province)}, {findName(cities, city)}
        </div>
        <div className="flex items-center gap-0.5">
          <span className="font-extrabold text-secondary-foreground">
            {sp(price)}
          </span>
          تومان
        </div>
      </CardContent>
      <CardFooter>
        <Button
          asChild
          className="font-semibold dark:text-secondary-foreground"
          type="button"
        >
          <Link className="w-full" href={`/advertisements/${_id}`}>
            مشاهده آگهی
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AdvertisementCard;
