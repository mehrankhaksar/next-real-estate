import { NextResponse } from "next/server";

import { getServerSession } from "next-auth";

import connectDB from "@/utils/connectDB";
import User from "@/models/User";
import Advertisement from "@/models/Advertisement";

export async function PATCH(req) {
  const session = await getServerSession(req);
  if (!session)
    return NextResponse.json(
      { error: "لطفا وارد حساب خود شوید" },
      { status: 401 }
    );

  try {
    await connectDB();

    const {
      _id,
      title,
      province,
      city,
      address,
      phoneNumber,
      price,
      realEstate,
      description,
      category,
      amenities,
      rules,
      constructionDate,
    } = await req.json();

    const user = await User.findOne({ email: session.user.email });
    if (!user)
      return NextResponse.json(
        { error: "حساب کاربری یافت نشد" },
        { status: 404 }
      );

    const advertisement = await Advertisement.findOne({ _id });

    if (!user._id.equals(advertisement.userId))
      return NextResponse.json(
        { error: "دسترسی شما به این آگهی محدود شده است" },
        { status: 401 }
      );

    const newAmenities = amenities.filter((item) => item !== "");
    const newRule = rules.filter((item) => item !== "");

    advertisement.title = title;
    advertisement.province = province;
    advertisement.city = city;
    advertisement.address = address;
    advertisement.phoneNumber = phoneNumber;
    advertisement.price = price;
    advertisement.realEstate = realEstate;
    advertisement.description = description;
    advertisement.category = category;
    advertisement.amenities = newAmenities;
    advertisement.rules = newRule;
    advertisement.constructionDate = constructionDate;

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
