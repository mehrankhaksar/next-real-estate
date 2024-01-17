import UserCard from "../modules/UserCard";

const UsersPage = ({ users }) => {
  return (
    <div className="flex flex-col items-start gap-5">
      <h3 className="h3 dashboard-section-title">کاربران</h3>
      {users.length ? (
        <div className="w-full grid grid-cols-5 gap-5">
          {users.map((item, index) => (
            <UserCard user={item} key={index} />
          ))}
        </div>
      ) : (
        <p className="not-found">کاربری یافت نشد</p>
      )}
    </div>
  );
};

export default UsersPage;
