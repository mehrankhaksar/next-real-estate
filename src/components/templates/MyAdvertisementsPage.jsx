import DashboardAdvertisementCard from "../modules/DashboardAdvertisementCard";

const MyAdvertisementsPage = ({ userAdvertisementsList }) => {
  return (
    <div className="flex flex-wrap gap-5">
      {userAdvertisementsList.length ? (
        userAdvertisementsList.map((item) => (
          <DashboardAdvertisementCard advertisement={item} key={item._id} />
        ))
      ) : (
        <p className="font-bold text-destructive-foreground bg-destructive py-1.5 px-3 rounded shadow shadow-destructive">
          آگهی ثبت نشده است
        </p>
      )}
    </div>
  );
};

export default MyAdvertisementsPage;
