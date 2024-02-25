import { redirect } from "next/navigation";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import connectDB from "@/utils/connectDB";
import User from "@/models/User";

import AllUsersPage from "@/components/templates/AllUsersPage";

export default async function AllUsers() {
  const session = await getServerSession(authOptions);

  try {
    await connectDB();

    const user = await User.findOne({ email: session.user.email });
    if (user.role !== "ADMIN") redirect("/dashboard");

    const filteredUsers = await User.find({
      email: { $ne: session.user.email },
    });

    const sortedUsers = filteredUsers.sort((a, b) =>
      a.role === "ADMIN" ? -1 : b.role === "ADMIN" ? 1 : 0
    );

    return <AllUsersPage allUsers={JSON.parse(JSON.stringify(sortedUsers))} />;
  } catch (err) {
    console.log(err);
  }
}
