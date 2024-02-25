import connectDB from "@/utils/connectDB";
import Advertisement from "@/models/Advertisement";

import AllAdvertisementsPage from "@/components/templates/AllAdvertisementsPage";

export default async function AllAdvertisements() {
  try {
    await connectDB();

    const advertisements = await Advertisement.find({
      isPublished: true,
    }).select("-userId");

    return (
      <AllAdvertisementsPage
        allAdvertisements={JSON.parse(JSON.stringify(advertisements))}
      />
    );
  } catch (err) {
    console.log(err);
  }
}
