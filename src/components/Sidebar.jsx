import { Separator } from "./ui/separator";

import { UserCircle } from "lucide-react";

import Nav from "./HeaderNav";
import SignOutButton from "./modules/SignOutButton";
import SidebarNav from "./SidebarNav";

const sidebarLinks = [
  {
    pathname: "/dashboard",
    label: "حساب کاربری",
  },
  {
    pathname: "/dashboard/my-advertisements",
    label: "آگهی‌های من",
  },
  {
    pathname: "/dashboard/add-advertisement",
    label: "ثبت آگهی",
  },
];

const Sidebar = ({ user: { email } }) => {
  return (
    <aside className="max-w-[150px] h-fit bg-white p-5 rounded-lg shadow-md shadow-primary">
      <div>
        <div className="flex flex-col items-center gap-2.5 font-extrabold">
          <UserCircle className="text-primary" size={50} />
          {email}
        </div>
        <Separator className="bg-secondary-foreground my-2.5" />
        <SidebarNav />
        <Separator className="bg-secondary-foreground my-2.5" />
        <SignOutButton />
      </div>
    </aside>
  );
};

export default Sidebar;
