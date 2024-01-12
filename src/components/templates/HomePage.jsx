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
          <ul className="flex justify-center items-center gap-5 text-sm font-bold">
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
        <div className="w-3/4 grid grid-cols-4 gap-5 mx-auto mt-10 mb-20">
          {newCategoriesLink.map((item, index) => (
            <Link
              className="flex flex-col items-center gap-2.5 p-2.5 rounded-md shadow-md shadow-primary"
              href={item.href}
              key={index}
            >
              <div className="w-full h-[150px] relative rounded-md overflow-hidden">
                <Image
                  className="object-cover"
                  src={`/assets/images/${Object.values(
                    item.href.query
                  ).toString()}.png`}
                  fill
                  alt={item.label}
                />
              </div>
              <h3 className="h4">{item.label}</h3>
            </Link>
          ))}
        </div>
        <div className="w-5/6 space-y-5 mx-auto">
          <h3 className="h2 text-primary text-center">شهر‌های پر بازدید</h3>
          <ul className="grid grid-cols-4 gap-5 font-bold">
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
