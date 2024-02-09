import Link from "next/link";
import Image from "next/image";

import { categoriesLink } from "@/constants/lists";

const HomePage = () => {
  const services = ["خرید", "فروش", "رهن", "اجاره"];

  const cities = [
    "تهران",
    "سنندج",
    "کرمانشاه",
    "اهواز",
    "مشهد",
    "اصفهان",
    "شیراز",
    "خرم آباد",
  ];

  const newCategoriesLink = categoriesLink.filter(
    (item) => item.label !== "همه"
  );

  return (
    <section className="py-10">
      <div className="container mx-auto">
        <div className="space-y-5">
          <h1 className="h1 text-primary text-center">
            سامانه خرید و اجاره ملک
          </h1>
          <ul className="flex justify-center items-center gap-2.5 text-sm font-bold">
            {services.map((item, index) => (
              <li
                className="text-primary-foreground bg-primary py-1.5 px-3 rounded"
                key={index}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[85%] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10 mb-20 mx-auto">
          {newCategoriesLink.map((item, index) => (
            <Link
              className="flex flex-col items-center gap-2.5 p-1.5 rounded-md shadow-md shadow-primary"
              href={item.href}
              key={index}
            >
              <div className="w-full h-[250px] md:h-[150px] relative rounded-md overflow-hidden">
                <Image
                  className="object-cover"
                  src={`/assets/images/${Object.values(
                    item.href.query
                  ).toString()}.png`}
                  fill
                  sizes="100%"
                  priority
                  alt={item.label}
                />
              </div>
              <h4 className="h4 !font-bold">{item.label}</h4>
            </Link>
          ))}
        </div>
        <div className="space-y-5">
          <h3 className="h2 text-primary text-center">شهر‌های پر بازدید</h3>
          <ul className="grid grid-cols-4 gap-1.5 font-bold">
            {cities.map((item, index) => (
              <li
                className="text-primary-foreground text-center bg-primary py-3 rounded-md"
                key={index}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
