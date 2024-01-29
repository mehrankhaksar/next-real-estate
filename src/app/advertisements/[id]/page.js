import connectDB from "@/utils/connectDB";
import Advertisement from "@/models/Advertisement";

import AdvertisementDetailsPage from "@/components/templates/AdvertisementDetailsPage";

export default async function AdvertisementDetails({ params: { id } }) {
  try {
    await connectDB();

    const advertisement = await Advertisement.findOne({ _id: id });

    return (
      <AdvertisementDetailsPage
        advertisement={JSON.parse(JSON.stringify(advertisement))}
      />
    );
  } catch (err) {
    console.log(err);
  }
}
