import { Separator } from "../ui/separator";

import { MapPin } from "lucide-react";

import AdvertisementDetailsSidebar from "../modules/AdvertisementDetailsSidebar";

const AdvertisementDetailsPage = ({ advertisement }) => {
  const { title, province, city, description, amenities, rules } =
    advertisement;

  const itemsList = (list) => {
    return (
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
    );
  };

  return (
    <section>
      <div className="container mx-auto">
        <div className="flex gap-5">
          <div className="flex-1 space-y-5 bg-primary-foreground p-5 rounded-xl shadow-md shadow-primary">
            <div className="space-y-2.5">
              <h3 className="h3 text-primary">{title}</h3>
              <div className="flex items-center gap-1.5 text-sm font-semibold text-muted-foreground">
                <MapPin size={17} />
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
