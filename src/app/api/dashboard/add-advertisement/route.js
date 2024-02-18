import { NextResponse } from "next/server";

import { getServerSession } from "next-auth";

import connectDB from "@/utils/connectDB";
import User from "@/models/User";
import Advertisement from "@/models/Advertisement";

import { Types } from "mongoose";

export async function POST(req) {
  const session = await getServerSession(req);
  if (!session)
    return NextResponse.json(
      { error: "وارد حساب کاربری خود شوید" },
      { status: 401 }
    );

  try {
    await connectDB();

    const user = await User.findOne({ email: session.user.email });
    if (!user)
      return NextResponse.json(
        { error: "حساب کاربری یافت نشد" },
        { status: 404 }
      );
      
    const {
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

    const newAmenities = amenities.filter((item) => item !== "");
    const newRule = rules.filter((item) => item !== "");

    await Advertisement.create({
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
      amenities: newAmenities,
      rules: newRule,
      userId: new Types.ObjectId(user._id),
    });
    return NextResponse.json(
      { message: "آگهی با موفقیت ثبت شد" },
      { status: 201 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "خطایی در سرور رخ داده است" },
      { status: 500 }
    );
  }
}
