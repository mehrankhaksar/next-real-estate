import { redirect } from "next/navigation";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import connectDB from "@/utils/connectDB";
import User from "@/models/User";
import Advertisement from "@/models/Advertisement";

import PublishAdvertisementPage from "@/components/templates/PublishAdvertisementPage";

export default async function PublishAdvertisement() {
  const session = await getServerSession(authOptions);

  try {
    await connectDB();

    const user = await User.findOne({ email: session.user.email });
    if (user.role !== "ADMIN") redirect("/dashboard");

    const advertisements = await Advertisement.find({ isPublished: false });

    return (
      <PublishAdvertisementPage
        advertisements={JSON.parse(JSON.stringify(advertisements))}
        role={user.role}
      />
    );
  } catch (err) {
    console.log(err);
  }
}
