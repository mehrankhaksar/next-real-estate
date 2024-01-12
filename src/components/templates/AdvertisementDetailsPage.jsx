import { Separator } from "../ui/separator";

import { MapPin } from "lucide-react";

import AdvertisementDetailsSidebar from "../modules/AdvertisementDetailsSidebar";

const AdvertisementDetailsPage = ({ advertisement }) => {
  const { title, province, city, description, amenities, rules } =
    advertisement;

  const itemsList = (list) => {
    return (
      <div>
        {list.length ? (
          <ul className="space-y-1.5">
            {list.map((item, index) => (
              <li
                className="font-semibold list-disc marker:text-primary"
                key={index}
              >
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className="inline-block text-sm font-medium text-destructive-foreground bg-destructive p-1.5 rounded">
            موردی ذکر نشده است
          </p>
        )}
      </div>
    );
  };

  return (
    <section>
      <div className="container mx-auto">
        <div className="flex gap-5">
          <div className="flex-1 space-y-5 bg-primary-foreground p-5 rounded-xl shadow shadow-primary transition-all ease-in">
            <div className="space-y-1.5">
              <h2 className="h2 text-primary">{title}</h2>
              <div className="flex items-center gap-1 text-sm font-bold text-muted-foreground">
                <MapPin className="text-primary" size={18} />
                {province}, {city}
              </div>
            </div>
            <div>
              <h4 className="h4 text-primary">توضیحات</h4>
              <Separator className="bg-secondary-foreground mt-1.5 mb-3" />
              <p className="description break-all">{description}</p>
            </div>
            <div>
              <h4 className="h4 text-primary">امکانات</h4>
              <Separator className="bg-secondary-foreground mt-1.5 mb-3" />
              {itemsList(amenities)}
            </div>
            <div>
              <h4 className="h4 text-primary">قوانین</h4>
              <Separator className="bg-secondary-foreground mt-1.5 mb-3" />
              {itemsList(rules)}
            </div>
          </div>
          <AdvertisementDetailsSidebar {...advertisement} />
        </div>
      </div>
    </section>
  );
};

export default AdvertisementDetailsPage;
