import AdvertisementForm from "../modules/AdvertisementForm";

const EditAdvertisementPage = ({ advertisement }) => {
  return (
    <div className="space-y-5">
      <h3 className="h3 dashboard-section-title">ویرایش آگهی</h3>
      <AdvertisementForm advertisement={advertisement} />
    </div>
  );
};

export default EditAdvertisementPage;
