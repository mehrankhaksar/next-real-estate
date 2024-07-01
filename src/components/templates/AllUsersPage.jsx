import AllUsersList from "../modules/AllUsersList";

const AllUsersPage = ({ users }) => {
  return (
    <div className="space-y-10">
      <h3 className="h3 dashboard-section-title">کاربران</h3>
      <AllUsersList users={users} />
    </div>
  );
};

export default AllUsersPage;
