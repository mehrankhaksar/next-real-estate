import { Schema, models, model } from "mongoose";

const advertisementSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    provinces: {
      type: String,
      required: true,
    },
    cities: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    realEstate: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ["villa", "apartment", "store", "office"],
      required: true,
    },
    amenities: {
      type: [String],
      default: [],
    },
    rules: {
      type: [String],
      default: [],
    },
    constructionDate: {
      type: Date,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timeStamps: true,
  }
);

const Advertisement =
  models.Advertisement || model("Advertisement", advertisementSchema);

export default Advertisement;
