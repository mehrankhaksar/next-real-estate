import { NextResponse } from "next/server";

import connectDB from "@/utils/connectDB";
import User from "@/models/User";

import { hashPassword } from "@/utils/auth";

export async function POST(req) {
  try {
    await connectDB();

    const { email, password } = await req.json();

    const user = await User.findOne({ email });
    if (user)
      return NextResponse.json(
        { error: "حساب کاربری وحود دارد" },
        { status: 422 }
      );

    const hashedPassword = await hashPassword(password);

    const newUser = await User.create({
      email: email,
      password: hashedPassword,
    });
    console.log(newUser);
    return NextResponse.json(
      { message: "حساب کاربری با موفقیت ساخته شد" },
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
