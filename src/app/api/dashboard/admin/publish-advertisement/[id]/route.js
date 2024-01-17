import { NextResponse } from "next/server";

import { getServerSession } from "next-auth";

import connectDB from "@/utils/connectDB";
import User from "@/models/User";
import Advertisement from "@/models/Advertisement";

export async function PATCH(req, context) {
  const session = await getServerSession(req);
  if (!session)
    return NextResponse.json(
      { error: "لطفا وارد حساب کاربری خود شوید" },
      { status: 401 }
    );

  try {
    await connectDB();

    const { id } = context.params;

    const user = await User.findOne({ email: session.user.email });
    if (!user)
      return NextResponse.json(
        { error: "حساب کاربری یافت نشد" },
        { status: 404 }
      );

    if (user.role !== "ADMIN")
      return NextResponse.json(
        { error: "دسترسی شما محدود شده است" },
        { status: 403 }
      );

    const advertisement = await Advertisement.findOne({ _id: id });

    advertisement.isPublished = true;
    advertisement.save();

    return NextResponse.json(
      { message: "آگهی با موفقیت منتشر شد" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { error: "خطایی در سرور رخ داده است" },
      { status: 500 }
    );
  }
}
