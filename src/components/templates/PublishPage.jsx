import DashboardAdvertisementCard from "../modules/DashboardAdvertisementCard";

const PublishPage = ({ role, advertisements }) => {
  return (
    <section>
      {advertisements.length ? (
        <div className="grid grid-cols-4 gap-y-10 gap-x-5">
          {advertisements.map((item, index) => (
            <DashboardAdvertisementCard
              role={role}
              advertisement={item}
              key={index}
            />
          ))}
        </div>
      ) : (
        <p className="inline-block font-bold text-destructive-foreground bg-destructive py-1.5 px-3 rounded-md shadow-md shadow-destructive">
          آگهی یافت نشد
        </p>
      )}
    </section>
  );
};

export default PublishPage;
