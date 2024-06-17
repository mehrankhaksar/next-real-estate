import { redirect } from "next/navigation";

import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

import connectDB from "@/utils/connectDB";
import User from "@/models/User";

import DashboardSidebar from "@/components/DashboardSidebar";

export const metadata = {
  title: "پنل | پروژه بوتواستارت",
};

export default async function Layout({ children }) {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/sign-in");

  try {
    await connectDB();

    const user = await User.findOne({ email: session.user.email });

    return (
      <div className="container mx-auto">
        <div className="flex gap-2.5 my-10 sm:gap-5">
          <DashboardSidebar user={JSON.parse(JSON.stringify(user))} />
          {children}
        </div>
      </div>
    );
  } catch (err) {
    console.log(err);
  }
}
