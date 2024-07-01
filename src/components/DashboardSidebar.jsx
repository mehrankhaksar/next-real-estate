import { Separator } from "./ui/separator";

import { dashboardLinks } from "@/constants/lists";

import CustomAvatar from "./modules/CustomAvatar";
import SidebarNav from "./SidebarNav";
import Logout from "./modules/Logout";

const DashboardSidebar = ({ user }) => {
  return (
    <aside className="w-fit h-fit bg-background p-2.5 sm:p-5 rounded-lg shadow-md shadow-primary dark:bg-accent">
      <div className="hidden sm:flex flex-col items-center gap-1.5">
        <CustomAvatar
          badgeStyles="-left-5"
          user={user}
          avatarStyles="w-24 h-24 text-2xl"
        />
        <h4 className="h4">
          {user.firstName} {user.lastName}
        </h4>
        <span className="text-sm font-semibold text-muted-foreground underline">
          {user.email}
        </span>
      </div>
      <Separator className="hidden sm:block bg-muted-foreground my-2.5" />
      <SidebarNav list={dashboardLinks[user.role]} />
      <Separator className="hidden sm:block bg-muted-foreground my-2.5" />
      <div className="hidden sm:block">
        <Logout />
      </div>
    </aside>
  );
};

export default DashboardSidebar;
