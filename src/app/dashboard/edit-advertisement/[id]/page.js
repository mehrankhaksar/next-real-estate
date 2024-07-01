import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import connectDB from "@/utils/connectDB";
import Advertisement from "@/models/Advertisement";

import EditAdvertisementPage from "@/components/templates/EditAdvertisementPage";

export default async function EditAdvertisement({ params: { id } }) {
  const session = await getServerSession(authOptions);

  try {
    await connectDB();

    const advertisement = await Advertisement.findOne({ _id: id });

    return (
      <EditAdvertisementPage
        role={session.user.role}
        advertisement={JSON.parse(JSON.stringify(advertisement))}
      />
    );
  } catch (err) {
    console.log(err);
  }
}
