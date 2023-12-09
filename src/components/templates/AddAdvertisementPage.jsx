import AddAdvertisementForm from "../modules/AddAdvertisementForm";

const AddAdvertisementPage = () => {
  return (
    <div className="space-y-5">
      <h3 className="h3 dashboard-section-title">ثبت آگهی</h3>
      <AddAdvertisementForm formStyles="grid grid-cols-2 gap-5" />
    </div>
  );
};

export default AddAdvertisementPage;
