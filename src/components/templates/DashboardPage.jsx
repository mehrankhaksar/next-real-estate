const DashboardPage = ({ user: { firstName, createdAt } }) => {
  return (
    <div className="flex justify-between gap-10">
      <div className="space-y-2.5">
        <h2 className="h2">
          سلام <span className="text-primary">{firstName}</span> 👋
        </h2>
        <p className="description">
          آگهی‌های خود را ثبت کنید تا هزاران نفر آن را مشاهده کنند.
        </p>
        <div className="inline-flex items-center gap-1.5 text-sm text-primary-foreground bg-primary py-1.5 px-3 rounded-md shadow-md shadow-primary">
          تاریخ عضویت:
          <span className="font-bold">
            {new Date(createdAt).toLocaleDateString("fa-IR")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
