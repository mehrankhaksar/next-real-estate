import connectDB from "@/utils/connectDB";
import Advertisement from "@/models/Advertisement";

import AdvertisementsList from "@/components/modules/AdvertisementsList";

export default async function AllAdvertisements() {
  try {
    await connectDB();

    const advertisements = await Advertisement.find({
      isPublished: true,
    }).select("-userId");

    return (
      <AdvertisementsList
        advertisementsList={JSON.parse(JSON.stringify(advertisements))}
      />
    );
  } catch (err) {
    console.log(err);
  }
}
