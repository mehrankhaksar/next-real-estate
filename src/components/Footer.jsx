const advantages = [
  "تعرفه قانونی",
  "دسترسی سریع",
  "مشاورین خبره",
  "قولنامه محضری",
];

const Footer = () => {
  return (
    <footer className="text-primary-foreground bg-primary py-10 dark:text-accent-foreground dark:bg-accent">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-10 sm:items-center">
          <div className="space-y-2.5">
            <h2 className="h2">سامانه خرید و اجاره ملک</h2>
            <p className="description">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد.
            </p>
          </div>
          <ul className="min-w-fit list-disc">
            {advantages.map((item, index) => (
              <li className="font-semibold" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
