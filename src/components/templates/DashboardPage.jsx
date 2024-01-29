import UserDialog from "../modules/UserDialog";

const DashboardPage = ({ user }) => {
  return (
    <div className="flex flex-col gap-10">
      <div className="space-y-2.5">
        <h2 className="h2">
          سلام <span className="text-primary">{user.firstName}</span> 👋
        </h2>
        <p className="description">
          آگهی‌های خود را ثبت کنید تا هزاران نفر آن را مشاهده کنند.
        </p>
        <div className="inline-flex items-center gap-1.5 text-sm font-medium text-white bg-green-500 py-1.5 px-3 rounded-md shadow-md shadow-green-500">
          تاریخ عضویت:
          <span className="font-bold">
            {new Date(user.createdAt).toLocaleDateString("fa-IR")}
          </span>
        </div>
      </div>
      <div className="w-fit">
        <UserDialog user={user} />
      </div>
    </div>
  );
};

export default DashboardPage;
