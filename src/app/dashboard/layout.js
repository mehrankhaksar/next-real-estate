import { redirect } from "next/navigation";

import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

import connectDB from "@/utils/connectDB";
import User from "@/models/User";

import Sidebar from "@/components/Sidebar";
import { signOut } from "next-auth/react";

export default async function Layout({ children }) {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/sign-in");

  try {
    await connectDB();
  } catch (err) {
    console.log(err);
  }

  const user = await User.findOne({ email: session.user.email });

  return (
    <div className="container mx-auto">
      <div className="flex gap-5">
        <Sidebar user={JSON.parse(JSON.stringify(user))} />
        {children}
      </div>
    </div>
  );
}
