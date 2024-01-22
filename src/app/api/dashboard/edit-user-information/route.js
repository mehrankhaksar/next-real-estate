import { NextResponse } from "next/server";

import { getServerSession } from "next-auth";

import connectDB from "@/utils/connectDB";
import User from "@/models/User";

export async function PATCH(req) {
  const session = await getServerSession(req);
  if (!session)
    return NextResponse.json(
      { error: "لطفا وارد حساب کاربری خود شوید" },
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

    const { avatar, firstName, lastName } = await req.json();

    user.avatar = avatar;
    user.firstName = firstName;
    user.lastName = lastName;

    await user.save();
    return NextResponse.json(
      { message: "اطلاعات با موفقیت ویرایش شد" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { error: "خطایی در سرور رخ داده است" },
      { status: 500 }
    );
  }
}
