import connectDB from "@/utils/connectDB";
import Advertisement from "@/models/Advertisement";

import AdvertisementsPage from "@/components/templates/AdvertisementsPage";

export default async function Advertisements({ searchParams }) {
  try {
    await connectDB();

    const advertisements = await Advertisement.find({
      isPublished: true,
    }).select("-userId");

    let finalData = [];
    if (searchParams.category) {
      if (searchParams.category === "all") {
        finalData = advertisements;
      } else {
        finalData = advertisements.filter(
          (item) => item.category === searchParams.category
        );
      }
    }

    return (
      <AdvertisementsPage
        category={searchParams.category}
        advertisements={JSON.parse(JSON.stringify(finalData))}
      />
    );
  } catch (err) {
    console.log(err);
  }
}
