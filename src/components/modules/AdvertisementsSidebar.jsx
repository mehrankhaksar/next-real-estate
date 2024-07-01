import { Separator } from "../ui/separator";

import { RiFilter2Line } from "@remixicon/react";

import { categoriesLink } from "@/constants/lists";

import SidebarNav from "../SidebarNav";

const AdvertisementsSidebar = ({ query }) => {
  return (
    <aside className="w-fit h-fit bg-background p-2.5 sm:p-5 rounded-lg shadow-md shadow-primary sm:space-y-2.5 dark:bg-accent">
      <h3 className="h3 hidden sm:flex sm:items-center">
        <RiFilter2Line className="text-primary" size={30} />
        دسته بندی
      </h3>
      <Separator className="hidden sm:block bg-black dark:bg-accent-foreground" />
      <SidebarNav query={query} list={categoriesLink} />
    </aside>
  );
};

export default AdvertisementsSidebar;
