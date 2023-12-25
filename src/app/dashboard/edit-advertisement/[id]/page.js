import EditAdvertisementPage from "@/components/templates/EditAdvertisementPage";
import Advertisement from "@/models/Advertisement";
import connectDB from "@/utils/connectDB";

export default async function EditAdvertisement({ params: { id } }) {
  try {
    await connectDB();
  } catch (err) {
    console.log(err);
  }

  const advertisement = await Advertisement.findOne({ _id: id });

  return (
    <EditAdvertisementPage
      advertisement={JSON.parse(JSON.stringify(advertisement))}
    />
  );
}
