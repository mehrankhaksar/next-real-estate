import { Separator } from "./ui/separator";

import CustomAvatar from "./modules/CustomAvatar";
import DashboardSidebarNavbar from "./DashboardSidebarNavbar";
import SignOutButton from "./modules/SignOutButton";

const DashboardSidebar = ({ user }) => {
  return (
    <aside className="w-fit h-fit bg-primary-foreground p-1.5 sm:p-2.5 rounded-lg shadow shadow-primary">
      <div className="hidden sm:flex flex-col items-center gap-0.5">
        <CustomAvatar
          badgeStyles="top-0 -left-2.5"
          user={user}
          avatarStyles="w-20 h-20"
        />
        <span className="text-lg font-extrabold text-black">
          {user.firstName} {user.lastName}
        </span>
        <span className="text-sm font-semibold text-muted-foreground underline">
          {user.email}
        </span>
      </div>
      <Separator className="hidden sm:block bg-secondary-foreground my-2.5" />
      <DashboardSidebarNavbar role={user.role} />
      <Separator className="bg-secondary-foreground my-2.5" />
      <SignOutButton />
    </aside>
  );
};

export default DashboardSidebar;
