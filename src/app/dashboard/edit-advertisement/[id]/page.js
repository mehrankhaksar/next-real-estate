import connectDB from "@/utils/connectDB";
import Advertisement from "@/models/Advertisement";

import EditAdvertisementPage from "@/components/templates/EditAdvertisementPage";

export default async function EditAdvertisement({ params: { id } }) {
  try {
    await connectDB();

    const advertisement = await Advertisement.findOne({ _id: id });

    return (
      <EditAdvertisementPage
        advertisement={JSON.parse(JSON.stringify(advertisement))}
      />
    );
  } catch (err) {
    console.log(err);
  }
}
