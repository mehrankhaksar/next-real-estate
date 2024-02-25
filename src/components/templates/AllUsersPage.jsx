import AllUsersList from "../modules/AllUsersList";

const AllUsersPage = ({ allUsers }) => {
  return (
    <div className="flex flex-col items-start gap-5">
      <h3 className="h3 dashboard-section-title">کاربران</h3>
      {allUsers.length ? (
        <AllUsersList allUsers={allUsers} />
      ) : (
        <p className="not-found">کاربری یافت نشد</p>
      )}
    </div>
  );
};

export default AllUsersPage;
