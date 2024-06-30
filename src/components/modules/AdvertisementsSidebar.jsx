import { Separator } from "../ui/separator";

import {
  RiListCheck,
  RiHome4Line,
  RiBuilding4Line,
  RiStore2Line,
  RiBuildingLine,
  RiFilter2Line,
} from "@remixicon/react";
import SidebarNav from "../SidebarNav";

const categoriesLink = [
  {
    href: {
      pathname: "/advertisements",
      query: { category: "all" },
    },
    icon: <RiListCheck />,
    label: "همه",
  },
  {
    href: {
      pathname: "/advertisements",
      query: { category: "villa" },
    },
    icon: <RiHome4Line />,
    label: "ویلا",
  },
  {
    href: {
      pathname: "/advertisements",
      query: { category: "apartment" },
    },
    icon: <RiBuilding4Line />,
    label: "آپارتمان",
  },
  {
    href: {
      pathname: "/advertisements",
      query: { category: "store" },
    },
    icon: <RiStore2Line />,
    label: "مغازه",
  },
  {
    href: {
      pathname: "/advertisements",
      query: { category: "office" },
    },
    icon: <RiBuildingLine />,
    label: "دفتر",
  },
];

const AdvertisementsSidebar = ({ query }) => {
  return (
    <aside className="w-fit h-fit bg-background p-2.5 sm:p-5 rounded-lg shadow-md shadow-primary sm:space-y-2.5 dark:bg-accent">
      <h4 className="h4 hidden sm:flex sm:items-center">
        <RiFilter2Line className="text-primary" size={30} />
        دسته بندی
      </h4>
      <Separator className="hidden sm:block bg-black dark:bg-accent-foreground" />
      <SidebarNav query={query} list={categoriesLink} />
    </aside>
  );
};

export default AdvertisementsSidebar;
