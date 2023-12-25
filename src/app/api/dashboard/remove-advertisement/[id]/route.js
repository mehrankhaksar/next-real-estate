import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";

import connectDB from "@/utils/connectDB";
import User from "@/models/User";
import Advertisement from "@/models/Advertisement";

export async function DELETE(req, context) {
  try {
    await connectDB();

    const session = await getServerSession(req);
    if (!session)
      return NextResponse.json(
        { error: "لطفا وارد حساب خود شوید" },
        { status: 401 }
      );
    const user = await User.findOne({ email: session.user.email });
    if (!user)
      return NextResponse.json(
        { error: "حساب کاربری یافت نشد" },
        { status: 404 }
      );

    const { id } = context.params;

    const advertisement = await Advertisement.findOne({ _id: id });
    if (!user._id.equals(advertisement.userId))
      return NextResponse.json(
        { error: "دسترسی شما به این آگهی محدود شده است" },
        { status: 403 }
      );

    await Advertisement.deleteOne({ _id: id });
    return NextResponse.json(
      { message: "آگهی با موفقیت حذف شد" },
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
