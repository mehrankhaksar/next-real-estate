import { Separator } from "./ui/separator";

import { UserCircle } from "lucide-react";

import Nav from "./Nav";
import SignOutButton from "./modules/SignOutButton";

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
    <aside className="max-w-[150px] w-full h-fit bg-white p-5 rounded-lg shadow-md shadow-primary">
      <div>
        <div className="flex flex-col items-center gap-2.5 font-extrabold">
          <UserCircle className="text-primary" size={50} />
          {email}
        </div>
        <Separator className="bg-secondary-foreground my-1.5" />
        <Nav
          links={sidebarLinks}
          containerStyles="flex flex-col gap-2.5"
          linkStyles="relative text-sm font-semibold text-center py-1.5 rounded-md overflow-hidden"
          activeLinkStyles="absolute inset-0 bg-primary"
          layoutId="active-pill"
        />
        <Separator className="bg-secondary-foreground my-2.5" />
        <SignOutButton />
      </div>
    </aside>
  );
};

export default Sidebar;
