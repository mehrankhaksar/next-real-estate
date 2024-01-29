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
        <p className="not-found">آگهی ثبت نشده است</p>
      )}
    </section>
  );
};

export default PublishPage;
