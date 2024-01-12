import { Schema, models, model } from "mongoose";

const advertisementSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    province: {
      type: String,
      required: true,
    },
    city: {
      type: String,
    },
    address: {
      type: String,
      required: true,
    },
    realEstate: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    category: {
      type: String,
      enum: ["villa", "apartment", "store", "office"],
      required: true,
    },
    constructionDate: {
      type: Date,
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
    isPublished: {
      type: Boolean,
      default: false,
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
