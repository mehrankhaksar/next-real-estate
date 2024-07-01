import { Separator } from "../ui/separator";

import { RiMapPinLine } from "@remixicon/react";

import { e2p, findName } from "@/utils/helperFunctions";
import { provinces, cities } from "@/constants/lists";
import AdvertisementDetailsSidebar from "../modules/AdvertisementDetailsSidebar";

const AdvertisementDetailsPage = ({ advertisement }) => {
  const { title, province, city, description, amenities, rules } =
    advertisement;

  return (
    <section className="my-10">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row gap-5">
          <div className="flex-1 space-y-5">
            <div className="space-y-1.5">
              <h3 className="h3 text-primary dark:text-accent-foreground">
                {e2p(title)}
              </h3>
              <div className="flex items-center gap-0.5 font-semibold text-muted-foreground">
                <RiMapPinLine className="text-primary" size={20} />
                {findName(provinces, province)}, {findName(cities, city)}
              </div>
            </div>
            <div>
              <h4 className="h4 text-primary dark:text-accent-foreground">
                توضیحات
              </h4>
              <Separator className="bg-foreground mt-1.5 mb-3" />
              <p className="description break-all">{description}</p>
            </div>
            <div>
              <h4 className="h4 text-primary dark:text-accent-foreground">
                امکانات رفاهی
              </h4>
              <Separator className="bg-foreground mt-1.5 mb-3" />
              {amenities.length ? (
                <ul className="space-y-1.5">
                  {amenities.map((item, index) => (
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
            <div>
              <h4 className="h4 text-primary dark:text-accent-foreground">
                قوانین
              </h4>
              <Separator className="bg-foreground mt-1.5 mb-3" />
              {rules.length ? (
                <ul className="space-y-1.5">
                  {rules.map((item, index) => (
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
          </div>
          <AdvertisementDetailsSidebar {...advertisement} />
        </div>
      </div>
    </section>
  );
};

export default AdvertisementDetailsPage;
