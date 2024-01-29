import { Separator } from "../ui/separator";

import { MapPin } from "lucide-react";

import { e2p, findName } from "@/utils/helperFunctions";
import { provinces, cities } from "@/constants/lists";

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
                className="text-sm font-semibold list-disc marker:text-primary"
                key={index}
              >
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className="not-found text-sm">موردی ذکر نشده است</p>
        )}
      </div>
    );
  };

  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row gap-5">
          <div className="flex-1 space-y-5 bg-primary-foreground p-5 rounded-xl shadow shadow-primary">
            <div className="space-y-1.5">
              <h2 className="h2 text-primary">{e2p(title)}</h2>
              <div className="flex items-center gap-1 font-bold text-muted-foreground">
                <MapPin className="text-primary" size={20} />
                {findName(provinces, province)}, {findName(cities, city)}
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
