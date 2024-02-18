import DashboardCard from "../modules/DashboardCard";

const PublishAdvertisementPage = ({ advertisements, role }) => {
  return (
    <div className="flex flex-col items-start gap-8">
      <h3 className="h3 dashboard-section-title">انتشار آگهی</h3>
      {advertisements.length ? (
        <div className="list-container">
          {advertisements.map((item) => (
            <DashboardCard role={role} advertisement={item} key={item._id} />
          ))}
        </div>
      ) : (
        <p className="not-found">آگهی ثبت نشده است</p>
      )}
    </div>
  );
};

export default PublishAdvertisementPage;
