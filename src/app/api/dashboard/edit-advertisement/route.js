import { NextResponse } from "next/server";

import { getServerSession } from "next-auth";

import connectDB from "@/utils/connectDB";
import User from "@/models/User";
import Advertisement from "@/models/Advertisement";

export async function PATCH(req) {
  const session = await getServerSession(req);
  if (!session)
    return NextResponse.json(
      { error: "وارد حساب کاربری خود شوید" },
      { status: 401 }
    );

  try {
    await connectDB();

    const {
      _id,
      title,
      price,
      phoneNumber,
      province,
      city,
      address,
      realEstate,
      description,
      category,
      constructionDate,
      amenities,
      rules,
    } = await req.json();

    const user = await User.findOne({ email: session.user.email });
    if (!user)
      return NextResponse.json(
        { error: "حساب کاربری یافت نشد" },
        { status: 404 }
      );

    const advertisement = await Advertisement.findOne({ _id });
    if (user.role !== "ADMIN" && !user._id.equals(advertisement.userId))
      return NextResponse.json(
        { error: "دسترسی شما به این آگهی محدود شده است" },
        { status: 401 }
      );

    const newAmenities = amenities.filter((item) => item !== "");
    const newRule = rules.filter((item) => item !== "");

    advertisement.title = title;
    advertisement.price = price;
    advertisement.phoneNumber = phoneNumber;
    advertisement.province = province;
    advertisement.city = city;
    advertisement.address = address;
    advertisement.realEstate = realEstate;
    advertisement.description = description;
    advertisement.category = category;
    advertisement.constructionDate = constructionDate;
    advertisement.amenities = newAmenities;
    advertisement.rules = newRule;

    await advertisement.save();
    return NextResponse.json(
      { message: "آگهی با موفقیت ویرایش شد" },
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "خطایی در سرور رخ داده است" },
      { status: 500 }
    );
  }
}
