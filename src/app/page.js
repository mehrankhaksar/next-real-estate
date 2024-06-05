import connectDB from "@/utils/connectDB";
import Advertisement from "@/models/Advertisement";

import HomePage from "@/components/templates/HomePage";

export default async function Home() {
  try {
    await connectDB();

    const advertisementsList = await Advertisement.find({
      isPublished: true,
    }).select("-userId");

    return (
      <HomePage
        advertisementsList={JSON.parse(JSON.stringify(advertisementsList))}
      />
    );
  } catch (err) {
    console.log(err);
  }
}
