import AdvertisementForm from "../modules/AdvertisementForm";

const EditAdvertisementPage = ({ role, advertisement }) => {
  return (
    <div className="space-y-10">
      <h3 className="h3 dashboard-section-title">ویرایش آگهی</h3>
      <AdvertisementForm role={role} advertisement={advertisement} />
    </div>
  );
};

export default EditAdvertisementPage;
