import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.set("strictQuery", false);

  if (mongoose.connections[0].readyState) return;

  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected to DB");
};

export default connectDB;
