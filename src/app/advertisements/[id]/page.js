import connectDB from "@/utils/connectDB";
import Advertisement from "@/models/Advertisement";

import AdvertisementDetailsPage from "@/components/templates/AdvertisementDetailsPage";

export const generateMetadata = async ({ params: { id } }) => {
  try {
    await connectDB();

    const advertisement = await Advertisement.findOne({ _id: id });

    return {
      title: advertisement.title,
      description: advertisement.description,
    };
  } catch (err) {
    console.log(err);
  }
};

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
