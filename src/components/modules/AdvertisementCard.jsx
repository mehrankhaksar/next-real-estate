import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

import { Home, Building, Store, Building2, MapPin } from "lucide-react";
import { Separator } from "../ui/separator";
import { sp } from "@/utils/numberConverter";

const AdvertisementCard = ({ title, category, province, city, price }) => {
  const categoriesIcons = {
    villa: <Home size={20} />,
    apartment: <Building size={20} />,
    store: <Store size={20} />,
    office: <Building2 size={20} />,
  };

  return (
    <Card className="w-[250px] shadow shadow-primary">
      <CardHeader>
        <div className="flex justify-between items-center text-primary">
          <CardTitle>{title}</CardTitle>
          <span className="bg-primary/25 p-1.5 rounded-md">
            {categoriesIcons[category]}
          </span>
        </div>
      </CardHeader>
      <Separator className="bg-primary mb-5" />
      <CardContent className="space-y-2.5 font-semibold text-muted-foreground">
        <div className="flex items-center gap-1 text-sm">
          <MapPin size={18} />
          {province}, {city}
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-secondary-foreground font-extrabold">
            {sp(price)}
          </span>
          تومان
        </div>
        <Link href="/">
          <Button className="font-bold" type="button">
            مشاهده آگهی
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default AdvertisementCard;
