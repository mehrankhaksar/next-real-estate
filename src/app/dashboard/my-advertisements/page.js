import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import connectDB from "@/utils/connectDB";
import User from "@/models/User";
import MyAdvertisementsPage from "@/components/templates/MyAdvertisementsPage";

export default async function MyAdvertisements() {
  try {
    await connectDB();
  } catch (err) {
    console.log(err);
  }

  const session = await getServerSession(authOptions);

  const [user] = await User.aggregate([
    { $match: { email: session.user.email } },
    {
      $lookup: {
        from: "advertisements",
        foreignField: "userId",
        localField: "_id",
        as: "userAdvertisementsList",
      },
    },
  ]);

  return (
    <MyAdvertisementsPage
      userAdvertisementsList={JSON.parse(
        JSON.stringify(user.userAdvertisementsList)
      )}
    />
  );
}
