import { redirect } from "next/navigation";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import connectDB from "@/utils/connectDB";
import User from "@/models/User";
import Advertisement from "@/models/Advertisement";

import PublishPage from "@/components/templates/PublishPage";

export default async function Publish() {
  const session = await getServerSession(authOptions);

  try {
    await connectDB();

    const user = await User.findOne({ email: session.user.email });
    if (user.role !== "ADMIN") redirect("/dashboard");

    const advertisements = await Advertisement.find({ isPublished: false });

    return (
      <PublishPage
        role={user.role}
        advertisements={JSON.parse(JSON.stringify(advertisements))}
      />
    );
  } catch (err) {
    console.log(err);
  }
}
