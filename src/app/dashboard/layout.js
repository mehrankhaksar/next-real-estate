import { redirect } from "next/navigation";

import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

import Sidebar from "@/components/Sidebar";

export default async function Layout({ children }) {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/sign-in");

  return (
    <div className="w-full h-full container mx-auto">
      <div className="flex gap-5 py-10">
        <Sidebar user={session.user} />
        {children}
      </div>
    </div>
  );
}
