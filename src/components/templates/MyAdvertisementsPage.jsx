import AdvertisementsList from "../modules/AdvertisementsList";

const MyAdvertisementsPage = ({ advertisements }) => {
  return (
    <div className="space-y-10">
      <h3 className="h3 dashboard-section-title">آگهی‌های من</h3>
      <AdvertisementsList advertisements={advertisements} />
    </div>
  );
};

export default MyAdvertisementsPage;
