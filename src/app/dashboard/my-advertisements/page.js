import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import connectDB from "@/utils/connectDB";
import User from "@/models/User";

import MyAdvertisementsPage from "@/components/templates/MyAdvertisementsPage";

export default async function MyAdvertisements() {
  const session = await getServerSession(authOptions);

  try {
    await connectDB();

    const [user] = await User.aggregate([
      { $match: { email: session.user.email } },
      {
        $lookup: {
          from: "advertisements",
          foreignField: "userId",
          localField: "_id",
          as: "userAdvertisements",
        },
      },
    ]);

    return (
      <MyAdvertisementsPage
        userAdvertisements={JSON.parse(JSON.stringify(user.userAdvertisements))}
      />
    );
  } catch (err) {
    console.log(err);
  }
}
