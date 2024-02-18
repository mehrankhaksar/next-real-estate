import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "../ui/dropdown-menu";

import SignOutButton from "./SignOutButton";

const CustomDropdownMenu = ({ children, user, links }) => {
  return (
    <DropdownMenu dir="rtl">
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel className="text-base font-extrabold text-center">{`${user.firstName} ${user.lastName}`}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {links.map((item, index) => (
            <Link
              className={`${
                (item.label === "انتشار آگهی" || item.label === "کاربران") &&
                user.role !== "ADMIN" &&
                "hidden"
              }`}
              href={item.href}
              key={index}
            >
              <DropdownMenuItem className="font-bold cursor-pointer">
                {item.label}
              </DropdownMenuItem>
            </Link>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <SignOutButton />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CustomDropdownMenu;
