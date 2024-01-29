import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

import connectDB from "@/utils/connectDB";
import User from "@/models/User";

import DashboardPage from "@/components/templates/DashboardPage";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  try {
    await connectDB();

    const user = await User.findOne({ email: session.user.email });

    return <DashboardPage user={JSON.parse(JSON.stringify(user))} />;
  } catch (err) {
    console.log(err);
  }
}
