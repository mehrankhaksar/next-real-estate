import AdvertisementsList from "../modules/AdvertisementsList";

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

const HomePage = ({ advertisementsList }) => {
  return (
    <section className="my-10 md:my-20">
      <div className="container mx-auto">
        <div className="space-y-5">
          <h1 className="h1 text-primary text-center dark:text-secondary-foreground">
            سامانه خرید و اجاره ملک
          </h1>
          <div className="flex justify-center items-center gap-2.5">
            {services.map((item, index) => (
              <span
                className="text-sm font-bold text-secondary-foreground bg-primary py-1.5 px-3 rounded dark:text-secondary-foreground dark:bg-accent"
                key={index}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="my-24">
          <AdvertisementsList advertisementsList={advertisementsList} />
        </div>
        <div className="space-y-5">
          <h2 className="h2 text-primary text-center dark:text-secondary-foreground">
            شهر‌های پر بازدید
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 md:max-w-[50%] md:mx-auto">
            {cities.map((item, index) => (
              <span
                className="font-medium text-secondary text-center bg-primary py-3 rounded-md dark:text-secondary-foreground dark:bg-accent"
                key={index}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
