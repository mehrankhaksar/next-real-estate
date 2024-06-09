import connectDB from "@/utils/connectDB";
import Advertisement from "@/models/Advertisement";

import HomePage from "@/components/templates/HomePage";

export default async function Home() {
  try {
    await connectDB();

    const advertisements = await Advertisement.find({
      isPublished: true,
    }).select("-userId");

    return (
      <HomePage advertisements={JSON.parse(JSON.stringify(advertisements))} />
    );
  } catch (err) {
    console.log(err);
  }
}
