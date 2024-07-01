import AdvertisementsList from "../modules/AdvertisementsList";

const PublishAdvertisementPage = ({ advertisements, role }) => {
  return (
    <div className="space-y-10">
      <h3 className="h3 dashboard-section-title">انتشار آگهی</h3>
      <AdvertisementsList advertisements={advertisements} role={role} />
    </div>
  );
};

export default PublishAdvertisementPage;
