import DashboardCard from "../modules/DashboardCard";

const PublishPage = ({ advertisements, role }) => {
  return (
    <section>
      {advertisements.length ? (
        <div className="list-container">
          {advertisements.map((item, index) => (
            <DashboardCard role={role} advertisement={item} key={index} />
          ))}
        </div>
      ) : (
        <p className="not-found">آگهی ثبت نشده است</p>
      )}
    </section>
  );
};

export default PublishPage;
