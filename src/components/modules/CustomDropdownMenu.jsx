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
import { Button } from "../ui/button";

import SignOutButton from "./SignOutButton";

const CustomDropdownMenu = ({ children, user, links }) => {
  return (
    <DropdownMenu dir="rtl">
      <DropdownMenuTrigger asChild>
        <Button className="w-fit p-0 rounded-full focus-visible:ring-offset-0">
          {children}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="text-center">
        <DropdownMenuLabel>{`${user.firstName} ${user.lastName}`}</DropdownMenuLabel>
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
              <DropdownMenuItem className="cursor-pointer">
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
