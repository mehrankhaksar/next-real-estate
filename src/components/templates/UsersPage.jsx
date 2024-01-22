import UsersList from "../modules/UsersList";

const UsersPage = ({ users }) => {
  return (
    <div className="flex flex-col items-start gap-5">
      <h3 className="h3 dashboard-section-title">کاربران</h3>
      {users.length ? (
        <UsersList users={users} />
      ) : (
        <p className="not-found">کاربری یافت نشد</p>
      )}
    </div>
  );
};

export default UsersPage;
