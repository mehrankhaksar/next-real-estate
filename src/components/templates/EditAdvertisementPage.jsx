import AddAdvertisementForm from "../modules/AddAdvertisementForm";

const EditAdvertisementPage = ({ advertisement }) => {
  return (
    <div className="space-y-5">
      <h3 className="h3 dashboard-section-title">ویرایش آگهی</h3>
      <AddAdvertisementForm
        advertisement={advertisement}
        formStyles="grid grid-cols-2 gap-5"
      />
    </div>
  );
};

export default EditAdvertisementPage;
