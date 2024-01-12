import { Separator } from "./ui/separator";

import { UserCircle } from "lucide-react";

import SidebarNav from "./SidebarNav";
import SignOutButton from "./modules/SignOutButton";

const Sidebar = ({ user: { email, role } }) => {
  return (
    <aside className="max-w-[150px] h-fit bg-white p-5 rounded-lg shadow-md shadow-primary">
      <div>
        <div className="flex flex-col items-center gap-1.5 font-extrabold">
          <UserCircle className="text-primary" size={50} />
          <span className="text-sm">{role}</span>
          {email}
        </div>
        <Separator className="bg-secondary-foreground my-2.5" />
        <SidebarNav role={role} />
        <Separator className="bg-secondary-foreground my-2.5" />
        <SignOutButton />
      </div>
    </aside>
  );
};

export default Sidebar;
