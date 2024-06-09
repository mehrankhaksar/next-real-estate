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

const HomePage = ({ advertisements }) => {
  return (
    <section className="my-10 md:my-20">
      <div className="container mx-auto">
        <div className="space-y-10">
          <h1 className="h1 text-primary text-center dark:text-accent-foreground">
            سامانه خرید و اجاره ملک
          </h1>
          <div className="flex justify-center items-center gap-2.5">
            {services.map((item, index) => (
              <span
                className="text-sm font-semibold text-primary-foreground bg-primary py-1.5 px-3 rounded dark:text-accent-foreground dark:bg-accent"
                key={index}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="my-24">
          <AdvertisementsList advertisements={advertisements} />
        </div>
        <div className="space-y-5">
          <h2 className="h2 text-primary text-center dark:text-accent-foreground">
            شهر‌های پر بازدید
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 lg:max-w-[50%] lg:mx-auto">
            {cities.map((item, index) => (
              <span
                className="font-medium text-primary-foreground text-center bg-primary py-3 rounded-md dark:text-accent-foreground dark:bg-accent"
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
