import { Separator } from "./ui/separator";

import CustomAvatar from "./modules/CustomAvatar";
import SidebarNav from "./SidebarNav";
import SignOutButton from "./modules/SignOutButton";

const Sidebar = ({ user }) => {
  return (
    <aside className="max-w-[160px] w-full h-fit bg-primary-foreground p-5 rounded-lg shadow shadow-primary">
      <div className="flex flex-col items-center gap-1.5 text-sm text-muted-foreground font-semibold">
        <CustomAvatar
          badgeStyles="-left-2.5"
          user={user}
          avatarStyles="w-20 h-20"
        />
        <span className="text-lg font-extrabold text-black">
          {user.firstName} {user.lastName}
        </span>
        {user.email}
      </div>
      <Separator className="bg-secondary-foreground my-2.5" />
      <SidebarNav role={user.role} />
      <Separator className="bg-secondary-foreground my-2.5" />
      <SignOutButton />
    </aside>
  );
};

export default Sidebar;
