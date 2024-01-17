import { NextResponse } from "next/server";

import { getServerSession } from "next-auth";

import connectDB from "@/utils/connectDB";
import User from "@/models/User";

export async function DELETE(req, context) {
  const session = await getServerSession(req);
  if (!session)
    return NextResponse.json(
      { error: "لطفا وارد حساب خود شوید" },
      { status: 401 }
    );

  try {
    await connectDB();

    const admin = await User.findOne({ email: session.user.email });
    if (!admin || admin.role !== "ADMIN")
      return NextResponse.json(
        { error: "دسترسی شما محدود شده است" },
        { status: 403 }
      );

    const { id } = context.params;

    const user = await User.findOne({ _id: id });
    if (!user)
      return NextResponse.json(
        { error: "حساب کاربری یافت نشد" },
        { status: 404 }
      );

    await User.deleteOne({ _id: id });
    return NextResponse.json(
      { message: "کاربر با موفقیت حذف شد" },
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
